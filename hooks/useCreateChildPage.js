import { useCMS, usePlugins } from "tinacms"
import { useRouter } from "next/router"
import slugify from "slugify"
import isNavActive from "@utils/isNavActive"

import { toMarkdownString, flatDocs, getRandID } from "@utils"
import { removeInvalidChars } from "../utils/removeInvalidChars"

const useCreateChildPage = async (allDocs) => {
  const router = useRouter()
  const cms = useCMS()
  const parentObject = allDocs.find((item) => item.slug.split("/")[0] === router.query.slug[0])

  // // find all the groups
  const groups = []
  allDocs.forEach((doc) => {
    // find the curent active doc
    if (isNavActive(doc, router.query.slug.join("/"))) {
      // since we only have 3rd level groups this is ok
      doc.children.forEach((childDoc) => {
        if (childDoc.type === "group") {
          groups.push(childDoc.title)
        }
      })
    }
  })
  const fields = [
    {
      name: "title",
      label: "Title",
      component: "text",
      required: true,
      validate(value, allValues, meta, field) {
        if (!value) {
          return "A title is required"
        }
        let valSlug = `${router.query.slug[0]}/${slugify(value, { lower: true })}`
        // make sure slug is unique
        const containsSlug = (el) => {
          return el.slug === valSlug
        }
        // some function reference can be found here
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
        let notValidTitle = flatDocs(allDocs).some(containsSlug)
        if (notValidTitle) return "titles must be unique, maybe add a number to the end?"
      },
    },
  ]

  // dont want to give them an option for group if there is none to select
  if (groups.length > 0) {
    fields.push({
      name: "groupIn",
      label: "Group in",
      description: "Group under a name to create a 3rd level",
      component: "select",
      options: ["No Group", ...groups],
    })
  }
  usePlugins([
    {
      __type: "content-creator",
      name: `Create Child Page for ${parentObject?.title || ""}`,
      fields,
      onSubmit: async ({ title, groupIn }) => {
        const slug = removeInvalidChars(slugify(title, { lower: true }))

        // get confile JSON file from github
        const configFile = await cms.api.github.fetchFile("handbook/config.json", true)
        const allNestedDocsRemote = JSON.parse(configFile.content)
        const category = router.query.slug[0]
        const fileRelativePath = `handbook/${router.query.slug[0]}/${slug}.md`
        const sha = configFile.sha

        const defaultItem = {
          type: "link",
          slug: removeInvalidChars(category) + "/" + slug,
          title,
          id: getRandID(),
          children: [],
        }

        // find the current category and add it to it
        allNestedDocsRemote.config.forEach((element) => {
          if (element.slug.toLowerCase().startsWith(category.toLowerCase())) {
            if (!groupIn || groupIn === "No Group") {
              // not adding it to a third level group
              element.children.unshift(defaultItem)
            } else {
              // we are adding it to a third level group
              // find the group
              element.children.forEach((child) => {
                if (child.type === "group" && child.title === groupIn) {
                  // we found the group now add a new child that links to the new doc
                  child.children.unshift(defaultItem)
                }
              })
            }
          }
        })

        // commit new json file to github
        await cms.api.github.commit(
          "handbook/config.json",
          sha,
          JSON.stringify(allNestedDocsRemote, null, 2),
          "Update from TinaCMS"
        )

        return cms.api.github
          .commit(
            fileRelativePath,
            null,
            toMarkdownString({
              fileRelativePath,
              rawFrontmatter: {
                title,
              },
            })
          )
          .then(() => {
            window.location.href = `/handbook/${router.query.slug[0]}/${slug}`
          })
      },
    },
  ])
}

export default useCreateChildPage
