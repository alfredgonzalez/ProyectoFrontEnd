import dayjs from 'dayjs';

export function getTiempoRestanteHastaQuePasenMS(timestampMs) {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if(timestampDayjs.isBefore(nowDayjs)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }
    return {
        seconds : getRestanteseconds(nowDayjs, timestampDayjs),
        minutes : getRestanteminutes(nowDayjs, timestampDayjs),
        hours : getRestantehours(nowDayjs, timestampDayjs),
        days : getRestantedays(nowDayjs, timestampDayjs)
    } ;
}

function getRestanteseconds(nowDayjs, timestampDayjs) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return rellenarConCeros(seconds, 2);
}

function getRestanteminutes(nowDayjs, timestampDayjs) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return rellenarConCeros(minutes, 2);
}

function getRestantehours(nowDayjs, timestampDayjs) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return rellenarConCeros(hours, 2);
}

function getRestantedays(nowDayjs, timestampDayjs) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
}

function rellenarConCeros(numero, tamañoMinimo) {
    const numeroString = numero.toString();
    if(numeroString.length >= tamañoMinimo) return numeroString;
    return "0".repeat(tamañoMinimo - numeroString.length) +  numeroString;
}