import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

export const Auth: React.FC = () => {
    return (
        <StyledAuth>
            Войти
        </StyledAuth>
    )
}

const StyledAuth = styled.button`
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
`