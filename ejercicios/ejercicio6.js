'use strict'

//Mostrar todos los impares que esten introducidos por el teclado

var numero1 = parseInt(prompt("Ingrese el primer número: "))
var numero2 = parseInt(prompt("Ingrese el segundo número:  "))

for(var i = numero1; i <= numero2; i++){
    
    if (i%2 != 0 ){
        console.log(i);
    }
}