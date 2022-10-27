import React from 'react'
import BottomRight from '../components/header/BottomRight'
import Main from '../components/header/Main'
import TopRight from '../components/header/TopRight'
import { HeaderStyle } from "../styles/components.styled"

const Header = () => {
    return (
        <HeaderStyle>
            <Main />
            <section className='header_side'>
                <TopRight />
                <BottomRight />
            </section>
        </HeaderStyle>
    )
}
export default Header
