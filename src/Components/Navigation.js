import React from 'react'
import { pages } from '../Constants/NavbarConsts'
import { Navbar, NavbarButton, NavbarButtonContainer, NavbarContainer } from '../style'

const Navigation = () => {
  return (
    <NavbarContainer>
        {
            pages.map((page, ind) => 
            <NavbarButtonContainer>
                <NavbarButton href={page.link}>{page.name}</NavbarButton>
            </NavbarButtonContainer>)
        }
    </NavbarContainer>
  )
}

export default Navigation