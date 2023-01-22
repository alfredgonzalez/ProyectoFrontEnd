import React from "react";
import "./informacion.css"
import logo from '../img/logo.png'
import logoUbicacion from '../img/logoUbicacion.png'

const Informacion =  () =>{
    return(
        <div className="informacion">
            <h1 className="titulo">NUESTRA BODA</h1>
            <img className="logo" style={{width:"10%"}} src={logo} alt={'logo'}/>
            <div className="divTexto">
            <h2 className="texto" >
            Después de muchas aventuras compartidas, el
            24 de marzo de 2023 a las 18:30 hs en Janos San Miguel
            daremos el “sí quiero”.<br></br> 
            Continuaremos este emocionante viaje juntos
            y nos encantaría que nos acompañes a celebrar la fiesta de nuestra
            boda<br></br> llena de brindis, risas y bailes hasta el amanecer.</h2>
            boda<br></br> llena de brindis, risas y bailes hasta el amanecer.</h2>
            </div>
            <div className="comoLlegar">
            <img className="logoUbicacion" src={logoUbicacion}/>
            <h1 className="comoLlegarTitulo">COMO LLEGAR</h1>
            </div>
        </div>
    );
}

export default Informacion;