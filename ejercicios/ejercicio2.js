'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado

*/
var contador = 0
var suma = 0

do{
    var numeroIntroducido = parseInt(prompt("Ingrese un número: "))
    
    if(isNaN(numeroIntroducido)){
        numeroIntroducido = 0
    }else if(numeroIntroducido >= 0){
        suma = suma + numeroIntroducido
        contador ++
    }
   
}while(numeroIntroducido >=0 )

alert("La suma de los números introducidos es : " + suma)
alert(" La media de los números introducidos es: "+(suma/contador))
