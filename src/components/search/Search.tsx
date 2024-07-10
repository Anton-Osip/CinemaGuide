import {s} from "./Search_styles"
import React, {ChangeEvent, useState} from "react";
import {SearchList} from "../searchList/SearchList";
import {FilmType} from "../../data/films";

type SearchPropsType = {
    films: FilmType[]
}

export const Search: React.FC<SearchPropsType> = ({films}: SearchPropsType) => {
    const [isSuggests, setIsSuggests] = useState(false)
    const [text, setText] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
        setIsSuggests(true)
        if (e.currentTarget.value === '') setIsSuggests(false)
    }
    const resetText = () => {
        setText('')
        setIsSuggests(false)
    }

    const topFiveFilms = films.filter((_, id) => id < 5)


    return (
        <s.Form>
            <s.Input placeholder = "Поиск" type = "text" value = {text} onChange = {onChangeHandler}
                     isSuggests = {isSuggests}/>
            {isSuggests && <s.Button type = {'reset'} onClick = {resetText}></s.Button>}
            {text && topFiveFilms && <SearchList films = {topFiveFilms}/>}
        </s.Form>
    )
}