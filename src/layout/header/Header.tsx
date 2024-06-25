import {Logo} from "../../components/logo/Logo";
import {s} from "./Header_styles";
import {FlexWrapper} from "../../components/utils/FlexWrapper";
import {Nav} from "../../components/nav/Nav";
import {Auth} from "../../components/auth/Auth";
import {Container} from "../../components/utils/Container";


export const Header: React.FC = () => {
    return (
        <s.Header>
            <Container>
                <FlexWrapper justify = "space-between" align = "center">
                    <Logo/>
                    <Nav/>
                    <Auth/>
                </FlexWrapper>
            </Container>
        </s.Header>
    )
}