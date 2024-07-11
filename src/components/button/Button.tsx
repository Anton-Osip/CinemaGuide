import React from "react";
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonPropsType = {
    onClick?: () => void
    children: string | React.ReactNode;
    mode: 'secondary' | 'primary'
    isIcon: boolean
}

export const Button: React.FC<ButtonPropsType> = ({onClick, children, mode, isIcon}: ButtonPropsType) => {
    return <StyledButton onClick = {onClick} mode = {mode} isIcon = {isIcon}>{children}</StyledButton>
}

const StyledButton = styled.button<{ mode: 'secondary' | 'primary', isIcon: boolean }>`
    color: ${theme.colors.fontColor};
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    border-radius: 28px;

    ${props => {
        if (props.isIcon) return css`
            padding: 16px 22px;
            display: flex;
            align-items: center;
            justify-content: center;
        `
        if (!props.isIcon) return css`padding: 16px 48px;`
    }}

    ${(props) => {
        if (props.mode === 'primary') return css`
            border: 1px solid rgba(0, 0, 0, 0.4);
            border-radius: 28px;
            background: rgb(56, 58, 60)
        `
        if (props.mode === 'secondary') return css`
            background: rgb(106, 93, 193);

            @media ${theme.media.mobile} {
                width: 100%
            }`
    }
    }

`