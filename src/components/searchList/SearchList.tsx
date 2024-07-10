import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FilmType} from "../../data/films";
import {SearchItem} from "../searchItem/SearchItem";

type SearchListType = {
    films: FilmType[]
}

export const SearchList: React.FC<SearchListType> = ({films}: SearchListType) => {

    return <List>
        {films.map(film => (<SearchItem key={film.id} film={film} />)
        )}
    </List>
}

const List = styled.ul`
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.secondaryBg};
`

