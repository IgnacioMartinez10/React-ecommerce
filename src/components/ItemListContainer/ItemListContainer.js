
import './ItemListContainer.css';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { getProducts} from '../../AsyncMock'
import { getProductsByCategory } from '../../AsyncMock';
import { useParams } from 'react-router-dom';
import { ClipLoader  } from 'react-spinners';


const ItemListContainer = (props) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();
    
    useEffect(() => {

        setLoading(true)

        if(!categoryId) {
            getProducts().then(response => {
                setItem(response)
            }).catch(error => {
                alert('NO SE PUEDEN CARGAR LOS PRODUCTOS')
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setItem(response)
            }).catch(error => {
                alert('Error al cargar los productos')
            }).finally(() => {
                setLoading(false)
            })
        }
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