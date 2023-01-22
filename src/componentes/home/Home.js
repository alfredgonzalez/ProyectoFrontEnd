import React from "react";
import imagen from '../img/fondo.jpg';
import presentacion from '../img/presentacion.png'
import './home.css';

const Home = () =>{
    return(
           <div className="fondo" style={{ backgroundImage: `url(${imagen})`,backgroundSize:"cover" }} >    
                <div>
                    <img className="presentacion"  src={presentacion} alt="presentacion"/>
                </div>
            </div>
    );
}
export default Home;