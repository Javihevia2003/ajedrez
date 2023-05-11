"use strict";
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function leeLinea(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (introducido) => {
            resolve(introducido);
        });
    });
}
let tablero = [];

for (let a1 = 0; a1 < 8; a1++) {
    tablero[a1] = [];
    for (let a2 = 0; a2 < 8; a2++) {
        tablero[a1][a2] = null;
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
        let linea = "|";
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == null) {
                linea += " |";
            } else {
                linea += tablero[i][j] + "|";
            }
        }
        console.log(linea);
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

let fichas = ["P", "A", "Q", "T", "K", "C"];
function ajedrez(tablero, fichas) {
    for (let i = 0; i < fichas.length; i++) {
        let ficha = fichas[i];
        let min = Math.ceil(0);
        let max = Math.floor(7);
        let cordX = Math.floor(Math.random() * (max - min + 1) + min);
        let cordY = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(ficha, cordX);
        console.log(ficha, cordY);
        if (tablero[cordX][cordY] === null) {
            tablero[cordX][cordY] = ficha;
        } else {
            console.log("Esa coordenada esta ocupada, pon otra");
            i--;
        }
    }

    impresora(tablero);
    return tablero;
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
// function encuentraFicha(tablero) {
//     let datos = {};
//     for (let fila = 0; fila < tablero.length; fila++) {
//         for (let columna = 0; columna < tablero[fila].length; columna++) {
//             if (tablero[fila][columna] !== null) {
//                 if (tablero[fila][columna] === "P") {
//                     console.log("Cojo la ficha", tablero[fila][columna]);
//                     datos = { ficha: tablero[fila][columna], fila, columna }
//                     return datos;


//                 } else if (tablero[fila][columna] === "A") {
//                     console.log("Cojo la ficha", tablero[fila][columna]);
//                     datos = { ficha: tablero[fila][columna], fila, columna }
//                 } else if (tablero[fila][columna] === "T") {
//                     console.log("Cojo la ficha", tablero[fila][columna]);
//                     datos = { ficha: tablero[fila][columna], fila, columna }
//                 } else if (tablero[fila][columna] === "C") {
//                     console.log("Cojo la ficha", tablero[fila][columna]);
//                     datos = { ficha: tablero[fila][columna], fila, columna }

//                 } else if (tablero[fila][columna] === "K") {
//                     console.log("Cojo la ficha", tablero[fila][columna]);
//                     datos = { ficha: tablero[fila][columna], fila, columna }

//                 } else if (tablero[fila][columna] === "Q") {
//                     console.log("Cojo la ficha", tablero[fila][columna]);
//                     datos = { ficha: tablero[fila][columna], fila, columna }
//                 } else if (tablero[fila][columna] === "R") {
//                     console.log("Cojo la ficha", tablero[fila][columna]);
//                     datos = { ficha: tablero[fila][columna], fila, columna }

//                 }
//             }
//         }
//     }
// }
// console.log(encuentraFicha(tablero));
function moverFicha(fichas, tablero) {
    let datos = {};
    for (const ficha of fichas) {
        for (let fila = 0; fila < tablero.length; fila++) {
            for (let columna = 0; columna < tablero[fila].length; columna++) {


                switch (ficha) {
                    case "P":// mueve hacia arriba y solo 1 posición
                        if (tablero[fila][columna] === "P") {
                            console.log("Cojo la ficha", tablero[fila][columna]);
                            datos = { ficha: tablero[fila][columna], fila, columna }
                            if (datos.fila > 0) {
                                datos.fila--;
                                if (tablero[datos.fila][datos.columna] === undefined) {
                                    console.log(datos.ficha, "No puede moverse");
                                } else {
                                    if (tablero[datos.fila][datos.columna] == null) {
                                        console.log(datos.ficha, "se mueve hacia arriba");
                                        if (tablero[datos.fila][datos.columna + 1] !== null && tablero[datos.fila][datos.columna + 1] !== undefined) {
                                            console.log("La ficha", datos.ficha, "puede comer a la ficha", tablero[datos.fila][datos.columna + 1]);
                                        } else if (tablero[datos.fila][datos.columna - 1] !== null && tablero[datos.fila][datos.columna - 1] !== undefined) {
                                            console.log("La ficha", datos.ficha, "puede comer a la ficha", tablero[datos.fila][datos.columna - 1]);
                                        } else {
                                            console.log("Pero no puede comer a ninguna ficha");
                                        }
                                    } else {
                                        console.log("La ficha", datos.ficha, "no se puede mover hacia arriba");
                                    }
                                }
                            }
                        }
                        break;
                    case "A":
                        if (tablero[fila][columna] === "A") {
                            console.log("Cojo la ficha", tablero[fila][columna]);
                            datos = { ficha: tablero[fila][columna], fila, columna }
                            // hacia la diagonal superior izquierda
                            for (let i = fila - 1, j = columna - 1; i >= 0 && j >= 0; i--, j--) {
                                console.log(i,j)
                                if (tablero[datos.fila + i][datos.columna + j] !== null || tablero[datos.fila + i][datos.columna + j] !== undefined) {
                                    console.log("La ficha", datos.ficha, "puede comer a la ficha", tablero[i][j]);
                                }

                            }
                            // hacia la diagonal superior derecha
                            for (let i = fila - 1, j = columna + 1; i >= 0 && j < 8; i--, j++) {
                                console.log(i,j)
                                if (tablero[datos.fila + i][datos.columna + j] !== null || tablero[datos.fila + i][datos.columna + j] !== undefined) {
                                    console.log("La ficha", datos.ficha, "puede comer a la ficha", tablero[i][j]);
                                }
                            }
                            // hacia la diagonal inferior izquierda
                            for (let i = fila + 1, j = columna - 1; i < 8 && j >= 0; i++, j--) {
                                console.log(i,j)
                                if (tablero[datos.fila + i][datos.columna + j] !== null || tablero[datos.fila + i][datos.columna + j] !== undefined) {
                                    console.log("La ficha", datos.ficha, "puede comer a la ficha", tablero[i][j]);
                                }


                            }
                            
                            // hacia la diagonal inferior derecha
                            for (let i = fila + 1, j = columna + 1; i < 8 && j < 8; i++, j++) {
                                if (tablero[datos.fila + i][datos.columna + j] !== null && tablero[datos.fila + i][datos.columna + j] !== undefined) {
                                    console.log("La ficha", datos.ficha, "puede comer a la ficha", tablero[i][j]);
                                }
                            }
                            break;

                        }

                }
            }
        }
    }
}
console.log(moverFicha(fichas, tablero));
