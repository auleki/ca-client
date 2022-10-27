import React, { useEffect } from 'react'
import { HiArrowLeft } from 'react-icons/hi2'
import {
    // Button,
    CheckoutCard,
    ActionRow,
    EmptyCartStyle,
    FButton,
    Paragraph,
    SButton
} from '../../styles/components.styled'
// import Box from '../../assets/box.png'
import { icons } from '../../utils/constants'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartLength from './CartLength'
import { formatToComma } from '../../api/operationsAPI'
import { updateItems, updatePrice } from '../../features/cart/cartSlice'
import EmptyCart from './EmptyCart'
import TotalItems from './TotalItems'

const CheckoutSummary = () => {
    const { cartItems } = useSelector(state => state)

    return (
        <CheckoutCard>
            <ActionRow>
                {cartItems.length !== 0 ? <TotalItems /> : <EmptyCart />}
                {/* <h3>Summary</h3> */}
            </ActionRow>
        </CheckoutCard>
    )
}

export default CheckoutSummary
