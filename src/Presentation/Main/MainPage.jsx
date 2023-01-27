import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ListaPeliculas from "./components/ListaPeliculas"

function MainPage(){
    const listaPeliculas = [
        {
            id : 1,
            nombre : "Avatar 2",
            url: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg"
        },
        {
            id : 2,
            nombre : "Morbius",
            url: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/morbius_onesheet_1400x2100_he.jpg?itok=-jQVkWIe"
        }
    ]

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(function(){
        if(location.state==null){
            navigate("/")
        }
    }, [])

    return location.state !== null?
    <ListaPeliculas peliculas = {ListaPeliculas}/>
    : <div></div> 

}

export default MainPage