'use strict'


function porConsola(num1 = 0, num2 = 0){
    console.log("La suma de los dos numeros es: "+ (num1+num2));
    console.log("La resta de los dos numeros es: "+ (num1-num2));
    console.log("La multiplicacion de los dos numeros es: "+ (num1*num2));
    console.log("La división de los dos numeros es: "+ (num1/num2));
}
function porPantalla(num1=0, num2=0){
    document.write("La suma de los dos numeros es: "+ (num1+num2)+"<br>");
    document.write("La resta de los dos numeros es: "+ (num1-num2)+"<br>");
    document.write("La multiplicacion de los dos numeros es: "+ (num1*num2)+"<br>");
    document.write("La división de los dos numeros es: "+ (num1/num2)+"<br>");
}

function calculadora(){
   let numero1 = parseInt(prompt("Ingrese el primer número: "));
   let numero2 = parseInt(prompt("Ingrese el segundo número"));

   porConsola(numero1, numero2);
   porPantalla(numero1, numero2);
}

calculadora();

//Parametros por defecto 


function saludar(tipo = "Hola", nombre = "Usuario"){
 return `${tipo}, ${nombre}`;
}

