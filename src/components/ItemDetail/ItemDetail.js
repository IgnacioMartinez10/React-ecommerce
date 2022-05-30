import CountItem from "../CountItem/CountItem";
import './ItemDetail.css';

const ItemDetail = ({ id, name, price, img, desc, stock }) => {
    
    

    return (


        <div className='card' key={id}>
            <img src={img} class="card-img-top" alt={name} />
        <div class="card-body">
            <h1 class="card-title">{name}</h1>
            <p className="desc">{desc}</p>
            <p className="price">{price}</p>
         </div>
            <div>
                <CountItem stock ={stock}/>
            </div>
        </div>

    )
}

export default ItemDetail;