import './Item.css';
import CountItem from '../CountItem/CountItem.js'


const Item = ({id, name, price, img, desc, stock}) =>{
    
    return (
         <div className='cardContainer' key={id}>
            <img className='cardImg' variant="top" src={img} alt={name} />
            <div>
                <h1>{name}</h1>
                <p>{desc}</p>
                <p>{price}</p>
            </div>
            <div>
                <CountItem stock ={stock}/>
            </div>
        </div>
        
    )   
}

export default Item;