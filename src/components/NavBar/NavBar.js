import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='contentButton'>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Nosotros</button>
            </div>
        <CartWidget/>
        </nav>
    )
}
export default NavBar