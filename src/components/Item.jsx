const Item = ({Item}) => (
    <div className="card border-0">
        <img src={Item.imagen} class="card-img-top" alt={Item.nombre}>
        </img>
        <div className="card-body text-center">
            <h5 className="card-title">{Item.nombre}</h5>
        </div>
    </div>
)

export default Item;