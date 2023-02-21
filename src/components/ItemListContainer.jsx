import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx"
import arrayProductos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
   
    /* BUSQUEDAS POR CATEGORIA */
    const {id} = useParams();


        /* PROMISES*/
    useEffect (()  => {
        const promesa = new Promise ((resolve)=>{
            setTimeout (() => {
                resolve (id ? arrayProductos.filter(item => item.categoria === id ) : arrayProductos);
            }, 2000)
        });
        promesa.then ((respuesta) =>{
            setItems (respuesta);
        })
    }, [id]);


    return ( 
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}
    
export default ItemListContainer;


