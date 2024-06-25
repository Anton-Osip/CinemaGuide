import styled from "styled-components";
import {font} from '../../styles/Common'

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 811px;
    flex-grow: 1;
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
`

const Link = styled.a`
    ${font({
        weight: 400,
        Fmax: 24,
        Fmin: 24,
        lineHeight: 1.3,
    })}

`




export const s = {Nav, NavList, Link}