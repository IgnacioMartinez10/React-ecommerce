import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import './Cart.css';
import { Link } from "react-router-dom";



const Cart = () => {

    const { cart, removeItem, getTotal, getQuantity, cleanCart } = useContext(CartContext)


    if(getQuantity() === 0){
        return(
            <div className="cartEmpty">
                <span>¡OOPS! Todavía no agregaste productos a tu carrito! </span>

                <Link to='/' className="verProducto">VER PRODUCTOS</Link>
            </div>
        )
    }
 
    return(
        <div className="cart">
            <h1 className="detailTitle">Detalle de compra </h1>
            <div>
                {cart.map(element => {
                    return(
                        <div key={element.id} className="cartContent">
                            
                            <div>{element.name}</div>
                            <div>Precio: {element.price}</div>
                            <div>Cantidad: {element.quantity}</div>
                            <div>Subtotal: {element.price * element.quantity}</div>
                            <button className="removeItem" onClick={() => removeItem(element.id)}>Borrar producto</button>
                        </div>
                    )
                })}
            </div>
            <div className="buttonsCart">
            <button className="removeItem" onClick={() => cleanCart()}>Vaciar Carrito</button>
            <Link to="/form" className="removeItem"style={{textDecoration: "none", margin: "5px"}}>Checkout</Link>
            <div className="total">Total: ${getTotal()}</div>   
            </div>
            
        </div>
    )
}

export default Cart;