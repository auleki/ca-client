import React from 'react'
import { useSelector } from 'react-redux'
import { SButton } from '../../styles/components.styled'
import { Link } from 'react-router-dom'
import { icons } from '../../utils/constants'

const CartLength = () => {
    const { items } = useSelector(state => state)

    return (
        <div className='items-length'>
            {items === 0 ? <p>Cart is empty</p> : <p>Items: {items}</p>}
            <Link to='/'>
                <SButton transparent>
                    <span className='icon'>{icons.back}</span>
                    <span className='text'>Back to shop</span>
                </SButton>
            </Link>
        </div>
    )
}

export default CartLength
