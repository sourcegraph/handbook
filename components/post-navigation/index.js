import Link from "next/link"
import { useRouter } from "next/router"
import { array } from "prop-types"

import { flatDocs } from "@utils"

import { PostNavigationStyled, PaginationLink } from "./styles"

const PostNavigation = ({ allNestedDocs }) => {
  const router = useRouter()
  const { query } = router
  const allDocsFlatted = flatDocs(allNestedDocs)
  const foundIndex = allDocsFlatted.findIndex((doc) => doc.slug === query.slug.join("/"))
  const prevPage = allDocsFlatted[foundIndex - 1]
  const nextPage = allDocsFlatted[foundIndex + 1]

  /* Methods */
  const renderButton = ({ pageObject, label, iconLeft, iconRight }) => (
    <Link href="/handbook[...slug]" as={`/handbook${pageObject.slug}`} passHref>
      <PaginationLink>
        {iconLeft && iconLeft}
        <span>{label}</span>
        {iconRight && iconRight}
      </PaginationLink>
    </Link>
  )

  return (
    <PostNavigationStyled existPrev={Boolean(prevPage)}>
      {prevPage &&
        renderButton({
          pageObject: prevPage,
          label: "Previous article",
          iconLeft: <i className="icon-arrow_left" />,
        })}
      {nextPage &&
        renderButton({
          pageObject: nextPage,
          label: "Next article",
          iconRight: <i className="icon-arrow_right" />,
        })}
    </PostNavigationStyled>
  )
}

PostNavigation.propTypes = {
  allNestedDocs: array,
}

export default PostNavigation
