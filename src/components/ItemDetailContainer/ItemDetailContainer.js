import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../AsyncMock';
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    useEffect (() => {
        getProductsById(4).then(response => {
            setProduct(response);
        })
    }, []);
    
    return (
        <div className='cardDetail'>
            <ItemDetail {...product}/>   
        </div>    
    )   
}

export default ItemDetailContainer;