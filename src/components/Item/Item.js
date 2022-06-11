import { Link } from 'react-router-dom';
import './Item.css';




const Item = ({ id, name, price, img, desc, stock}) => {

    return (


        <div class="card" key={id}>
            <img src={img} class="card-img-top" alt={name} />
            <div class="card-body">
                <h1 class="card-title">{name}</h1>
                <p className='price'>${price}</p>
            </div>
            <Link to={`/detail/${id}`} className='verProducto'>VER PRODUCTO</Link>
        </div>

    )
}

export default Item;