"use strict";

let tablero = [];
let dimension = 8;
for (let a1 = 0; a1 < 8; a1++) {
  tablero[a1] = [];
  for (let a2 = 0; a2 < 8; a2++) {
    tablero[a1][a2] = null;
  }
}
/**
 *
 * @param {array} tablero
 */
function impresora(tablero) {
  for (let i = 0; i < dimension; i++) {
    let fila = "";
    for (let y = 0; y < dimension; y++) {
      if (tablero[i][y] == null) {
        fila += "[ ]";
      }
      if (tablero[i][y] == "K") {
        fila += "[K]";
      }
      if (tablero[i][y] == "Q") {
        fila += "[Q]";
      }
      if (tablero[i][y] == "T") {
        fila += "[T]";
      }
      if (tablero[i][y] == "A") {
        fila += "[A]";
      }
      if (tablero[i][y] == "C") {
        fila += "[C]";
      }
      if (tablero[i][y] == "P") {
        fila += "[P]";
      }
    }
    console.log(fila);
  }
}

let fichas = ["P", "A", "Q", "T", "K", "C"];
function colocoFicha(tablero, fichas) {
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
}
colocoFicha(tablero, fichas);

let datos = {};
for (let fila = 0; fila < dimension; fila++) {
  for (let columna = 0; columna < dimension; columna++) {
    // ==================================================================
    // if para el rey
    if (tablero[fila][columna] == "K") {
      console.log("El rey se puede comer a:");
     
      lineaRecta(fila,columna,1);
      diagonal(fila,columna, 1);
    }
    // ================================================================== 
    // if para la reina 
    if (tablero[fila][columna] == "Q") {
      console.log("La reina se puede comer a:");
      lineaRecta(fila, columna, 8);
      diagonal(fila, columna, dimension);
    }
    // ==================================================================
    // if para la torre
    if (tablero[fila][columna] == "T") {
      console.log("La torre se puede comer a:");
      lineaRecta(fila, columna, dimension);
    }
    // ==================================================================
    // if para el alfil
    if (tablero[fila][columna] == "A") {
      console.log("El alfil se puede comer a:");
      diagonal(fila, columna, dimension);
    }
    // ==================================================================
    // if para el caballo
    if (tablero[fila][columna] == "C") {
      console.log("El caballo se puede comer a:");
      paraCaballo(fila, columna);
    }
    // ==================================================================
     // if para el peon
    if (tablero[fila][columna] == "P") {
      console.log("Cojo la ficha", tablero[fila][columna]);
      datos = { ficha: tablero[fila][columna], fila, columna };
      if (datos.fila > 0) {
        datos.fila--;
        if (tablero[datos.fila][datos.columna] === undefined) {
          console.log(datos.ficha, "No puede moverse");
        } else {
          if (tablero[datos.fila][datos.columna] == null) {
            console.log(datos.ficha, "se mueve hacia arriba");
            if (
              tablero[datos.fila][datos.columna + 1] !== null &&
              tablero[datos.fila][datos.columna + 1] !== undefined
            ) {
              console.log(
                "La ficha",
                datos.ficha,
                "puede comer a la ficha",
                tablero[datos.fila][datos.columna + 1]
              );
            } else if (
              tablero[datos.fila][datos.columna - 1] !== null &&
              tablero[datos.fila][datos.columna - 1] !== undefined
            ) {
              console.log(
                "La ficha",
                datos.ficha,
                "puede comer a la ficha",
                tablero[datos.fila][datos.columna - 1]
              );
            } else {
              console.log("Pero no puede comer a ninguna ficha");
            }
          } else {
            console.log(
              "La ficha",
              datos.ficha,
              "no se puede mover hacia arriba"
            );
          }
        }
      }
    }
  }
}



