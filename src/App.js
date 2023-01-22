
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/home/Home.js';
import Temporizador from './componentes/temporizador/Temporizador.js';
import imagen from './componentes/img/fondo.jpg';
import Informacion from './componentes/informacion/Informacion';
import Map from './componentes/img/mapa.jpg';
import Asistencia from './componentes/asistencia/asistencia.js';
import CarouselFadeExample from './componentes/carousel/Carousel.js';
import Footer from './componentes/footer/Footer';




function App() {
  return (
    <div classname= 'app' style={{ backgroundImage: `url(${imagen})`, width: "100%", height:"100%", backgroundSize:"cover" }}>    
      <Home/>
      <div className='temporizador'>     
      <Temporizador
      cuentaRegresivaMS={1679682600000}/>
      </div>
      <div>
      <Informacion/>
      </div>
      <div className='mapaDiv' >    
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.9636078057733!2d-58.717379599999994!3d-34.554476799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd5265a6977b%3A0xd4a922c192fd21a!2sJanos%20San%20Miguel!5e0!3m2!1ses!2sar!4v1674327089980!5m2!1ses!2sar" ></iframe>
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
