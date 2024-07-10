import {theme} from "../../styles/Theme";
import styled from "styled-components";
import {font} from "../../styles/Common";

const Auth = styled.button`
    ${font({
        weight: 400,
        Fmax: 24,
        Fmin: 24,
        lineHeight: 1.3,
    })}
    transition: ${theme.animations.transition};
    cursor: pointer;

    &:hover {
        color: ${theme.colors.hoverColor};
    }

    @media ${theme.media.tablet} {
        width: 24px;
        height: 24px;
    }
`

export const s ={Auth}