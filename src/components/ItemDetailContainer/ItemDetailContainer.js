import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../../AsyncMock';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ClipLoader  } from 'react-spinners';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()


    useEffect (() => {
        setLoading(true)

        getProductsById(productId).then(response => {
            setProduct(response);
        }).finally(() => {
            setLoading(false)
        })
    }, [productId]);

    if(loading){
        return(
            <ClipLoader  color='pink' size={150}></ClipLoader >
        )
    }
    
    return (
        <div className='cardDetail'>
            <ItemDetail {...product}/>   
        </div>    
    )   
}

export default ItemDetailContainer;