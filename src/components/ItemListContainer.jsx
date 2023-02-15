import ItemList from "./Item.jsx";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import arrayProductos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
        /* PROMISES*/
    useEffect (()  => {
        const promesa = new Promise ((resolve)=>{
            setTimeout (() => {
                resolve (arrayProductos);
            }, 2000)
        });
        promesa.then ((respuesta) =>{
            setItems (respuesta);
        })
    }, []);


    return ( 
    <div className="container my-5">
            <ItemList items={items}/>
            <ItemCount stock={10} />
    </div>
    )
}
    
export default ItemListContainer;


