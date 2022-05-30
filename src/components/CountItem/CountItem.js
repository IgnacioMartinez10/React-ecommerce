import './CountItem.css';
import {useState} from 'react';

const CountItem = ({stock}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 0 && stock > count) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='card'>
            <div className='containerButton'>
                <button onClick={decrement}>-</button>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
            </div>
            <button className='comprar'>Comprar</button>
        </div>        
    )   
}


export default CountItem;