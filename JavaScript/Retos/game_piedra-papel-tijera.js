/* Piedra, papel, tijera con function | if | else */

var item1 = "Piedra";
var item2 = "Papel";
var item3 = "Tijera";

var resultado = function (user, cpu) {
    if (user != cpu) {
        if (user === item1 && cpu === item3) {
            console.log("Ganaste con " + item1)
        }
        else if(user === item2 && cpu === item1) {
            console.log("Ganaste con " + item2)
        }
        else if(user === item3 && cpu === item2) {
            console.log("Ganaste con " + item3)
        }
        else {
            console.log("Perdiste, suerte la próxima vez")
        }
    }else if(user === cpu) {
        console.log("Empate")
    }
};
       

resultado(item2,item3)

/* piedra, papel, tijera con switch */

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijera";

var startGame = function (user,cpu) {
    switch(true) {
        case user === op1 && cpu === op3:
            console.log("Ganó user con " + op1);
            break;
        case user === op1 && cpu === op2:
            console.log("Perdio " + op2 + " mata " + op1);
            break;
        case user === op2 && cpu === op1:
            console.log("Ganó user con " + op2);
            break;
        case user === op2 && cpu === op3:
            console.log("Perdio " + op3 + " mata " + op2);
            break;
        case user === op3 && cpu === op2:
            console.log("Ganó user con " + op3);
            break;
        case user === op3 && cpu === op1:
            console.log("Perdio " + op1 + " mata " + op3);
            break;
        default:
            console.log("Empate");
    }
};

