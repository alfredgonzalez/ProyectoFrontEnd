import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';
import JanosFoto from '../img/janosFoto.jpg'
import './card.css'

function GroupExample() {
  return (
    <div className='carta'>
      <Card>
        <Card.Img variant="top" src={JanosFoto}/>
        <Card.Body>
          <Card.Title>Janos San Miguel</Card.Title>
          <Card.Text>
          Av. Gaspar Campos 2800<br></br> B1663 San Miguel<br></br> Provincia de Buenos Aires
          </Card.Text>
        </Card.Body>

      </Card>
    </div>
  );
}

export default GroupExample;