const display = document.getElementById('display')
const controles = document.getElementById('botoes')

let hr = 0
let min = 0
let sec = 0
let intervalo;

controles.addEventListener('click', (event) => {
    if(event.target.id === 'iniciar') {
        iniciarCronometro();
    } else if(event.target.id === 'pausar') {
        pausarCronometro();
    } else if(event.target.id === 'zerar') {
        zerarCronometro();
        return;
    }   
});

function iniciarCronometro() {
    if(!intervalo) {
        intervalo = setInterval(() => {
            sec++;
        if(sec === 60) {
            sec = 0;
            min++;
        }
        if(min === 60) {
            min = 0;
            hr++;
        }
        display.textContent = 
            String(hr).padStart(2, '0') + ':' +
            String(min).padStart(2, '0') + ':' +
            String(sec).padStart(2, '0');
        }, 1000);
    }
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null;
}

function zerarCronometro() {
    clearInterval(intervalo);
    intervalo = null;
    hr = 0;
    min = 0;
    sec = 0;
    display.textContent = "00:00:00";
}



