//Rest
const frutas = function (fruta1,fruta2,fruta3, ...resto){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    console.log("Fruta 3: ", fruta3);
    console.log("Resto de las frutas: ", resto)
}

frutas("Melon","Mango", "Fresa", "Kiwi","Manzana"," Platano");