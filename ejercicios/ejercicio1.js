//Programa que pida dos numeros y que diga cual es mayor, cual es menor y si son iguales
//Si los numeros no son un número o son menores o iguales a 0, nos los vuelva a pedir. 


let num1 = prompt("Ingrese el primer número: ")
let num2 = prompt("Ingrese el segundo número: ")

while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
     num1 = prompt("Ingrese el primer número: ")
     num2 = prompt("Ingrese el segundo número: ")
}
    if(num1 > num2){
        alert("El número :"+ num1 + "es mayor")
    }
    if(num2 > num1){
        alert("El número :"+ num2 + "es mayor")
    }
    if(num1 == num2){
        alert("Ambos numeros son iguales")
    }






