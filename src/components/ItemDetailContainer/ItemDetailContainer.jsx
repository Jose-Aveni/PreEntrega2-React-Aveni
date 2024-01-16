import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import {getEquiposById} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [equipos, setEquipos] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        getEquiposById(itemId)
        .then(response => {setEquipos(response)})
        .catch(error => console.error(error))
    }, [itemId])

    return (
        <div className="divdetail">
            <ItemDetail {...equipos}/>
        </div>
    )
}

export default ItemDetailContainer