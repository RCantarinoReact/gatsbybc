import React from "react"
import PropTypes from "prop-types"
import SideBar from "../Sidebar"
import GlobalStyles from '../../styles/global'
import MenuBar from '../MenuBar'
import { TransitionPortal } from "gatsby-plugin-transition-link"

//estilos
import * as S from './styled'

const Layout = ({ children }) => {
  return (

    <S.LayoutHelper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <SideBar />
      </TransitionPortal>
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </S.LayoutHelper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
