'use strict'

//Una función anonima es aquella que no tiene nombre
// var pelicula = function (nombre){
//     return "La pelicula es: "+ nombre;
// }

// function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
//     let sumar = numero1+ numero2;
//     sumaYmuestra(sumar);
//     sumaPorDos(sumar);
//     return sumar;
// }

//Funciones CallBack
// sumame(5,7,function(dato){
//     console.log("La suma es: ", dato)
// },
// function(dato){
//     console.log("La suma por dos es: "+ dato*2)
// }


// )

// function dividir(numero1,numero2,dividir){
//     let resultado = numero1 / numero2;
//     dividir(resultado);
//     return resultado;
// }


// dividir(100,5,function(resultado){
//     console.log("El resultado de la división es: ",resultado)
// })
// function multiplicar(numero1,numero2,multiplicar){
//     var resultado = numero1 * numero2;
//     multiplicar(resultado);
// }

// multiplicar(5,4, function(dato){
//     console.log("El resultado es: ", dato)
// })

// function promedio(cal1, cal2, cal3, cal4, promediar){
//     var promedio = (cal1 + cal2 + cal3 +cal4)/4;
//     promediar(promedio)
//     return promedio;
// }

// promedio(7,8,9,10, function(resultado){
//     console.log("El promedio es: ", resultado);
// })
var nombre = prompt("Ingrese el nombre: ");
var apellido = prompt("Ingrese el apellido: ");

function concatenar(nombre, apellido, unirNombre){
 
    var nombreCompleto = nombre + apellido;
    unirNombre(nombreCompleto);

    
}


concatenar(nombre,apellido, dato => {
    document.write("<h1>El nombre es <strong> "+ dato +"</strong></h1> ")
})