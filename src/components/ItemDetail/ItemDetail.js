import CountItem from "../CountItem/CountItem";
import './ItemDetail.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";

const ItemDetail = ({ id, name, price, img, desc, stock }) => {
const [quantity, setQuantity] = useState(0);
const {addItem} = useContext (CartContext)

const handleOnAdd = (quantity) => {
    console.log ('Agregar al carrito')
    setQuantity(quantity)
    addItem({id, name, price, quantity})
}

    return (
        <div className='card' key={id}>
            <img src={img} class="card-img-top"  alt={name} />
            <div class="card-body">
                <h1 class="card-title">{name}</h1>
                <p className="desc">{desc}</p>
                <p className="price">${price}</p>
            </div>
            <div>
                {quantity > 0 ? <Link to='/cart' className="verProducto">Finalizar compra</Link> : <CountItem stock={stock} onAdd={handleOnAdd} />}
                
            </div>
        </div>

    )
}

export default ItemDetail;