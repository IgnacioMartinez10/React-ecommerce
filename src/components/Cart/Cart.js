import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import './Cart.css';
import { Link } from "react-router-dom";



const Cart = () => {

    const { cart, removeItem, getTotal, getQuantity } = useContext(CartContext)

    if(getQuantity() === 0){
        return(
            <div className="cartEmpty">
                <span>¡OOPS! Todavía no agregaste productos a tu carrito! </span>

                <Link to='/' className="verProducto">VER PRODUCTOS</Link>
            </div>
        )
    }
 
    return(
        <div>
            <h1>Productos en su carrito</h1>
            <div>
                {cart.map(element => {
                    return(
                        <div key={element.id} className="cartContent">
                            <div>{element.name}</div>
                            <div>Precio:{element.price}</div>
                            <div>Cantidad:{element.quantity}</div>
                            <div>Subtotal: {element.price * element.quantity}</div>
                            <button className="removeItem" onClick={() => removeItem(element.id)}>Borrar producto</button>
                        </div>
                    )
                })}
            </div>
            <div className="total">Total: ${getTotal()}</div>
        </div>
    )
}

export default Cart;