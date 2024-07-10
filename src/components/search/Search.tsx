import {s} from "./Search_styles"
import React, {ChangeEvent, useState} from "react";
import {Icon} from "../icon/Icon";

type SearchPropsType = {
    windowIsDesktop?: boolean
}

export const Search: React.FC<SearchPropsType> = ({windowIsDesktop}: SearchPropsType) => {
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


    return (
        <>
            {
                windowIsDesktop ?
                    <s.Form>
                        <s.Input placeholder = "Поиск" type = "text" value = {text} onChange = {onChangeHandler}
                                 isSuggests = {isSuggests}/>
                        {isSuggests && <s.Button type = {'reset'} onClick = {resetText}></s.Button>}
                    </s.Form>
                    :
                    <Icon idIcon = "searchIcon" width = "24" height = "24" viewBox = "0 0 24 24" color = {'#fff'}/>
            }
        </>


    )
}