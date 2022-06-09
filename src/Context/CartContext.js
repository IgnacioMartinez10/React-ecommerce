import { useState, createContext} from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productAdd) => {
        if (cart.find((item) => item.id === productAdd.id)) {
            const newCart = cart.map((item) => {
                if(item.id === productAdd.id) {
                    return {...item, quantity: productAdd.quantity + item.quantity}
                }
                return item
            })
            setCart(newCart)
        } else {
            setCart((newProduct) => {
                return [...newProduct, productAdd]
            })
        }  
    }

    const getQuantity = () => {
        let accu = 0;
        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu;
    }

    return(
        <CartContext.Provider value={{cart, getQuantity, addItem}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;