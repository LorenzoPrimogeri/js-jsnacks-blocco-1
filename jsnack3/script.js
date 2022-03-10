let somma = 0;
let numero = prompt("inserisci un numero");
for (let i = 0; i < numero.length; i++) {
    somma += parseInt(numero[i]);
}
console.log("La somma è: ", somma);
/* soluzione alternativa
//12345
let somma = 0;
let numero = prompt("inserisci un numero");
let intArr = Array.from(String(numero), Number);
for (let i = 0; i < intArr.length; i++) {
    somma += intArr[i];
}
console.log("la somma è: ", somma);
23
Soluzione solo per n numeri definiti (in questo caso 4)
somma = Math.floor((numero / 1) % 10); //3
somma += Math.floor((numero / 10) % 10);
somma += Math.floor((numero / 100) % 10);
somma += Math.floor((numero / 1000) % 10);
*/
