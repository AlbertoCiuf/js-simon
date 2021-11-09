/*
  1. generare array 5 numeri random da visualizzare
  2. dopo 3 secondi, far sparire i numeri e far comparire 5 prompt 
  3. contare i numeri indovinati
  4. stampare nell'html quanti e quali numeri sono stati indovinati dall'utente
*/


//dichiaro variabili e costanti
const numbersList = [];
const MIN=10;
const MAX=100;
const htmlMessage = document.querySelector('.container > h2');
const htmlContent = document.getElementById('content');
const correctNumbers = [];
let scoreCounter=0;
let timeOutMsValue = 30000; //numero di millisecondi che il programma aspetterà per far partire la funzione che chiede all'utente di inserire i numeri per provare ad indovinarli
htmlMessage.innerHTML = 'Guarda questi numeri. Hai 30 secondi per memorizzarli.';

//MAIN

//genero e stampo a schermo i numeri random
for (let i=0; i<5; i++) {
  numbersList[i] = getRandomInt(MIN, MAX);
  htmlContent.innerHTML += `${numbersList[i]} `;
}

//dopo il numero di millisecondi corrispondente al valore della variabile timeOutMsValue, il programma esegue il codice tra le graffe
//nel primo timeout pulisco l'innerHTML degli elementi
setTimeout(function(){
  htmlMessage.innerHTML='';
  htmlContent.innerHTML='';
}, timeOutMsValue)

//riassegno il valore di timeOutMsValue per regolare i timeout in modo tale che l'innerHTML venga resettato un istante prima della comparsa dei prompt
timeOutMsValue=30100;

//nel secondo timeout il programma esegue il codice corrispondente alle funzioni richiamate
setTimeout(function(){
  checkNumbersWithUser();
  printOutput();
}, timeOutMsValue)



//FUNCTIONS

//funzione che genera un numero intero casuale compreso tra un minimo e un massimo, passati come parametri.
function getRandomInt(min, max) {
  return Math.floor(Math.random()*(max - min + 1)+ min);
}

//funzione che fa inserire all'utente 5 numeri uno per volta e li confronta uno ad uno con quelli che erano visualizzati a schermo. Se il numero inserito corrisponde ad uno di quelli scritti a schermo, aumenta di uno il punteggio.
function checkNumbersWithUser() {  
  for (i=0; i<5; i++) {
    let userNumber = parseInt(prompt('Inserisci, uno per volta, i numeri che hai visto.'));
    if (numbersList.includes(userNumber)) {
      correctNumbers.push(userNumber);
      scoreCounter++;
    }
  }
}

//funzione che stampa a schermo quanti e quali numeri sono stati indovinati dall'utente
function printOutput() {

  if (scoreCounter === 0) {
    htmlMessage.innerHTML='Mi dispiace, non hai indovinato nessun numero. Ricarica la pagina e riprova!';
  } else if (scoreCounter === 1) {
    htmlMessage.innerHTML = 'Hai indovinato solo un numero:';
    htmlContent.innerHTML = correctNumbers;
  } else if (scoreCounter === 5) {
    htmlMessage.innerHTML='Complimenti, hai indovinato tutti i numeri!';
    htmlContent.innerHTML=correctNumbers.split(",");
  } else {
    htmlMessage.innerHTML=`Hai indovinato ${scoreCounter} numeri:`;
    for (let number of correctNumbers) {
      htmlContent.innerHTML += `${number} `;
    }
  }
}
