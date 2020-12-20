import { useState } from "react"
import { array, string } from "prop-types"

import isNavActive from "@utils/isNavActive"
import NavItem from "./nav-item"

import { SideNavStyled, H3Styled } from "./styles"

const SideNav = ({ allNestedDocs, currentSlug, groupIn }) => {
  const [showDocs, setShowDocs] = useState(false)
  return (
    <SideNavStyled>
      <H3Styled onClick={() => setShowDocs(!showDocs)} active={showDocs}>
        <i className="icon-arrow_right" />
        Sections
      </H3Styled>
      <div className={`sideNavDocsList ${showDocs && "active"}`}>
        {allNestedDocs &&
          allNestedDocs.length > 0 &&
          allNestedDocs.map((doc) => (
            <NavItem
              itemData={doc}
              key={doc.id}
              active={isNavActive(doc, currentSlug.join("/"))}
              currentSlug={currentSlug}
            />
          ))}
      </div>
    </SideNavStyled>
  )
}

SideNav.propTypes = {
  allNestedDocs: array,
  currentSlug: array,
  groupIn: string,
}

export default SideNav
