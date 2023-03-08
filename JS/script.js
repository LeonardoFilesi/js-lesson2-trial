/*   Chiedere all'utente con due prompt, 
gli anni di due persone e comunicare 
quale delle due è più grande */

/* 
// Chiedere all'utente l'età delle 2 persone con 2 prompt
const firstUserAge = parseInt(prompt("Quanti anni ha la prima persona?"));
const secondUserAge = parseInt(prompt("Quanti anni ha la seconda persona?"));
console.log(firstUserAge, secondUserAge);

/* SE l'età della 1a persona è maggiore di quella della 2a
            SCRIVERE: "La prima personaè più grande"
ALTRIMENTI SE le due persona hanno età uguale
            SCRIVERE: "Sono coetanei"
ALTRIMENTI 
            SCIRVERE: "La prima persona è la più piccola" */
/* 
if (firstUserAge > secondUserAge) {
    console.log("La prima persona è la più grande");
} else if (firstUserAge == secondUserAge) {
    console.log("Le due persone sono coetanee");
} else {
    console.log("La prima persona è la più piccola")
}
*/

/* 
const x = 1;
const y = 6;

if (!(x ===5)) {
    console.log("OK");
} else {
    console.log("KO");
}
*/

// Gioco: pari o dispari
// Chiedere all'utente se vuole pari o dispari.
// Chiedere all'utente un numero compreso tra 1 e 9.
// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer
// Stabilire e comunicare chi ha vinto secondo le regole.

// INPUT
// Chiedere all'utente se vuole pari o dispari.
const userChoice = prompt("Pari o dispari? (scrivi tutto minuscolo)");

// Chiedere all'utente un numero compreso tra 1 e 9 e lo trasformiamo in numero.
const userNumber = parseInt(prompt("Dimmi un numero da 1 a 9"));
console.log(userChoice, userNumber);

// SE userNumber non è NaN allora continuo
if(!isNaN(userNumber)) {
    console.log("Grazie, puoi continuare");
} else {
    console.log("Non hai scritto un numero, per piacere riprova")
}

// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer
const computerNumber = Math.floor(Math.random() * 9) + 1;
console.log(computerNumber);

// Calcolare la somma dei due numeri
const numbersSum = userNumber + computerNumber;
console.log(numbersSum);

// LOGICA

// Calcolo la somma dei due numeri
// Se la somma è divisibile per 2
        // risultato è "pari"
// Altrimenti
        // risultato è "dispari"
let result = "";
if(numbersSum % 2 === 0) {
    result = "pari";
} else {
    result = "dispari";
}
console.log(result);

// Se la scelta dell'utente è uguale al risultato
        // Ha vinto utente
// Altrimenti
        // Utente ha perso
if (userChoice === result) {
    console.log("Bravo! Hai vinto!");
} else {
    console.log("Sei stato sfortunato, ritenta!");
}

console.log(message);
document.getElementById("result").innerHTML = message;

} else {
    console.log("Non è un numero. Ricarica la pagina");
    document.getElementById("result").innerHTML = "Non è un numero. RIcarica la pagina";
}