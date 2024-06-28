import logo from '../../assets/image/logo.svg'
import {NavLink} from "react-router-dom";

export const Logo: React.FC = () => {
    return (
        <NavLink to = "/CinemaGuide/main">
            <img src = {logo} alt = "Cinema guide logo"/>
        </NavLink>
    )
}