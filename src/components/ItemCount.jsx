
    /* SUMAR - RESTAR - CARRO */

import { useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] = useState(1)
    const [itemStock , setItemStock ] = useState(stock);

    const incrementarStock = () =>{
        if  (items < itemStock) {
            setItems (items () - 1);
        } 
    }
    const decrementarStock = () =>{
        if (items > 1) { 
            setItems (items - 1);
        }
    
    }

    const onAdd = () => {
        if (itemStock >= items){
            setItemStock (itemStock - items);
            setItems(itemStock);
            console.log ("Agregaste: "+ items + "productos al carrito")
  
        }
       }
    
    
    return ( 
    <div className="container">
        <div className="row my-1">
            <div className="col">
                <div class="btn-group">
                    <button className="btn btn-warning" onClick={decrementarStock}>−</button>
                    <button className="btn btn-warning">{items}</button>
                    <button className="btn btn-warning" onClick={incrementarStock}>+</button>
                </div>
            </div> 
        </div>
        <div className="row my-1">
            <div className="col">
             <button className="btn btn-warning" onClick={onAdd}>Agregar al carro</button>
            </div>
        </div>
    </div>
    )
}
    
export default ItemCount;


