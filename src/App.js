
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/home/Home.js';
import Temporizador from './componentes/temporizador/Temporizador.js';
import imagen from './componentes/img/fondo.jpg';
import Informacion from './componentes/informacion/Informacion';
import Map from './componentes/img/maps.jpg';
import Asistencia from './componentes/asistencia/asistencia.js';
import CarouselFadeExample from './componentes/carousel/Carousel.js';
import Footer from './componentes/footer/Footer';




function App() {
  return (
    <div classname= 'app' style={{ backgroundImage: `url(${imagen})`, width: "100%", height:"100%", backgroundSize:"cover" }}>    
      <Home/>
      <div className='temporizador'>     
      <Temporizador
      cuentaRegresivaMS={1679540400000}/>
      </div>
      <div>
      <Informacion/>
      </div>
      <div>
      <img className='mapa' src={Map}/>
      </div>
      <div>
      <Asistencia/>
      </div>
      <div>
      </div>
      <div>
      <CarouselFadeExample/>
      </div>
      <div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
