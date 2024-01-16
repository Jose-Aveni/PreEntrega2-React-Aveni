import { Link } from "react-router-dom"

const Item = ({id, name, price, stock, img}) => {
 
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <section>
            <p>Precio: ${price}</p>
            <p>Stock: {stock}</p>
            </section>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>

    )
}

export default Item