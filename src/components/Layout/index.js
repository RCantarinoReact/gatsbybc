import React from "react"
import PropTypes from "prop-types"
import SideBar from "../Sidebar"
import GlobalStyles from '../../styles/global'
import MenuBar from '../MenuBar'

//estilos
import * as S from './styled'

const Layout = ({ children }) => {
  return (

    <S.LayoutHelper>
      <GlobalStyles />
      <SideBar />
    
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <MenuBar />
    </S.LayoutHelper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
