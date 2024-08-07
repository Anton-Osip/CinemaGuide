import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 811px;
    flex-grow: 1;
`
const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
`
const Item = styled.li`

`
const Link = styled(NavLink)`
    ${font({
        weight: 400,
        Fmax: 24,
        Fmin: 24,
        lineHeight: 1.3,
    })}
    position: relative;
    transition: ${theme.animations.transition};

    &:before {
        content: '';
        display: inline-flex;
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.secondaryColor};
        transform: rotateY(90deg);
        transition: ${theme.animations.transition};
    }

    .active&:before {
        transform: rotateY(0deg);
    }

    &:hover {
        color: ${theme.colors.hoverColor};
    }

    @media ${theme.media.tablet} {
        width: 24px;
        height: 24px;
        .active& > svg {
            fill: ${theme.colors.hoverColor};
        }

        &:before {
            display: none
        }
    }
`


export const s = {Nav, List, Item, Link}