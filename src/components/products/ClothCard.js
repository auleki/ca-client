import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { formatToComma } from "../../api/operationsAPI"
import { addToCart } from "../../features/cart/cartSlice"
import { SButton, StyleClothCard } from "../../styles/components.styled"
import { icons } from "../../utils/constants"
import SelectSize from "./SelectSize"


const ClothCard = ({ cloth }) => {
    // const [pickedSizes, setPickedSizes] = useState(
    //   new Array(cloth.sizes.length).fill({ ...cloth.sizes, selected: false })
    // )
    const [check, setCheck] = useState(cloth.sizes.map(_ => false))
    // console.log('TESTING SIZE', cloth)
    const dispatch = useDispatch()
    const isDisabled = cloth.inStock ? false : true

    // console.log(check)

    // const cartContent = {
    //   ...cloth,
    //   price: cloth.price * pickedSizes.length
    // }

    // function onSizeSelect (e) {
    //   console.log('RADIO SELECTION', e.target.value)
    //   setPickedSizes(e.target.value)
    // }

    return (
        <StyleClothCard inStock={cloth.inStock}>
            {!cloth.inStock ?
                <img
                    src={"https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666802931/checkadigs/outofstock_lgyan7.png"}
                    alt='out of stock'
                    className='outOfStock out_of_stock_img'
                />
                : null}
            {/* <ImageSlider imageUrls={cloth.imageUrls} /> */}
            <img className="product_img" src={cloth.imageUrls[0]} />
            <div className='info_one'>
                <p className='cloth_name'>{cloth.name}</p>
                <p className='price'>₦{formatToComma(cloth.price)}</p>
            </div>
            {/* TRYING OUT SELECT BOX  */}
            <div className='select_size'>
                <h4>Select your size</h4>
                <div className='checkbox_container'>
                    {cloth.sizes.map((size, i) => (
                        <SelectSize key={i} size={size} cloth={cloth} />
                    ))}
                </div>
            </div>
            <div className='info_two'>
                <p className='category'>{cloth.category}</p>
                <SButton
                    disabled={isDisabled}
                    onClick={() => dispatch(addToCart(cloth))}
                // onClick={() => dispatch(addToCart(cartContent))}
                >
                    <span className='text'>
                        {isDisabled ? 'Out of stock' : 'Add to cart'}
                    </span>
                    <span className='icon'>{icons.plus}</span>
                </SButton>
            </div>
        </StyleClothCard>
    )
}

export default ClothCard