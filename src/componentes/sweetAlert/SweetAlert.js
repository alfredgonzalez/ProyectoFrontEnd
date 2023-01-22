import React, { Component } from "react";  
import Swal from "sweetalert2";
import "./sweetalert.css";
import Button from "react-bootstrap/esm/Button";
import img from '../img/GIFTFOTO.jpg'
 
const br = "CBU: 0290036010000030595111 - Alias: LUEMI"

export default class AlertSuccess extends Component {  
  
    constructor() {  
        super();  
        this.HandleClick = this.HandleClick.bind(this);  
    }  
  
    HandleClick() {  
        Swal.fire({
            title: '¡GRACIAS!',
            text: br,
            imageUrl: 'https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg',
            background: '#f4ebe8',
            imageWidth: 400,
            imageHeight: 200,
          }) 
    }  
  
    render() {  
        return (  
            <div>  
                <Button className="giftButton" variant="outline-secondary" size="lg" onClick={this.HandleClick}>GIFT</Button>
            </div>  
        );  
    }  
} 