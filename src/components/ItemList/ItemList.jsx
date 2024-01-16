import Item from "../Item/Item"

const ItemList = ({equipos}) => {
    return (
        <div>
            {
                equipos.map(item => <Item key={item.id} {...item}/>)
            }
        </div>
    )
}

export default ItemList