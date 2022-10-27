import React from "react";
import { formatToComma } from "../../api/operationsAPI";
import { Link } from "react-router-dom";
import { icons } from "../../utils/constants";
import { SButton } from "../../styles/components.styled";

const TotalView = ({ price }) => (
    <div className='total-price'>
        <p>Total: ₦ {formatToComma(price)}</p>
        <Link to='/confirm'>
            <SButton transparent>
                <span className='text'>Create Order</span>
                <span className='icon'>{icons.create}</span>
            </SButton>
            {/* <FButton>Create Order</FButton> */}
        </Link>
    </div>
)

export default TotalView