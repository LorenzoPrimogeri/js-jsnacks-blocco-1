/* soluzione per piu numeri */
//12345
let somma = 0;
let numero = prompt("inserisci un numero");
let intArr = Array.from(String(numero), Number);
for (let i = 0; i < intArr.length; i++) {
    somma += intArr[i];
}
console.log("la somma è: ", somma);
/* 
Soluzione solo per 4 numeri
somma = Math.floor((numero / 1) % 10);
somma += Math.floor((numero / 10) % 10);
somma += Math.floor((numero / 100) % 10);
somma += Math.floor((numero / 1000) % 10);
*/
