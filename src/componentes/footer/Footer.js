import React from "react";
import "./footer.css";
import logo from "../img/logo.png"
import Button from "react-bootstrap/esm/Button";
import Contacto from "../form/Contacto.js";
import Alert from '../sweetAlert/SweetAlert.js';
import Video from '../Video/video.js';
import logoRegalo from '../img/regalo.png'


const Footer = () =>{
    return(
        <footer>
            <div className="regalos">
                <h1 className="gift">GIFT</h1>
                <img className="logoGift" src={logoRegalo} alt={'logo'}/>
                
                <h2 className="giftTexto">Lo más importante es tu presencia. <br></br>Pero si deseas hacernos un regalo...</h2>
                <div className="divContacto">
                 <Alert></Alert>
                </div>               
                <Video></Video>
                <div className="divForm">
                <h2 className="formTexto">⇺Gracias por formar parte de nuestro camino ⇻</h2>
                </div>
                <div className="divInfo">
                    <h3 className="info">
                        AGONZALEZ . 2023 . Todos los derechos reservados
                    </h3>
                </div>
            </div>
        </footer>
    );
}
export default Footer;