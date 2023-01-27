function AboutPage(){
    const dataUsuario = JSON.parse(sessionStorage.getItem("DATA_USUARIO"))
    return <div>About Page: {dataUsuario.username}</div>
}

export default AboutPage