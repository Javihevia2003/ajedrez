"use strict"
const readline = require("readline");
const rl = readline.createInterface(
    process.stdin,
    process.stdout
);

function leeLinea(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (introducido) => {
            resolve(introducido);
        });
    });
}
let tablero = []

for (let a1 = 0; a1 < 8; a1++) {
    tablero[a1] = []
    for (let a2 = 0; a2 < 8; a2++) {
        tablero[a1][a2] = null

    }

}
/**
 * Recibe un tablero y la imprime bonita
 * @param {} tablero 
 */
// function impresora(tablero) {
//     for (let i = 0; i < tablero.length; i++) {
//         let linea="|"
//         for (let j = 0; j < tablero[i].length; j++) {
//             if(tablero[i][j]==null){
//                 linea+=" |";
//             } else {
//                 linea+=tablero[i][j]+"|"

//             }

//         }
//         console.log(linea)

//     }

// }
// terminal dos coordenadas x e y, si esta dentro del tablero 
function impresora(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        let linea = "|"
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == null) {
                linea += " |";
            } else {

                linea += tablero[i][j] + "|"


            }

        }
        console.log(linea)

    }

}
/**
 * Tres en raya
 */
// async function opciones() {
//     // let cordX = await leeLinea("Introduce la coordenada X: ");
//     // let cordY = await leeLinea("Introduce la coordenada Y: ");
//     let min = Math.ceil(0);
//     let max = Math.floor(7);
//     let cordX = Math.floor(Math.random() * (max - min + 1) + min);
//     console.log('cordX', cordX)
//     let cordY = Math.floor(Math.random() * (max - min + 1) + min);
//     console.log('cordY', cordY)

//     if ((cordX < 0 || cordX > 7) || (cordY < 0 || cordY > 7)) {
//         console.log("Esa casilla no existe")
//         return "atpc"
//     } else {

//         if ((tablero[cordX][cordY] === null)) {
//             tablero[cordX][cordY] = "X"

//         } else {
//             console.log("Esa coordenada esta ocupada, pon otra");
//             process.exit()
//         }
//     }
//     impresora(tablero)
//     return opciones()
// }

// opciones()
// Vamos a realizar un ajedrez que ponga las fichas de un tablero de forma aleatoria.
// rey = "K";
// reina = "Q";
// alfil = "A";
// torre = "T";
// peon = "P";
// caballo = "C";

let fichas = ["K", "Q", "A", "T", "P", "C"]
function ajedrez(tablero, fichas) {
    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];
        let min = Math.ceil(0);
        let max = Math.floor(7);
        let cordX = Math.floor(Math.random() * (max - min + 1) + min);
        let cordY = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(ficha, cordX)
        console.log(ficha, cordY)
        if ((tablero[cordX][cordY] === null)) {
            tablero[cordX][cordY] = ficha;
        } else {
            console.log("Esa coordenada esta ocupada, pon otra");
            i--;
        }
    }

    impresora(tablero)
    // let continuar=await leeLinea("Desea reiniciar?(Si-NO):");
    // if(continuar=="Si"||continuar=="si"||continuar=="SI"){
    //          console.log("Reiniciando");
    //         return ajedrez(tablero,fichas);
    //     }else{
    //         console.log("Terminando");
    //         process.exit();

    //     }

}
ajedrez(tablero, fichas);
function comeFicha(fichas, posicion) {
    if (fichas[posicion] !== "C") {
        console.log("Cojo la ficha" + fichas[posicion])
        if(fichas[posicion]=="K"){
            // for para ir hacia arriba
            for (let i = 0; i < 1; i++) {
                
                
            }
        }
    }else{
        // return comeCaballo()
    }
    

}
