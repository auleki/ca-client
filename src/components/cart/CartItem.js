import React from 'react'
import { CartCard, FButton } from '../../styles/components.styled'
import { formatToComma } from '../../api/operationsAPI'
import { useDispatch } from 'react-redux'
import { HiTrash } from "react-icons/hi2"
import { adjustQty, removeFromCart } from '../../features/cart/cartSlice'

const CartItem = ({ product: { imageUrls, name, id, price, qty } }) => {
    // const [sQty, setSqty] = useState(qty)
    const dispatch = useDispatch()

    // Kill this till input can be regulated to remain a number
    // const qtyHandler = (e) => {
    //   const value = Number(e.target.value)
    //   setSqty(value)
    //   dispatch(updateQuantity({ value, name }))
    // }

    // const clothSizes = [
    //   {
    //     size: 'Large',
    //     sizeAbbreviation: 'L'
    //   },
    //   {
    //     size: 'Extra Large',
    //     sizeAbbreviation: 'XL'
    //   },
    //   {
    //     size: 'Extra Extra Large',
    //     sizeAbbreviation: 'XXL'
    //   },
    //   {
    //     size: 'Small',
    //     sizeAbbreviation: 'S'
    //   }
    // ]

    return (
        <CartCard key={id}>
            <div className='cart-image'>
                <img src={imageUrls[0]} alt={name} />
            </div>
            <div className='name'>
                <p>{name}</p>
                {/* <ul className='sizes-selected'>
          {clothSizes.map((size, i) => (
            <li className='size-selected' key={i}>
              {size.sizeAbbreviation}
            </li>
          ))}
        </ul> */}
            </div>
            <div className='card-info'>
                <p>₦ {formatToComma(price)}</p>
            </div>
            <div className='remove'>
                <FButton primary onClick={() => dispatch(removeFromCart(name))}>
                    <HiTrash />
                </FButton>
            </div>
            <div className='item-actions'>
                {/* <Button onClick={}> + </Button> */}
                <FButton
                    onClick={() => dispatch(adjustQty({ name, type: 'increase' }))}
                >
                    +
                </FButton>
                {/* <input
          type="number"
          value={qty}
          id="qty"
          placeholder="Quantity"
          onChange={null}
        /> */}
                <span className='qty'>{qty}</span>
                <FButton
                    onClick={() => dispatch(adjustQty({ name, type: 'decrease' }))}
                >
                    -
                </FButton>
            </div>
        </CartCard>
    )
}
export default CartItem
