import {s} from "./Logo_styles"
import logo from '../../assets/image/logo.svg'

export const Logo: React.FC<{}> = () => {
    return (
        <s.Link to = {'cinemaGuide/home'}>
            <s.Image src = {logo} alt = "CinemaGuide"/>
        </s.Link>
    )
}