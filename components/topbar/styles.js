import styled, { css } from "styled-components"

export const TopBarStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 24px;
  justify-content: space-between;
  position: relative;
  @media all and (min-width: 1024px) {
    display: flex;
  }
`

export const LogoWrapperStyled = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media all and (min-width: 1024px) {
    z-index: 999;
    div {
      display: none;
    }
  }
`

export const IconButton = styled.button`
  background-color: transparent;
  border: 0;
  color: white;
  outline: 0;
  font-size: 18px;
  padding-top: 2px;
  margin-right: 16px;
  width: 32px;
  &:last-child {
    margin-right: 0;
  }
`

export const NavWrapperStyled = styled.div`
  position: fixed;
  z-index: 999;
  height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.colors.primary};
  left: 0;
  top: 80px;
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ showMobileMenu }) =>
    showMobileMenu &&
    css`
      display: flex;
    `}
  @media all and (min-width: 1024px) {
    position: initial;
    display: flex;
    height: initial;
    flex-direction: row;
    justify-content: flex-end;
    max-width: 340px;
  }
`

export const NavBarLink = styled.a`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 48px;
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: center;
  @media all and (min-width: 1024px) {
    margin-right: 32px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.highlightBorder};
    margin-bottom: 0;
    width: initial;
  }
  img {
    max-width: 32px;
  }
  &:last-child {
    display: none;
  }
  @media all and (min-width: 1024px) {
    &:nth-last-child(2) {
      display: none;
    }
    &:last-child {
      display: block;
    }
  }
`

export const SearchWrapperStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 2px 4px 0 rgba(51, 51, 51, 0.1);
  width: 100%;
  z-index: 99;
  display: none;
  ${({ active }) =>
    active &&
    css`
      display: block;
    `}
  @media all and (min-width: 1024px) {
    display: flex;
    align-items: center;
    top: calc(50% - 22px);
    box-shadow: none;
    & > div {
      width: 100%;
      max-width: calc(1048px + 40px);
      margin: 0 auto;
      display: flex;
      &:before {
        content: "";
        flex: 1;
        display: block;
        max-width: 22%;
        margin-right: 10px;
      }
      & > div {
        flex: 1;
        max-width: 762px;
        margin-left: 0;
        input {
          max-width: 44vw;
        }
        & > div {
          max-width: calc(44vw - 2px);
        }
      }
    }
  }
  @media all and (min-width: 1900px) {
    & > div {
      & > div {
        input {
          max-width: 100%;
        }
        & > div {
          max-width: calc(100% - 2px);
        }
      }
    }
  }
`
