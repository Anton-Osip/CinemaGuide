import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const RandomMovie = styled.section`
    position: relative;
    min-height: 100lvh;
    @media ${theme.media.mobile} {
        padding-top: 62px;
    }
`
const Image = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 53%;
    bottom: 0;
    height: 100%;
    display: block;
    margin-left: auto;
    object-fit: cover;
    @media ${theme.media.mobile} {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
    }
`
const Info = styled.div`
    max-width: 600px;
    width: 100%;
    padding: 202px 0 122px;
    @media ${theme.media.mobile} {
        padding: 24px 0;
    }
`
const Text = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`
const Title = styled.h1`
    color: ${theme.colors.fontColor};
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: 0;
    margin-bottom: 16px;
    margin-top: 16px;
    @media ${theme.media.mobile} {
        margin-bottom: 12px;
        margin-top: 12px;
        font-size: 24px;
    }
`
const Description = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0;
    margin-bottom: 60px;
    @media ${theme.media.mobile} {
        margin-bottom: 32px;
        font-size: 18px;
    }
`

export const s = {RandomMovie, Image, Info, Text, Title, Description}