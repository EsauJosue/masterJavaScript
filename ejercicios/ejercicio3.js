
/*
Hacer un programa que muestre todos los numeros que hay entre dos numeros que ingrese el usuario.
*/

var numero1 = parseInt(prompt("Ingrese el número inicial",0));
if (isNaN(numero1)){
    numero1 = 0;
}

var numero2 = parseInt(prompt("Ingrese el número final",0));
if (isNaN(numero2)){
    numero2 = 0
}

for(let x = numero1; x <= numero2; x++ ){
    console.log(x);
}