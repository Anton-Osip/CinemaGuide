import {s} from "./Nav_styles";
import {Search} from "../search/Search";
import {FilmType} from "../../data/films";

type NavPropsType = {
    films:FilmType[]
}

export const Nav: React.FC<NavPropsType> = ({films}:NavPropsType) => {
    return (
        <s.Nav>
            <s.NavList>
                <li>
                    <s.Link to = "/CinemaGuide/main">Главная</s.Link>
                </li>
                <li>
                    <s.Link to = "/CinemaGuide/genres">Жанры</s.Link>
                </li>
            </s.NavList>
            <Search films={films}/>
        </s.Nav>
    )
}

