// Creación de un Closure

const miContador = (function(){
    // Las variables privadas se inician con un _
    let _contador = 0;
    function incrementar(){
        return _contador ++;
    }
    function decrementar(){
        return _contador --;
    }
    function valor(){
        return _contador;
    }
    return{
        sumar: incrementar,
        restar: decrementar,
        resultado: valor,
        
    };

    })();


console.log(miContador.resultado());
miContador.sumar();
miContador.sumar();
console.log(miContador.resultado());
miContador.restar();
console.log(miContador.resultado());


