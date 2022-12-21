import { Link } from "react-router-dom"

const Navbar =() => {

    return (
    <nav>
        <h1>Ecommerce</h1>
        <div>
            <Link to= '/'>Ver todo</Link>
            <Link to= '/category/tshirt'> Pizzas</Link>
            <Link to= '/category/Mujer'> especial</Link>
        </div>
    </nav>
    )
}

export default Navbar