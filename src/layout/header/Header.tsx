import {Logo} from "../../components/logo/Logo";
import {s} from "./Header_styles";
import {FlexWrapper} from "../../components/utils/FlexWrapper";
import {Nav} from "../../components/nav/Nav";
import {Auth} from "../../components/auth/Auth";
import {Container} from "../../components/utils/Container";
import {FilmType} from "../../data/films";

type HeaderPropsType = {
    films:FilmType[]
}

export const Header: React.FC<HeaderPropsType> = ({films}:HeaderPropsType) => {
    return (
        <s.Header>
            <Container>
                <FlexWrapper justify = "space-between" align = "center">
                    <Logo/>
                    <Nav films={films}/>
                    <Auth/>
                </FlexWrapper>
            </Container>
        </s.Header>
    )
}