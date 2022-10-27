import React, { useEffect, useState } from 'react'
import { formatToComma } from '../../api/operationsAPI'
import {
    CardContainer,
    StyleClothCard,
    SButton,
    ImageSliderContainer,
    StyleClothSection
} from '../../styles/components.styled'
import { icons } from '../../utils/constants'
import PuffLoader from 'react-spinners/PuffLoader'
import { useSelector, useDispatch } from 'react-redux'
import {
    fetchRecipes,
    addToCart,
    updateItems,
    updatePrice
} from '../../features/cart/cartSlice'
import OutOfStock from '../../assets/images/outofstock.png'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore, { Navigation, Pagination } from 'swiper'
// import 'swiper/swiper.scss'
// import 'swiper/components/pagination/pagination.min.css'
import testResponse from '../../utils/data.json'
import ClothCard from './ClothCard'

const Clothes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { cartItems, products, hasErrors, loading } = useSelector(
        state => state
    )
    const override = {
        width: "100%",
        margin: "0 auto"
    }

    let totalPrice = 0
    let items = 0

    useEffect(() => {
        // eslint-disable-next-line
        cartItems.map(item => {
            // eslint-disable-next-line
            items += item.qty
            // eslint-disable-next-line
            totalPrice += item.price * item.qty
        })
        dispatch(updateItems(items))
        dispatch(updatePrice(totalPrice))
    }, [cartItems, totalPrice])

    useEffect(() => {
        // if (products.length === 0) {
        // }
        dispatch(fetchRecipes())
        console.log('fetching clothes')
    }, [])

    return (
        <CardContainer>
            {loading ? (
                <PuffLoader
                    loading={loading}
                    cssOverride={override}
                    size={200}
                    color={'#ffffff'}
                />
            ) : hasErrors ? (
                "Can't load clothes, refresh your browser"
            ) : (
                // using test response data instead or {PRODUCTS}
                <StyleClothSection>
                    {products.map((cloth, i) => <ClothCard key={i} cloth={cloth} />)}
                    {/* {testResponse.map((cloth, i) => <ClothCard key={i} cloth={cloth} />)} */}
                </StyleClothSection>
            )}
        </CardContainer>
    )
}

export default Clothes