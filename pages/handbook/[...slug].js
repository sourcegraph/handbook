import matter from "gray-matter"
import { useRouter } from "next/router"
import Error from "next/error"
import { useFormScreenPlugin, usePlugin, useCMS } from "tinacms"
import { InlineText } from "react-tinacms-inline"
import { InlineWysiwyg } from "react-tinacms-editor"
import { getGithubPreviewProps, parseMarkdown, parseJson } from "next-tinacms-github"
import { InlineForm } from "react-tinacms-inline"
import Head from "@components/head"
import Layout from "@components/layout"
import PostNavigation from "@components/post-navigation"
import RichText from "@components/rich-text"
import PostFeedback from "@components/post-feedback"
import SideNav from "@components/side-nav"
import DocWrapper from "@components/doc-wrapper"
import MarkdownWrapper from "@components/markdown-wrapper"
import Toc from "@components/Toc"
import {
  useCreateMainDoc,
  useFormEditDoc,
  useCreateChildPage,
  useNavigationForm,
  useGlobalStyleForm,
} from "@hooks"
import { createToc } from "@utils"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"
import { useLastEdited } from "../../hooks/useLastEdited"

const DocTemplate = (props) => {
  const cms = useCMS()
  const previewURL = props.previewURL || ""
  const router = useRouter()
  if (!props.file) {
    return <Error statusCode={404} />
  }

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const [data, form] = useFormEditDoc(props.file)
  usePlugin(form)
  useLastEdited(form)
  const [navData, navForm] = useNavigationForm(props.navigation, props.preview)
  const nestedDocs = navData.config
  const [styleData] = useGlobalStyleForm(props.styleFile, props.preview)

  useFormScreenPlugin(navForm)
  // wrappers around using the content-creator puglin with tinaCMS
  useCreateMainDoc(nestedDocs)
  useCreateChildPage(nestedDocs)

  return (
    <Layout showDocsSearcher splitView theme={styleData} searchIndex="tina-starter-alpaca-Docs">
      <Head title={data.frontmatter.title} />
      <SideNav allNestedDocs={nestedDocs} currentSlug={router.query.slug} />
      <div
        style={{
          maxWidth: "762px",
          marginLeft: 0,
          flex: "1 1 0",
        }}
      >
        <InlineForm form={form}>
          <DocWrapper styled={true}>
            <RichText>
              <main>
                <h1>
                  <InlineText name="frontmatter.title" />
                </h1>
                {!props.preview && props.Alltocs.length > 0 && <Toc tocItems={props.Alltocs} />}
                <InlineWysiwyg
                  name="markdownBody"
                  sticky="62px"
                  imageProps={{
                    uploadDir: () => "/images/",
                    parse: (media) => media.id,
                    previewSrc(src) {
                      return cms.media.previewSrc(src)
                    },
                  }}
                >
                  <MarkdownWrapper source={data.markdownBody} />
                </InlineWysiwyg>
                {data.frontmatter.last_edited && (
                  <p style={{ fontSize: ".8rem", color: "grey" }}>
                    Last updated: {new Date(data.frontmatter.last_edited).toDateString()}
                  </p>
                )}
              </main>
            </RichText>
            <PostNavigation allNestedDocs={nestedDocs} />
            <PostFeedback />
          </DocWrapper>
        </InlineForm>
      </div>
    </Layout>
  )
}

// read more about getStaticProps, getStaticPaths and previewMode (its pretty cool stuff)
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

export const getStaticProps = async function ({ preview, previewData, params }) {
  const global = await getGlobalStaticProps(preview, previewData)
  const { slug } = params
  const fileRelativePath = `handbook/${slug.join("/")}.md`

  // we need these to be in scope for the catch statment
  let previewProps
  let allNestedDocsRemote
  let Alltocs = ""
  // if we are in preview mode we will get the contents from github
  if (preview) {
    try {
      previewProps = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath,
        parse: parseMarkdown,
      })
      allNestedDocsRemote = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "handbook/config.json",
        parse: parseJson,
      })

      if (typeof window === "undefined") {
        Alltocs = createToc(previewProps.props.file.data.markdownBody)
      }
      return {
        props: {
          ...global,
          // markdown file stored in file:
          ...previewProps.props,
          // json for navigation form
          navigation: {
            ...allNestedDocsRemote.props.file,
            fileRelativePath: `handbook/config.json`,
          },
          Alltocs,
          previewURL: `https://raw.githubusercontent.com/${previewData.working_repo_full_name}/${previewData.head_branch}`,
        },
      }
    } catch (e) {
      // return the erros from gitGithubPreviewProps
      return {
        props: {
          ...previewProps.props,
          ...allNestedDocsRemote.props,
        },
      }
    }
  }

  // Not in preview mode so we will get contents from the file system
  const allNestedDocs = require("../../handbook/config.json")
  const content = await import(`@handbook/${slug.join("/")}.md`)
  const data = matter(content.default)

  // Create Toc (table of contents)
  if (typeof window === "undefined") {
    Alltocs = createToc(data.content)
  }

  return {
    props: {
      // the markdown file
      ...global,
      file: {
        fileRelativePath: `handbook/${slug.join("/")}.md`,
        data: {
          frontmatter: data.data,
          markdownBody: data.content,
        },
      },
      navigation: {
        fileRelativePath: `handbook/config.json`,
        data: allNestedDocs,
      },
      Alltocs,
      preview: false,
      error: null,
    },
  }
}

export const getStaticPaths = async function () {
  const fg = require("fast-glob")
  const contentDir = "handbook/"
  const files = await fg(`${contentDir}**/*.md`)
  return {
    fallback: true,
    paths: files
      // .filter(file => !file.endsWith('index.md'))
      .map((file) => {
        const path = file.substring(contentDir.length, file.length - 3)
        return { params: { slug: path.split("/") } }
      }),
  }
}

export default DocTemplate
