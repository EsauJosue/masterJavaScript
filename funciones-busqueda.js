'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de curso JavaScript de Victor Robles";
var texto2 = "Es muy bue curso";


var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busquedaLast = texto1.lastIndexOf("curso");
console.log(busquedaLast);

var busquedaSearch = texto1.search("curso");
console.log(busquedaSearch);

var busquedaMatch = texto1.match("curso");
console.log(busquedaMatch);

//Para utilizar match en varios posibles resultados se hace de la siguiente manera
var busquedaMatchGlobal = texto1.match(/curso/g);
console.log(busquedaMatchGlobal);

var busquedaStr = texto1.substr(14,5); // (desde que caracter, cuantos caracteres va a imprimir después)
console.log(busquedaStr);

var busquedaCharAt = texto1.charAt(44); //Indica la posicion del caracter que se requiera tomar
console.log(busquedaCharAt);

var busquedaStartWhith = texto1.startsWith("Bien"); //Se busca que el texto inicie con lo que se le esta pasando como parametro, arroja True o False
console.log(busquedaStartWhith);

var busquedaEndsWith = texto1.endsWith("Robles"); //Se busca que el texto termine con lo que se le esta pasando como parametro, arroja True o False
console.log(busquedaEndsWith);

var busquedaIncludes = texto1.includes("JavaScript"); // Se busca que se encuentre el texto que pasa como parametro, arroja False o True
console.log(busquedaIncludes);