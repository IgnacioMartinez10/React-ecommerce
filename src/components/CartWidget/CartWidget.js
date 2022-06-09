import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()


    return (
        <div className='cartWidget'>
        <Link to={'/cart'} className="imgCarrito">
            <img className='cartImg' src='../images/cart.svg' alt='imgCarrito' />
            {quantity}
        </Link>
        </div>

    )
}

export default CartWidget