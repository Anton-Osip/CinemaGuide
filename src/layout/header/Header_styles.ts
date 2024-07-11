import styled from "styled-components";
import {FlexWrapper} from "../../components/utils/FlexWrapper";
import {Container} from "../../components/utils/Container";
import {theme} from "../../styles/Theme";

const Header = styled.header`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    padding: 24px 0;
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.5);
    @media ${theme.media.tablet} {
        padding: 19px 0;
        & > ${Container} > ${FlexWrapper} {
            gap: 20px;
        }
    }
`

export const s = {Header}