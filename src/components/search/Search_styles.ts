import styled, {css} from "styled-components";
import {font} from "../../styles/Common";
import search from '../../assets/image/searchIcon.svg'
import {theme} from "../../styles/Theme";

const Form = styled.form`
    max-width: 496px;
    flex-grow: 1;
    display: flex;
    position: relative;
`

const Input = styled.input<{ isSuggests?: boolean }>`
    outline: none;
    border: 0;
    border-radius: 8px;
    background:${theme.colors.secondaryBg} url(${search}) no-repeat 16px center;
    padding: 16px 16px 16px 52px;
    width: 100%;
    ${font({Fmax: 18, Fmin: 18})}

    ${props => props.isSuggests && css<{ isSuggests?: boolean }>`
        border-radius: 8px 0 0 8px;
    `}
`

const Button = styled.button`
    height: 54px;
    width: 54px;
    background: ${theme.colors.secondaryBg};
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    position: relative;

    &:after, &:before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.fontColor};
        width: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
    }

    &:after {
        transform: translateX(-50%) rotate(45deg);
    }

    &:before {
        transform: translateX(-50%) rotate(-45deg);
    }
`


export const s = {Form, Input, Button}