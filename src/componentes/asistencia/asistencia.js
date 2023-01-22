import React from "react";
import logo from "../img/logo.png"
import "./asistencia.css"
import Button from "react-bootstrap/esm/Button";


const Asistencia = () =>{
    return(
        <div className="divTextoAsistencia"> 
            <h1 className="asistenciaTitulo">L & E</h1>
            <img className="logoAsistencia" style={{width:"10%"}} src={logo} alt={'logo'}/>
            <div >
            <h2 className="textoAsistencia" >
            Estaremos felices de compartir con vos este día.
            <br></br>
            Por favor confirmar asistencia.
            <br></br>
            ¡Te esperamos!</h2>
            </div>
            <div className="botones">
            <Button className="botonAsistencia" variant="outline-secondary" size="lg" href="https://forms.gle/J6z7MMLM9nEAoq5Q6">Asistencia</Button>{''}
            <Button className="botonGuardarFecha" variant="outline-secondary" size="lg" href="https://calendar.google.com/calendar/u/0/r/day/2023/3/24?sf=true">Guarda la fecha!</Button>{''}
            </div>
            <div className="nosotros">
                <h3 className="nosotrosTitulo">
                    NOSOTROS
                </h3>
                <img className="logoAsistencia" style={{width:"10%"}} src={logo} alt={'logo'}/>
            </div>
        </div>
    );
}
export default Asistencia;
