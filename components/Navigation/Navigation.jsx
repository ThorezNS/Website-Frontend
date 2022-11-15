import styled from 'styled-components'
import { NavigationLink } from '../Link'
import React from 'react'
import Center from 'layouts/Center'
import Link from '../Link/Link'


const StyledNav = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.color.navBackground};
  border-bottom: 2px solid ${({ theme }) => theme.color.accent};
`
const StyledLogo = styled.img`
  height: 100%;
  align-self: flex-start;
  color:${({ theme }) => theme.color.accent};
`
const StyledLogoLink = styled(Link)`
`

const LogoLink = ({href, src}) =>(
    <StyledLogoLink href={href}>
      <StyledLogo src={src} />
    </StyledLogoLink>

)
const StyledOrderedList = styled.ol`
  margin-left: auto;
`

const Navigation = ({ children }) => (
  <>
    <StyledNav>
      <Center intrinsicCenter>
        <LogoLink href="/" src="/static/images/logo.svg"/>
        <StyledOrderedList>
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/browse/latest">Latest</NavigationLink>
        </StyledOrderedList>
      </Center>
    </StyledNav>
    <Center>
      {children}
    </Center>
  </>
)

export default Navigation
