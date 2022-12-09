import React from "react";
import "./footer.css";
import logo from "../img/logo.png"
import Button from "react-bootstrap/esm/Button";
import Contacto from "../contacto/Contacto.js";

const Footer = () =>{
    return(
        <footer>
            <div className="regalos">
                <h1 className="gift">GIFT</h1>
                <img className="logoGift" style={{width:"10%"}} src={logo} alt={'logo'}/>
                
                <h2 className="giftTexto">La vida está llena de sueños
                <br></br>
                    gracias por ayudarnos a conseguir los nuestros.</h2>
                <div className="divContacto">
                <Button className="botonWhislist" variant="light" href="https://www.amazon.com/hz/wishlist/ls/1OYUM0XXUJRK6?ref_=wl_share">Whishlist</Button>{''}
                <Button className="botonAboutUs" variant="light" href="https://www.instagram.com/">Seguinos!</Button>{''}        
                </div>
                <div className="divForm">
                <h2 className="formTexto">Dejanos tu mensaje! Y con gusto responderemos</h2>
                </div>
                <Contacto/>
                <div className="divInfo">
                    <h3 className="info">
                        AGONZALEZ . 2022 . Todos los derechos reservados
                    </h3>
                </div>
            </div>
        </footer>
    );
}
export default Footer;