'use strict'

// Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario: 

var numero1 = parseInt(prompt("Ingresa el primer numero: "));
var numero2 = parseInt(prompt("Ingresa el segundo número: "))

document.write("<h1>De "+numero1+" a "+numero2+ " están estos números: ")
for(var x = numero1; x<= numero2; x++){
    document.write(x+" <br>");

}