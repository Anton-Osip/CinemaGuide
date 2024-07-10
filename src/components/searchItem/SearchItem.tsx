import styled from "styled-components";
import {FilmType} from "../../data/films";
import React from "react";
import {FlexWrapper} from "../utils/FlexWrapper";
import {Icon} from "../icon/Icon";
import {s} from "./SearchItem_styles";

type SearchItemType = {
    film: FilmType
}

export const SearchItem: React.FC<SearchItemType> = ({film}: SearchItemType) => {
    return (
        <s.Item>
            <s.Image src = {film.posterUrl} alt = {film.title}/>
            <FlexWrapper direction = {'column'} gap = {'8px'}>
                <FlexWrapper align = {'center'} gap = {'12px'} wrap = {'wrap'}>
                    <s.Rating>
                        <Icon idIcon = {'ratingIcon'} width = "10" height = "10" viewBox = "0 0 10 10"/>
                        <span>{film.tmdbRating}</span>
                    </s.Rating>
                    <s.ReleaseYear>{film.releaseDate}</s.ReleaseYear>
                    <s.Genres>
                        {/* eslint-disable-next-line array-callback-return */}
                        {film.genres.map((genre, id) => {
                            if (id < 2) {
                                return <span>{genre} </span>
                            }
                        })}
                    </s.Genres>
                    <s.Time>
                        128 мин
                    </s.Time>
                </FlexWrapper>
                <s.Title>{film.title}</s.Title>
            </FlexWrapper>
        </s.Item>
    )
}
