const numero = prompt("inserisci un numero");
let somma = 0;
somma = Math.floor((numero / 1) % 10);
somma += Math.floor((numero / 10) % 10);
somma += Math.floor((numero / 100) % 10);
somma += Math.floor((numero / 1000) % 10);

console.log("somma: ", somma);
