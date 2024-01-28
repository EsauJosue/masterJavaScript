// Un closure se pude usar como si fuera una clase

function inventario(nombre){
    let _nombre = nombre;

    const _articulos = {};
    
    function add(nombre, cantidad){
        _articulos[nombre] = cantidad; 

    }
    function borrar(nombre){
        delete _articulos[nombre];
    }
    function cantidad(nombre){
        return _articulos[nombre];
    }
    function nombre(){
        return _nombre;
    }
    function verInventario(){
        return _articulos;
    }

    return{
        agregar : add,
        quitar: borrar,
        verCantidad : cantidad,
        verInventario : verInventario,
    };


}
//Esto es como si se creara un objeto y se instancia a la clase inventario
const libros = inventario('libros');
libros.agregar("React.js",3);
libros.agregar("JavaScript",300);
libros.agregar("NodeJs",100);

const discos = inventario('discos');
discos.agregar("Magneto", 200);
discos.agregar("Miguel Bose", 3);
discos.agregar("Victor Manuel",3);



console.log("Cantidad de libros son: ", libros.verInventario())
console.log("Cantidad de discos son: ", discos.verInventario())
