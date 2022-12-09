import React from "react";
import logo from "../img/logo.png"
import "./asistencia.css"
import Button from "react-bootstrap/esm/Button";


const Asistencia = () =>{
    return(
        <div className="divTextoAsistencia"> 
            <h1 className="asistenciaTitulo">A . G . W . P</h1>
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
            <Button className="botonAsistencia" variant="light" href="https://forms.gle/Cu6nbCMyxNWK6Aw29">Asistencia</Button>{''}
            <Button className="botonGuardarFecha" variant="light" href="https://calendar.google.com/calendar/u/0/r/week/2023/3/23?sf=true">Guarda la fecha!</Button>{''}
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
