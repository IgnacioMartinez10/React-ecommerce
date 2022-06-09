import { useContext } from "react";
import CartContext from "../../Context/CartContext";


const Cart = () => {

    const { cart } = useContext(CartContext)
    
    return(
        <div>
            <h1>Productos en su carrito</h1>
            <div>
                {cart.map(element => {
                    return(
                        <div>
                            <div>{element.name}</div>
                            <div>{element.price}</div>
                            <div>{element.img}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;