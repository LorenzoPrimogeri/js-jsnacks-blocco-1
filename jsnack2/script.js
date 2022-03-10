// Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero
// se è dispari inseriscilo nell’array.
let arrayDispari = [];
let i = 0;
for (i = 0; i < 6; i++) {
    let numero = parseInt(prompt("inserisci un numero"));
    if (numero % 2 !== 0) {
        arrayDispari.push(numero);
    }
}
for (i = 0; i < arrayDispari.length; i++) {
    console.log(i + 1 + " numero dispari: " + arrayDispari[i]);
}