import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type BlockType = {
    value: number
}

const Block = styled.div<BlockType>`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 12px;

    border-radius: 16px;

    ${(props) => {
        if (props.value < 4) return css` background-color: red;`
        if (props.value < 7 && props.value >= 4) return css` background-color: grey;`
        if (props.value < 9 && props.value >= 7) return css` background-color: green;`
        if (props.value < 11 && props.value >= 9) return css` background-color: yellow;`
    }}
`

const Rating = styled.span`
    color: ${theme.colors.fontColor};
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
`

export const s = {Block, Rating}