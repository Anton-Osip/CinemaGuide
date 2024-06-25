import styled from "styled-components";
import {font} from "../../styles/Common";
import search from '../../assets/image/searchIcon.svg'
const Form = styled.form`
    max-width: 496px;
    flex-grow: 1;
`

const Input = styled.input`
    outline: none;
    border: 0;
    border-radius: 8px;
    background: rgb(56, 58, 60);
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 16px center;
    padding: 16px 16px 16px 52px;
    width: 100%;
    ${font({Fmax: 18, Fmin: 18})}
`


export const s = {Form, Input}