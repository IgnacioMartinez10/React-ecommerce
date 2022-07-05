
import './ItemListContainer.css';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { ClipLoader  } from 'react-spinners';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase';

const ItemListContainer = (props) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();
    
    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')


        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setItem(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // // if(!categoryId) {
        // //     getProducts().then(response => {
        // //         setItem(response)
        // //     }).catch(error => {
        // //         alert('NO SE PUEDEN CARGAR LOS PRODUCTOS')
        // //     }).finally(() => {
        // //         setLoading(false)
        // //     })
        // // } else {
        // //     getProductsByCategory(categoryId).then(response => {
        // //         setItem(response)
        // //     }).catch(error => {
        // //         alert('Error al cargar los productos')
        // //     }).finally(() => {
        // //         setLoading(false)
        // //     })
        // // }
    }, [categoryId]);

    if(loading){
        return(
            <ClipLoader  color='pink' size={150}></ClipLoader >
        )
    }
    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className='contenedorCards'>
                <ItemList products = {item}/>
            </div>
        </div>    
    )
}

export default ItemListContainer;