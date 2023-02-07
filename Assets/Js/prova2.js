const pi_greco = 3.14;
var nome = 'Aldo';
let ruolo = 'Cliente';

document.getElementById('concatena').innerHTML = nome + ',' + ruolo + ',' + pi_greco


let concatena = nome + ', ' + ruolo + ', ' + pi_greco;
document.getElementById('concatena2').innerHTML = concatena;

var mario = 'Mario';
let carla = 'Carla';

document.getElementById('var').innerHTML = mario;
document.getElementById('let').innerHTML = carla;
document.getElementById('final').innerHTML = mario;

let mario2 = 'Mario'

document.getElementById('let2').innerHTML = mario2;
document.getElementById('let3').innerHTML = carla;
document.getElementById('final2').innerHTML = carla;


let iniziale = 15;
let value;

//iniziale
document.getElementById('iniziale').innerHTML = document.getElementById('iniziale').innerHTML + iniziale;

//incremento
value = iniziale + 15;
document.getElementById('valore1').innerHTML = document.getElementById('valore1').innerHTML + value + ', ' + ++value;

//decremento
value = iniziale - 10;
document.getElementById('valore2').innerHTML = document.getElementById('valore2').innerHTML + value + ', ' + --value;

//moltiplicazione
value = iniziale * 3;
document.getElementById('valore3').innerHTML = document.getElementById('valore3').innerHTML + value;

//divisione
value = iniziale / 3;
document.getElementById('valore4').innerHTML = document.getElementById('valore4').innerHTML + value;

//non è un numero
value = iniziale
document.getElementById("valore5").innerHTML=document.getElementById("valore5").textContent + iniziale +' non è un numero'
