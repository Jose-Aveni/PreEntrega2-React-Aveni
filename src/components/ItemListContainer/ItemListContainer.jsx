import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getEquipos, getEquiposByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
  const [equipos, setEquipos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = categoryId ? await getEquiposByCategory(categoryId) : await getEquipos();
        setEquipos(response);
      } catch (error) {
        console.error(error);
      } finally {
        console.log('Promise terminada');
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div className='divlist'>
      <h1>{greeting}</h1>
      <ItemList equipos={equipos} />
    </div>
  );
};

export default ItemListContainer