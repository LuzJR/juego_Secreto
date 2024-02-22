let numeroSecreto = 0;
let intentos= 0;
let listatNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elemetoHTML = document.querySelector(elemento);
    elemetoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    };
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value= '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listatNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        if (listatNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listatNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
};

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego Número SECRETO!');
    asignarTextoElemento('P', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();