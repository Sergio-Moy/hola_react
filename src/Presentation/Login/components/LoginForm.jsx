import { useState } from "react"

function LoginForm(props){
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function(){
        props.onLoginOk(usuario, password)
    }

    return <form>
        <div>
            <label className="form-label">Usuario:</label>
            <input type="text" className="form-control"
            value={usuario}
            onChange={function(evt){
                setUsuario(evt.target.value)
            }}/>
        </div>
        <div>
            <label className="form-label">Password:</label>
            <input type="password" className="form-control"
            value={password}
            onChange={function(evt){
                setPassword(evt.target.value)
            }}/>
        </div>
        <button type="submit" className="btn btn-success mt-3" onClick={butOnClick}>Login</button>
    </form>
}

export default LoginForm