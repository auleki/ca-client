import React, { useEffect } from 'react'
import {
    ShopCartContainer,
    CartItemStyle,
    // Button,
    RowLayout,
    // CardContainer
    CartContainer
} from '../styles/components.styled'
import CartItem from '../components/cart/CartItem'
import CheckoutSummary from '../components/cart/CheckoutSummary'
import { useSelector, useDispatch } from "react-redux";
import { updateItems, updatePrice } from "../features/cart/cartSlice";

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state)

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(cartItems)
    }, [])

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

    return (
        <CartContainer>
            <RowLayout>
                <ShopCartContainer>
                    <CartItemStyle>
                        {cartItems.map((item, i) => <CartItem key={i} product={item} />)}
                        {/* Checkout Summary Card */}
                        <CheckoutSummary />
                    </CartItemStyle>

                </ShopCartContainer>
            </RowLayout>
        </CartContainer>
    )
}
export default ShoppingCart