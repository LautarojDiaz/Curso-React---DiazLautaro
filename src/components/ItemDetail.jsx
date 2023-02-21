import ItemCount from "./ItemCount";

const ItemDetail =  ({item}) => {
    return (
        <div className="container" style={{backgroundColor:'white'}}>
            <div className="row">
                <div className="col">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    ) 
}

export default ItemDetail;