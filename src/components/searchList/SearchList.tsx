import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FilmType} from "../search/Search";

type SearchListType = {
    films: FilmType[]
}

export const SearchList: React.FC<SearchListType> = ({films}: SearchListType) => {

    return <List>
        {films.map(f => (
            <Item key = {f.id}>
                <Image src = {f.posterUrl} alt = {f.title}/>
            </Item>)
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
const Item = styled.li`
    max-height: 92px;
`

const Image = styled.img`
    max-height: 52px;
`
