let somma = 0;
let numero = prompt("inserisci un numero");
let myFunc = num => Number(num);
var intArr = Array.from(String(numero), myFunc);
for (let i = 0; i < intArr.length; i++) {
    somma += intArr[i];
}
console.log("la somma è: ", somma);

