import { useState, createContext} from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

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

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !==id)
        setCart(newCart)
    }

    const cleanCart = () => {
        setCart ([])

    }

    const getTotal = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity * item.price
        })
        return total
    }
   
    return(
        <CartContext.Provider value={{cart, getQuantity, addItem, removeItem, getTotal, cleanCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;