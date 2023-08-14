// Creazione container div
let container = document.createElement('div');
container.className = 'container';

// Creazione input
let input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('id', 'input');

// Creazione della label per input
let lab = document.createElement('label');
lab.setAttribute('for', 'input');
lab.innerHTML = 'Incrementa/decrementa di: (lasciare vuoto per 1)'; 

// Creazione pulsanti 
let btnContainer = document.createElement('div');
btnContainer.className = 'btnContainer';
let btnPlus = document.createElement('button');
btnPlus.innerHTML = '+';
btnPlus.className = 'btn';
let btnMinus = document.createElement('button');
btnMinus.innerHTML = '-';
btnMinus.className = 'btn';
let btnReset = document.createElement('button');
btnReset.innerHTML = 'Azzera';
btnReset.className = 'btn';

// Implementazione del container 
document.body.append(container);

// Implementazione dell'input con rispettiva label
document.body.append(lab);
document.body.append(input);

// Implementazione dei pulsanti
document.body.append(btnContainer);
btnContainer.append(btnMinus);
btnContainer.append(btnReset);
btnContainer.append(btnPlus);

// Impostazione valore iniziale 
let currentNumber = 0;

// Visualizzazione del valore iniziale
document.addEventListener('DOMContentLoaded', () =>{
    container.innerHTML = currentNumber;
})

// Event listeners per i pulsanti 
btnPlus.addEventListener('click', () =>{
    currentNumber += ((input.value)? Number(input.value) : 1);
    container.innerHTML = currentNumber;
})

btnMinus.addEventListener('click', () =>{
    currentNumber -= ((input.value)? Number(input.value) : 1);
    container.innerHTML = currentNumber;
})
btnReset.addEventListener('click', () =>{
    currentNumber = 0;
    container.innerHTML = currentNumber;
})