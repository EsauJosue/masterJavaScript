'use strict'

var numero1 = parseInt(prompt("Ingrese el primer número"))
var numero2 = parseInt(prompt("Ingrese el segundo número"))

function sumar(numero1,numero2,impresion) {
    let suma = numero1 + numero2;
    impresion(suma);
}


sumar(numero1,numero2, dato=> {
    console.log("La suma de los dos numeros es de: ", dato);
})