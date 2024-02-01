'use strict'
//Transformacion de textos 
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es muy buen curso";
var vacio = "";
var arreglo = [23,45, 36, "Hola mundo"];

//Convierte a texto
console.log(typeof numero.toString())
//Convierte a mayusculas
console.log(texto1.toUpperCase())
//Convierte a minusculas
console.log(texto1.toLowerCase());
//Calcular lobgitud de un texto
console.log("La longitud del texto vacio es de: "+vacio.length)
//Calcular longitud de un array
console.log("La longitud de un array es de: ", arreglo.length)

//Concatenar - Unir textos 
var textoTotal = texto1 + texto2;

var textoConcat = texto1.concat(" "+ texto2);

console.log(textoTotal);
console.log(textoConcat);