function lineaRecta(y, x, limite) {
  let derecha = 1;
  let puedeDer = true;
  let izquierda = -1;
  let puedeIzq = true;
  let abajo = 1;
  let puedeAbajo = true;
  let arriba = -1;
  let puedeArriba = true;
  while (derecha < limite + 1) {
    if (x + abajo < tablero.length && tablero[y][x + derecha] !== null && puedeDer == true) {
      console.log(tablero[y][x + derecha]);
      puedeDer = false;
    }
    if (x + izquierda >= 0 && tablero[y][x + izquierda] !== null && puedeIzq == true) {
      
    console.log(tablero[y][x + izquierda]);
      puedeIzq = false;
    }
    if (y + abajo < tablero.length && tablero[y + abajo][x] !== null && puedeAbajo == true) {
     console.log(tablero[y + abajo][x]);
      puedeAbajo = false;
    }
    if (y + arriba >= 0 && tablero[y + arriba][x] !== null && puedeArriba == true) {
      
      console.log(tablero[y + arriba][x]);
      puedeArriba = false;
    }
    derecha++;
    izquierda--;
    abajo++;
    arriba--;
  }
}
function diagonal(y, x, limite) {
  let derecha = 1;
  let puedeDer = true;
  let izquierda = -1;
  let puedeIzq = true;
  let abajo = 1;
  let puedeAbajo = true;
  let arriba = -1;
  let puedeArriba = true;
  while (derecha < limite + 1) {
    if (
      x + derecha < tablero.length &&
      y + abajo < tablero.length &&
      tablero[y + abajo][x + derecha] !== null &&
      puedeDer == true
    ) {
      console.log(tablero[y + abajo][x + derecha]);
      puedeDer = false;
    }
    if (
      x + izquierda >= 0 &&
      y + arriba >= 0 &&
      tablero[y + arriba][x + izquierda] !== null &&
      puedeIzq == true
    ) {
      console.log(tablero[y + arriba][x + izquierda]);
      puedeIzq = false;
    }
    if (
      y + abajo < tablero.length &&
      x + izquierda >= 0 &&
      tablero[y + abajo][x + izquierda] !== null &&
      puedeAbajo == true
    ) {
      console.log(tablero[y + abajo][x + izquierda]);
      puedeAbajo = false;
    }
    if (
      y + arriba >= 0 &&
      x + derecha < tablero.length &&
      tablero[y + arriba][x + derecha] !== null &&
      puedeArriba == true
    ) {
      console.log(tablero[y + arriba][x + derecha]);
      puedeArriba = false;
    }
    derecha++;
    izquierda--;
    abajo++;
    arriba--;
  }
}
function paraCaballo(y, x) {
  if (
    x + 2 < tablero.length &&
    y + 1 < tablero.length &&
    tablero[y + 1][x + 2] !== null
  ) {
    console.log(tablero[y + 1][x + 2]);
  }
  if (
    x + 1 < tablero.length &&
    y + 2 < tablero.length &&
    tablero[y + 2][x + 1] !== null
  ) {
    console.log(tablero[y + 2][x + 1]);
  }

  if (x - 2 >= 0 && y + 1 < tablero.length && tablero[y + 1][x - 2] !== null) {
    console.log(tablero[y + 1][x - 2]);
  }
  if (x - 1 >= 0 && y + 2 < tablero.length && tablero[y + 2][x - 1] !== null) {
    console.log(tablero[y + 2][x - 1]);
  }

  if (x + 2 < tablero.length && y - 1 >= 0 && tablero[y - 1][x + 2] !== null) {
    console.log(tablero[y - 1][x + 2]);
  }
  if (x + 1 < tablero.length && y - 2 >= 0 && tablero[y - 2][x + 1] !== null) {
    console.log(tablero[y - 2][x + 1]);
  }

  if (x - 2 >= 0 && y - 1 >= 0 && tablero[y - 1][x - 2] !== null) {
    console.log(tablero[y - 1][x - 2]);
  }
  if (x - 1 >= 0 && y - 2 >= 0 && tablero[y - 2][x - 1] !== null) {
    console.log(tablero[y - 2][x - 1]);
  }
}

