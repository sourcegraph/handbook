import { useState } from "react"
import { bool } from "prop-types"
import Link from "next/link"

import SourcegraphLogo from "../../public/icons/sourcegraph-logo.svg"
import GitHubLogo from "../../public/icons/github.svg"

import Search from "@components/search"

// import { theme } from "@utils"

import {
  TopBarStyled,
  LogoWrapperStyled,
  SearchWrapperStyled,
  NavWrapperStyled,
  NavBarLink,
  IconButton,
} from "./styles"

const TopBar = ({ showDocsSearcher, theme, searchIndex, searchText }) => {
  /* States */
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  /* Methods */
  const handleToggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  const handleToggleSearchInput = () => setShowMobileSearch(!showMobileSearch)

  return (
    <TopBarStyled>
      <LogoWrapperStyled>
        <Link href="/">
          <a>
            <SourcegraphLogo height="50" />
          </a>
        </Link>
        <div>
          {showDocsSearcher && (
            <IconButton onClick={handleToggleSearchInput}>
              <i className="icon-search" />
            </IconButton>
          )}
          <IconButton onClick={handleToggleMobileMenu}>
            {!showMobileMenu ? <i className="icon-menu_icon" /> : <i className="icon-close" />}
          </IconButton>
        </div>
      </LogoWrapperStyled>
      {showDocsSearcher && (
        <SearchWrapperStyled active={showMobileSearch}>
          <div>
            <Search
              handleToggleSearchInput={handleToggleSearchInput}
              showMobileSearch={showMobileSearch}
              searchIndex={searchIndex}
              searchText={searchText}
            />
          </div>
        </SearchWrapperStyled>
      )}
      <NavWrapperStyled showMobileMenu={showMobileMenu}>
        <NavBarLink
          href="https://github.com/sourcegraph/handbook"
          target="_blank"
          rel="noopener noreferrer"
          title="View source"
        >
          GitHub
        </NavBarLink>
        <NavBarLink
          href="https://github.com/sourcegraph/handbook"
          target="_blank"
          rel="noopener noreferrer"
          title="View source"
        >
          <GitHubLogo width="32" height="32" />
        </NavBarLink>
      </NavWrapperStyled>
    </TopBarStyled>
  )
}

TopBar.propTypes = {
  showDocsSearcher: bool,
}

export default TopBar
