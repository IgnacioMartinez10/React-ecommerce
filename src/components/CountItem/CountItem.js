import './CountItem.css';
import {useState} from 'react';

const CountItem = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count >= 0) {
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
            <img className='vasoCoffee' src='../images/VasoCoffe.jpg' alt='VasoCoffee'></img>
            <h2>Vaso Coffee ST Negro</h2>
            <p>$800</p>
            <div className='containerButton'>
                <button onClick={decrement}>-</button>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
            </div>
            <button>Comprar</button>
        </div>
    )   
}


export default CountItem;