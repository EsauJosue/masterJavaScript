'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];
console.log(cine);

console.log(cine[0][0]);

//agregar elemento al array

peliculas.push("Batman");
console.log(peliculas);

//quitando el ultimo elemento del array

peliculas.pop();
console.log(peliculas);

//convirtiendo un array a texto

var array_texto = peliculas.join();
console.log(array_texto);

var textos = "texto1, texto2, texto3";
var texto_array = textos.split(",");
console.log("Texto convertido a array: "+ texto_array);
console.log(texto_array);

//Ordenando arreglos
//A-Z
var categorias_ordenadas = categorias.sort();
console.log("Categorias ordenadas: "+ categorias_ordenadas);
//Z-A
var categorias_reversa = categorias.reverse();
console.log("Categorias reversa: "+ categorias_reversa);

//Recorriendo arreglos con FOR IN

for(let pelicula in peliculas){
    console.log(peliculas[pelicula]);
}

//Busqueda en un array

var busqueda = peliculas.find(function(pelicula){
    return pelicula == "La verdad duele"
});
if(busqueda){
    console.log("La pelicula si se encuentra: "+ busqueda);
}

//La misma busqueda comprimida

var busquedaFlecha = peliculas.find(pelicula => pelicula = "La verdad duele");

if(busquedaFlecha){
    console.log("La pelicula si se encuentra: "+ busquedaFlecha);
}

//Busqueda del Index y no del contenido

var busquedaFlechaIndex = peliculas.findIndex(pelicula => pelicula = "La verdad duele");
console.log("La pelicula si se encuentracc: "+ busquedaFlechaIndex);



//Busqueda de parecidos

var precios = [35, 44, 125, 1000];

var busquedaPrecios = precios.some(precios => precios >= 10000);
console.log(busquedaPrecios);