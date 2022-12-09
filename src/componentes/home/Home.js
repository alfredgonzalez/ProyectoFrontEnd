import React from "react";
import imagen from '../img/fondo.jpg';
import presentacion from '../img/presentacion.jpg'
import './home.css';

const Home = () =>{
    return(
        <div>
            <div className="fondo" style={{ backgroundImage: `url(${imagen})`, width: "80%", height:"800px", backgroundSize:"cover" }} >
                
            </div>
            <div>
            <img className="presentacion"  src={presentacion} alt="presentacion"/>
            </div>
        </div>
    );
}
export default Home;