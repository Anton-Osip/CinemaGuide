import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {theme} from "../../styles/Theme";

const Link = styled(NavLink)`
    width: 240px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${theme.media.tablet} {
        width: 136px;
        height: 18px;
        margin-right: auto;
        justify-content: flex-start;
    }
`
const Image = styled.img`
    object-fit: cover;
    @media ${theme.media.tablet} {
        width: 136px;
        height: 18px;
    }
`

export const s = {Link, Image}