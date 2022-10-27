import React from "react";
import { EmptyCartStyle, FButton, Paragraph } from "../../styles/components.styled";
import { HiArrowLeft } from "react-icons/hi2";
import Box from './../../assets/images/box.png'
import { Link } from "react-router-dom";

const EmptyCart = () => (
    <EmptyCartStyle>
        <div className='imageBox'>
            <img
                src="https://res.cloudinary.com/dyj6pqx6d/image/upload/v1666798781/checkadigs/box_abrxur.png" alt='empty cart' />
        </div>
        <Paragraph>Cart is empty!</Paragraph>
        <Link to='/'>
            <FButton primary>
                <HiArrowLeft /> <span>Go Shopping</span>
            </FButton>
        </Link>
    </EmptyCartStyle>
)

export default EmptyCart