import { useState } from "react"
import { shape, bool, array, string } from "prop-types"
import Link from "next/link"

import isNavActive from "@utils/isNavActive"
import { NavItemLink, NavGroup } from "./styles"

const NavItem = ({ itemData: { slug, children, title, type }, active, currentSlug }) => {
  const [showChildrens, setShowChildrens] = useState(type === "group")
  const currentSlugKey = currentSlug.join("/")

  /* Methods */
  const handleToggleGroup = (ev) => {
    ev.preventDefault()
    setShowChildrens(!showChildrens)
  }

  const renderLink = (type) => {
    const childrenLength = (children && children.length) || 0
    let icon = ""
    if (childrenLength === 0) {
      icon = <i className="dot" />
    } else {
      icon = <i className="icon-arrow_right" />
    }

    return (
      <NavItemLink
        active={active || isNavActive({ children }, currentSlugKey)}
        show={showChildrens || active}
        {...(type === "group" && {
          href: "#",
          onClick: handleToggleGroup,
        })}
      >
        {icon}
        {title}
      </NavItemLink>
    )
  }

  return (
    <div>
      {type === "link" && (
        <Link href={`/handbook/[...slug]`} as={`/handbook/${slug}`} passHref>
          {renderLink()}
        </Link>
      )}
      {type === "group" && renderLink("group")}

      {children && (
        <NavGroup active={active || showChildrens}>
          {children.map((item, index) => (
            <NavItem
              itemData={item}
              key={index}
              active={currentSlugKey === item.slug}
              currentSlug={currentSlug}
            />
          ))}
        </NavGroup>
      )}
    </div>
  )
}

NavItem.propTypes = {
  active: bool,
  itemData: shape(),
  currentSlug: array,
  groupIn: string,
}

NavItem.defaultProps = {
  active: false,
}

export default NavItem
