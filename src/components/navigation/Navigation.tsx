import {s} from "./Navigation_styles"
import {Search} from "../search/Search";
import {Icon} from "../icon/Icon";

type NavigationPropsType = {
    windowIsDesktop: boolean
}
export const Navigation: React.FC<NavigationPropsType> = ({windowIsDesktop}: NavigationPropsType) => {
    const DesktopNavigation: JSX.Element = <s.Nav>
        <s.List>
            <s.Item>
                <s.Link to = "/CinemaGuide/main">Главная</s.Link>
            </s.Item>
            <s.Item>
                <s.Link to = "/CinemaGuide/genres">Жанры</s.Link>
            </s.Item>
        </s.List>
        <Search windowIsDesktop = {windowIsDesktop}/>
    </s.Nav>

    const MobileNavigation: JSX.Element = <>
        <s.Link to = "/CinemaGuide/genres"><Icon idIcon = {'genresIcon'} width = "24" height = "24"
                                                 viewBox = "0 0 24 24" color = {'#fff'}/></s.Link>
        <Search windowIsDesktop = {windowIsDesktop}/>
    </>

    return (<>{windowIsDesktop ? DesktopNavigation : MobileNavigation}</>)
}