import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const MobileCartIcon = () => {
    const items = useSelector(state => state.items)
    return (
        <>
            <Link to='/cart'>
                <div className='mobile-cart-icon'>
                    <h2>{items}</h2>
                </div>
            </Link>
        </>
    )
}

export default MobileCartIcon