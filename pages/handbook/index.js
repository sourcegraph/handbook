import { useRouter } from "next/router"
import { useEffect } from "react"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"

// Redirect to the first doc page
const DocIndex = (props) => {
  const router = useRouter()
  const topDoc = props.navigation.data.config[0].slug

  useEffect(() => {
    router.push(`/handbook/${topDoc}`)
  })
  return <p>Redirecting...</p>
}

// read more about getStaticProps, getStaticPaths and previewMode (its pretty cool stuff)
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

export const getStaticProps = async function ({ preview, previewData }) {
  let allNestedDocsRemote
  // if we are in preview mode we will get the contents from github
  if (preview) {
    try {
      allNestedDocsRemote = await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "handbook/config.json",
        parse: parseJson,
      })

      return {
        props: {
          navigation: {
            ...allNestedDocsRemote.props.file,
            fileRelativePath: `handbook/config.json`,
          },
        },
      }
    } catch (e) {
      // return the erros from gitGithubPreviewProps
      return {
        props: {
          ...allNestedDocsRemote.props,
        },
      }
    }
  }

  // Not in preview mode so we will get contents from the file system
  const allNestedDocs = require("../../handbook/config.json")

  return {
    props: {
      navigation: {
        fileRelativePath: `handbook/config.json`,
        data: allNestedDocs,
      },
      preview: false,
      error: null,
    },
  }
}

export default DocIndex
