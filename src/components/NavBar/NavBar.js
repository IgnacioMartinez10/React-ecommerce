import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='contentButton'>
                <button className='button'>Inicio</button>
                <button className='button'>Productos</button>
                <button className='button'>Nosotros</button>
            </div>
        <CartWidget/>
        </nav>
    )
}
export default NavBar