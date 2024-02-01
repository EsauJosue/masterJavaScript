'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de curso JavaScript de Victor Robles";
var texto2 = "Es muy bue curso";

var reemplazo = texto1.replace("JavaScript", "Python");
console.log(reemplazo);

var separar = texto1.slice(14,22) //Genera un nuevo string a partir del caracter 14
console.log(separar);

var separarSplit = texto1.split(" "); //corta las palabras y cada una las guarda en un array
console.log(separarSplit);

var busquedaTrim = texto1.trim(); //Quita espacios al principio y al final
console.log(busquedaTrim);