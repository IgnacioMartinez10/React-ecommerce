import CountItem from '../CountItem/CountItem';
import './Item.css';




const Item = ({ id, name, price, img, desc, stock }) => {

    return (


        <div class="card" key={id}>
            <img src={img} class="card-img-top" alt={name} />
            <div class="card-body">
                <h1 class="card-title">{name}</h1>
                <p>{price}</p>

            </div>
            <CountItem stock = {stock}/>
        </div>

    )
}

export default Item;