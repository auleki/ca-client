import React from "react"
import { formatToComma } from "../../api/operationsAPI"
import { SButton } from "../../styles/components.styled"
import { icons } from "../../utils/constants"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { updateItems, updatePrice } from "../../features/cart/cartSlice"
import CartLength from "./CartLength"
import TotalView from "./TotalView"

const TotalItems = () => {
    // const cartItems = useSelector(state => state)
    const { cartItems, price } = useSelector(state => state)
    // let price = 0
    const dispatch = useDispatch()

    let totalPrice = 0
    let itemCount = 0

    useEffect(() => {
        // eslint-disable-next-line
        cartItems.map(item => {
            // eslint-disable-next-line
            itemCount += item.qty
            // eslint-disable-next-line
            totalPrice += item.price * item.qty
        })
        dispatch(updateItems(itemCount))
        dispatch(updatePrice(totalPrice))
    }, [cartItems, totalPrice, itemCount])

    return (
        <>
            <div className='total-items-mobile'>
                <Link to='/'>
                    <SButton transparent>
                        <span className='icon'>{icons.back}</span>
                    </SButton>
                </Link>
                <p>Total: ₦{formatToComma(price)}</p>
                <Link to='/confirm'>
                    <SButton transparent>
                        <span className='icon'>{icons.create}</span>
                    </SButton>
                </Link>
            </div>
            <CartLength />
            <TotalView price={price} />
            {/* <h2>Total Items</h2> */}
        </>
    )
}

export default TotalItems