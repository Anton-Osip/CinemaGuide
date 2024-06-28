import {s} from "./Search_styles"
import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";
import {SearchList} from "../searchList/SearchList";

export type FilmType = {
    awardsSummary: string | null
    backdropUrl: string | null
    budget:string|null
    cast:string[]
    countriesOfOrigin: string[]
    director:string
    genres:string[]
    homepage:string
    id:number
    keywords:string[]
    language:string
    languages:string[]
    originalTitle:string
    plot:string
    posterUrl:string
    productionstring:string | null
    releaseDate:string
    releaseYear:number
    revenue:null
    runtime:number
    searchL:string
    status:string
    title:string
    tmdbRating:number
    trailerUrl:string
    trailerYouTubeId:string
}

export const Search: React.FC = () => {
    const [isSuggests, setIsSuggests] = useState(false)
    const [text, setText] = useState('')
    const [films, setFilms] = useState<FilmType[]>([])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)
    const resetText = () => {
        setText('')
    }

    const axiosRequest = () => {
        axios.get(`https://cinemaguide.skillbox.cc/movie?title=${text}`)
            .then((res: any) => {
                if (res.data.length > 4) {
                    const topFive:FilmType[] = res.data.filter((f: any, id: number) => id < 5)
                    console.log(topFive)
                    setFilms(topFive)

                } else {
                    setFilms(res.Data)
                }
            })
    }

    useEffect(() => {
        if (text !== '') {
            setIsSuggests(true)
            axiosRequest()
        } else {
            setIsSuggests(false)
        }

    }, [text])

    return (
        <s.Form>
            <s.Input placeholder = "Поиск" type = "text" value = {text} onChange = {onChangeHandler}
                     isSuggests = {isSuggests}/>
            {isSuggests && <s.Button type = {'reset'} onClick = {resetText}></s.Button>}
            {text && films && <SearchList films={films}/>}
        </s.Form>
    )
}