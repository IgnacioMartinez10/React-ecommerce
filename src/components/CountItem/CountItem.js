import './CountItem.css';
import {useState} from 'react';

const CountItem = ({stock, onAdd}) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count >= 1 && stock > count) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregarAlCarrito = () =>{
        onAdd(count);
    }

    return (
        <div className=''>
            <div className='containerButton'>
                <button onClick={decrement}>-</button>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={agregarAlCarrito} className='addToCart'>Agregar al carrito</button>
        </div>        
    )   
}


export default CountItem;