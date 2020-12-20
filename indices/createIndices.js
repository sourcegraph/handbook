require("dotenv").config()

import algoliasearch from "algoliasearch"
import fetchDocs from "./fetchDocs"

const MAX_BODY_LENGTH = 3000

const mapContentToIndex = ({ content, ...obj }) => {
  return {
    ...obj.data,
    excerpt: (content || "").substring(0, MAX_BODY_LENGTH),
    objectID: obj.data.slug,
  }
}

const saveIndex = async (client, indexName, data) => {
  const index = client.initIndex(indexName)
  const result = await index.saveObjects(data)
  console.log(`updated ${indexName}: ${result.objectIDs}`)
}

const createIndices = async () => {
  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY)

  const docs = await fetchDocs()
  await saveIndex(client, "tina-starter-alpaca-Docs", docs.map(mapContentToIndex))
}

createIndices()
  .then(() => {
    console.log("indices created")
  })
  .catch((e) => {
    console.error(e)
    process.kill(1)
  })
