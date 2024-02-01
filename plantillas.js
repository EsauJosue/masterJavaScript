'use strict'

var nombre = prompt("Ingresa un nombre");
var apellidos = prompt("Ingresa los apellidos");

//var texto = "Mi nombre es: "+ nombre+ " mis apellidos son: "+ apellidos;

//PLANTILLAS
var texto = `
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mis apellidos son: ${apellidos} </h3>
`;
document.write(texto)