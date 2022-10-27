import React from 'react'
import Header from '../layout/Header'
import MobileCartIcon from '../layout/MobileCartIcon'
import Subscribe from "../components/subscribe/Subscribe"
import Clothes from '../components/products/Clothes'
const Home = () => {
    return (
        <>
            <Header />
            <Clothes />
            <MobileCartIcon />
            <Subscribe />
        </>
    )
}

export default Home