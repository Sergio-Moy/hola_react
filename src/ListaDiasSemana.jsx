import { useState } from "react"

function ListaDias(props){
    if (props.modo === "tabla"){
        return <table className="table table-hover"><tbody>
        <tr><th>Dia</th></tr>
         {
         props.lista.map(function(dia){
             return <tr key={dia}><td>{dia}</td></tr>
         })}   
     </tbody></table>
    }
    else if (props.modo === "lista"){
        return <ul className="list-group">{
            props.lista.map(function(dia){
                return <li key={dia} className="list-group-item">{dia}</li>
            })}   
        </ul>
    }
    else{
        return <div>Modo incorrecto</div>
    }
}

function ListaDiasSemana(props){
    const [modoVisualizacion, setModoVisualizacion] = useState(props.modo)

    const butOnClick = function(){
        if(modoVisualizacion === "tabla"){
            setModoVisualizacion("lista")
        }
        else{
            setModoVisualizacion("tabla")
        }
    }

        return <div className="card"><div className="card-body">
            <h3>Dias Semana <button type="button" className="btn btn-primary" onClick={butOnClick}>Cambiar</button></h3>
            <ListaDias modo={modoVisualizacion} lista={props.lista} />
           </div></div>
}

export default ListaDiasSemana