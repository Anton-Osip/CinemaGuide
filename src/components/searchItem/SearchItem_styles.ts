import styled from "styled-components";

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 8px;
    border-radius: 6px;
`

const Image = styled.img`
    max-height: 52px;
`

const Rating = styled.div`
    color: rgb(255, 255, 255);
    font-family: Play, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0;
    padding: 2px 8px;
    border-radius: 16px;
    background: rgb(48, 142, 33);

    & span {
        margin-left: 4px;
    }
`
const ReleaseYear = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-family: Play, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
`
const Genres = styled.div` color: rgba(255, 255, 255, 0.7);
    font-family: Play, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
`
const Time = styled.p` color: rgba(255, 255, 255, 0.7);
    font-family: Play, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
`
const Title = styled.p`
    color: rgb(255, 255, 255);
    font-family: Play, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0;
    text-align: left;
`

export const s = {Item, Image, Rating, ReleaseYear, Genres, Time, Title}