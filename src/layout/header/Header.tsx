import React, {useEffect, useState} from "react";
import {s} from "./Header_styles";
import {Container} from "../../components/utils/Container";
import {FlexWrapper} from "../../components/utils/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Navigation} from "../../components/navigation/Navigation";
import {Auth} from "../../components/auth/Auth";

export const Header: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const breakpoint:number = 964
    let windowIsDesktop: boolean = breakpoint<width
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <s.Header>
            <Container>
                <FlexWrapper align = {'center'} gap = {'40px'}>
                    <Logo/>
                    <Navigation windowIsDesktop={windowIsDesktop}/>
                    <Auth windowIsDesktop={windowIsDesktop}/>
                </FlexWrapper>
            </Container>
        </s.Header>)
}