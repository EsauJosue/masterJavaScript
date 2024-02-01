function Inventario(nombre){
    this.articulos = {};
    this.nombre = nombre; 
    
    this.add = nombre,cantidad => {
        this.articulos[nombre] = cantidad;
    };

    this.borrar = nombre => {
        delete this.articulos[nombre];
    };

    this.verCantidad = nombre =>{
        return this.articulos[nombre];
    };
    this.getNombre = ()=>{
        return this.nombre;
    };

    this.verArticulos = nombre =>{
        return this.articulos;
    };
}

const libros = new Inventario('libros');
libros.add("Python",3);
console.log(libros);