import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/'><h1>Ecommerce</h1></Link>
            <div>
                <NavLink to={'/category/iPhone'}>iPhone</NavLink>
                <NavLink to={'/category/MacBook'}>MacBook</NavLink>
                <NavLink to={'/category/iPad'}>iPad</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar