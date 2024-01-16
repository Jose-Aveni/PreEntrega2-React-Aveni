import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, category, description, price, stock, img}) => {

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <section>
            <p>Precio: ${price}</p>
            <p>Categoria: {category}</p>
            <p>Descripción: {description}</p>
            </section>
            <ItemCount stock={stock} initial={1} onAdd={(count) => console.log('Número de unidades agregadas en un futuro al carrito: ', count)} />
        </div>
    )
}

export default ItemDetail