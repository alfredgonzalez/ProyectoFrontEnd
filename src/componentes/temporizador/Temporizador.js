import React, { useEffect } from "react";
import './temporizador.css'
import { useState } from "react";
import {getTiempoRestanteHastaQuePasenMS} from './Logica/temporizadorLogica.js'

const defaultTiempoRestante = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Temporizador = ({cuentaRegresivaMS}) => {
    const [tiempoRestante, setTiempoRestante] = useState(defaultTiempoRestante);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updatetiempoRestante(cuentaRegresivaMS);
        }, 1000);
        return () => clearInterval(intervalId);
    },[cuentaRegresivaMS]);

    function updatetiempoRestante(countdown) {
        setTiempoRestante(getTiempoRestanteHastaQuePasenMS(countdown));
    }

    return(
        <div className="divTemporizador">
            <h1 className="tituloTemporizador">Falta Solo</h1>
            <div className="countdown-timer">
                <span>{tiempoRestante.days}</span>
                <span className="diasRestantes"> Dias </span>
                <span className="two-numbers">{tiempoRestante.hours}</span>
                <span className="hora"> Horas </span>
                <span className="two-numbers">{tiempoRestante.minutes}</span>
                <span> Min </span>
                <span className="two-numbers">{tiempoRestante.seconds}</span>
                <span> Seg </span>
            </div>
        </div>
    );
}

export default Temporizador;