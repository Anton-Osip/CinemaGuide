import styled from "styled-components";
import {FlexWrapper} from "../../components/utils/FlexWrapper";

const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 24px;
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.5);

    & ${FlexWrapper} {
        gap: 20px;
    }
`


export const s = {Header}