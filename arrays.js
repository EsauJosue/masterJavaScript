'use strict'
var nombres = ["Victor", "Josue", "Esau"];
var lenguajes = new Array("Python", "JavaScript", "Kotlin");

var eleccion = parseInt(prompt("Que elemento quieres mostrar del arregolo: ",0))
if (eleccion >= nombres.length){
    alert("el arreglo es menor al numero que estas indicando")
}else{
    console.log(nombres[eleccion]);

}

//Usando for
document.write("<h1> Lenguajes de programación </h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i ++){
    document.write("<li>"+ lenguajes[i] + "</li>");
}
document.write("</ul>");

//Usando Foreach

document.write("<h2> Lenguajes de programación usando ForEach</h2>");
document.write("<ul>");
lenguajes.forEach((lenguajes)=>{ // Los parametros que naturalmente recibe esta función de callback son (elemento, indice, arreglo)
    document.write("<li>"+ lenguajes + "</li>");
});
document.write("</ul>");


