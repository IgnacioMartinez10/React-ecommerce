import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='contentButton'>
            <NavLink to='/'>
                <h3 className='button'>Rincon De Magia</h3>
            </NavLink>
            <NavLink to='/category/Coffee' className='button'>Coffee</NavLink>
            <NavLink to='/category/Mate' className='button'>Mate</NavLink>
            <NavLink to='/category/Botellas' className='button'>Botellas</NavLink>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar