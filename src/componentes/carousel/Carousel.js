import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import "./carousel.css";
import foto1 from "../img/foto1.png";
import foto2 from "../img/foto2.png";
import foto3 from "../img/foto3.png";
import foto4 from "../img/foto4.jpg";

function CarouselFadeExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="foto4"
          src={foto4}
          alt="foto4Carousel"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="foto1"
          src={foto1}
          alt="foto1Carousel"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="foto2"
          src={foto2}
          alt="foto2Carousel"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="foto3"
          src={foto3}
          alt="foto3Carousel"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;