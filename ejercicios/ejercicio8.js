'use strict'

/*
Calculadora.
Que el programa pida dos cifras y que si metemos mal un numero lo vuelva a pedir
En el cuerpo de la pagina, en una alarerta y por la consola el resultado de sumar, restar, multiplicar y dividir dos cifras 

*/


function suma (num1, num2){
    let suma = num1 + num2;
    return suma;
}

function resta(num1, num2){
    let resta = num1 - num2;
    return resta;
}
function multiplicacion(num1, num2){
    let multiplicacion = num1 * num2;
    return multiplicacion;
}
function division(num1, num2){
    let division = num1 / num2;
    return division;
}

var numero1 = parseInt(prompt("Ingrese el primer número:" ));
var numero2 = parseInt(prompt("Ingrese el segundo número "));

if (isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Ingrese el primer número:" ));
    var numero2 = parseInt(prompt("Ingrese el segundo número "));
}else{
    alert("El resultado de la suma es de: "+ suma(numero1, numero2));
    alert("El resultado de la resta es de: "+ resta(numero1, numero2));
    alert("El resultado de la Multiplicación es de: "+ multiplicacion(numero1, numero2));
    alert("El resultado de la Division es de: "+ division(numero1, numero2));

    //Consola

    console.log("El resultado de la suma es de: "+ suma(numero1, numero2));
    console.log("El resultado de la resta es de: "+ resta(numero1, numero2));
    console.log("El resultado de la Multiplicación es de: "+ multiplicacion(numero1, numero2));
    console.log("El resultado de la Division es de: "+ division(numero1, numero2));

    document.write("El resultado de la suma es de: "+ suma(numero1, numero2));
    document.write("El resultado de la resta es de: "+ resta(numero1, numero2));
    document.write("El resultado de la Multiplicación es de: "+ multiplicacion(numero1, numero2));
    document.write("El resultado de la Division es de: "+ division(numero1, numero2));



}