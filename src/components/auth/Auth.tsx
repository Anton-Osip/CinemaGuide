import {s} from "./Auth_styles";
import {Icon} from "../icon/Icon";
import React from "react";

type AuthPropsType = {
    windowIsDesktop: boolean
}

export const Auth: React.FC<AuthPropsType> = ({windowIsDesktop}: AuthPropsType) => {
    return (

        <s.Auth>
            {windowIsDesktop ? 'Войти' :
                <Icon idIcon = {'authIcon'} width = "24" height = "24"
                      viewBox = "0 0 24 24" color = "#fff"/>}
        </s.Auth>
    )
}

