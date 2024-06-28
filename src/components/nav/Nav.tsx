import {s} from "./Nav_styles";
import {Search} from "../search/Search";

export const Nav: React.FC = () => {
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
            <Search/>
        </s.Nav>
    )
}

