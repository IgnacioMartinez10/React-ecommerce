import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
// import { getProductsById } from '../../AsyncMock';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ClipLoader  } from 'react-spinners';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()


    useEffect (() => {
        setLoading(true)

        getDoc(doc(db, 'products', productId)).then(response => {
          const product = {id: response.id, ...response.data()}
          setProduct(product)
        }).catch(error => {
            console.log(error)
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