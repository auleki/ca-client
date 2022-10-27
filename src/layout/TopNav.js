import React, { useState } from 'react'
import { FButton } from '../styles/components.styled'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiShoppingCart, HiBars3 } from 'react-icons/hi2'

const TopNav = () => {
    const items = useSelector(state => state.items)
    const [openNav, setOpenNav] = useState(false)
    const handleClick = () => setOpenNav(!openNav)
    const closeMenu = () => setOpenNav(false)

    return (
        <>
            <nav className={`wow fadeInDown`}>
                <div className='logo' onClick={closeMenu}>
                    <Link to='/'>
                        <h1 className='text'>CHECKADIGS</h1>
                    </Link>
                </div>
                <div className={`nav-links ${openNav ? 'active' : ''}`}>
                    <Link to='/quiz' className='nav-link' onClick={closeMenu}>
                        QUIZ
                    </Link>
                    <Link to='/about' className='nav-link' onClick={closeMenu}>
                        ABOUT US
                    </Link>
                    <div className='cart-icon'>
                        <Link className='link-button' to='/cart'>
                            <HiShoppingCart aria-hidden={false} />
                            <span className='badge'>{items}</span>
                        </Link>
                    </div>
                </div>
                <div className='mobile-menu'>
                    <FButton onClick={handleClick}>
                        <HiBars3 />
                    </FButton>
                </div>
            </nav>
        </>
    )
}

export default TopNav