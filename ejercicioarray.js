'use strict'

/*
El programa hace lo siguiente: 

1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice. 
(Se valorará el uso de funciones)
*/

var arreglo = [];

for(let x = 1; x <= 6; x++){
    let valor = parseInt(prompt("Ingresa el valor: "+ x));
    arreglo.push(valor);
}



mostrar(arreglo);

reversa(arreglo);

function mostrar(arreglo){
    document.write("<h2> Los elementos del arreglo son los siguientes: </h2>");
    document.write("<ul>");
    for(let item in arreglo){
    
        document.write("<li>Elemento "+ item + ": "+ arreglo[item]+"</li>");
        console.log(arreglo[item]);
    }
    document.write("</ul>");    
}

function ordenar(arreglo){
    document.write("<h2> Los elementos del arreglo ordenados son los siguientes: </h2>");
    document.write("<ul>");
    let arreglo_ordenado = arreglo.sort(function(a,b){
        return a-b;
    });
    for(let item in arreglo_ordenado){

        document.write("<li>Elemento "+ item + ": "+ arreglo_ordenado[item]+"</li>");
        console.log(arreglo_ordenado[item]);
    }
    document.write("</ul>");
    
}

function reversa(arreglo){
    document.write("<h2> Los elementos del arreglo ordenados al reves son son los siguientes: </h2>");
    document.write("<ul>");
    let arreglo_ordenado = arreglo.reverse(function(a,b){
        return a-b;
    });
    for(let item in arreglo_ordenado){

        document.write("<li>Elemento "+ item + ": "+ arreglo_ordenado[item]+"</li>");
        console.log(arreglo_ordenado[item]);
    }
    document.write("</ul>");
}

function contar(arreglo){
    let cantidad = arreglo.length;
    return cantidad;
}

document.write("La cantidad de elementos son: "+ contar(arreglo));
var busqueda = parseInt(prompt("Ingrese el valor a buscar: "));
var resultadoBusqueda = buscarValor(busqueda, arreglo);

if(resultadoBusqueda){
    alert("El valor si existe en el arreglo");
}else{
    alert("El valor no existe en el arreglo");
}

function buscarValor(valor, arreglo){
    let busquedaValor = arreglo.find(function(abuscar){
        return abuscar == valor;
    });
    return busquedaValor;
}
var busquedaFlechaIndex = arreglo.findIndex(valor => valor = "abuscar");
console.log("El valor esta en el indice: "+ busquedaFlechaIndex);
ordenar(arreglo);


