"use strit"

var segundos = 0;
var minutos = 0;
var horas = 0;

var intervalo;

var temporizadorIniciado = false;
var temporizadorPausado = false;





function iniciar() {
    if (temporizadorIniciado === false) {
        intervalo = setInterval(contador, 1000);
    } else if(temporizadorPausado === true) {
        intervalo = setInterval(contador, 1000);
        temporizadorPausado = false;
    }
    
    temporizadorIniciado = true;
}

function pausar() {
    clearInterval(intervalo);
    temporizadorPausado = true;
}


function resetar() {
    clearInterval(intervalo);

    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById('temporizador').innerHTML = '00:00:00';
}



function contador() {
    segundos = segundos + 1;

    if (segundos == 60) {
        segundos = 0;
        minutos = minutos + 1;

      

        if (minutos == 60) {
            minutos = 0;
            horas = horas + 1;
        }
    }


    document.getElementById('temporizador').innerHTML = doisDigito(horas) + ':' + doisDigito(minutos) + ':' + doisDigito(segundos);
}



function doisDigito(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}
