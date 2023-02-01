function CardPelicula(props){
    return <div className="card mb-3">
        <img src={props.url} style={{height : "300px"}} alt="poster"/>
        <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in quae hic dolores amet ipsa vel officiis, nihil sint quasi iure labore. Nulla, laboriosam ut. Laudantium corporis aliquid consectetur aut.</p>
        </div>
    </div>
}

export default CardPelicula