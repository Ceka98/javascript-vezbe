// PRVI ZADATAK
// Odštampaj u konzoli sledeće delove matrice:
// a) broj 406
// b) broj četvrte kolone drugog reda
// c) brojeve 52, 33, 19, 52
// d) brojeve 41, 6, 27, 52
// e) sve brojeve čiji je broj kolone i broj reda veći od 2

// const matrica = [
//   [16, 36, 7, 52, 101, 88],
//   [0, 406, 77, 33, 51, 16],
//   [73, 18, 85, 19, 58, 88],
//   [41, 6, 27, 52, 204, 19],
// ];
// a)
// console.log(matrica[1][1]);
// b)
// console.log(matrica[1][3]);
// c)
// for (let i = 0; i < 4; i++) {
//   console.log(matrica[i][3]);
// }
// d)
// for (let i = 0; i < 4; i++) {
//   console.log(matrica[3][i]);
// }
// e)

// for (let i = 0; i < matrica.length; i++) {
//   if (i > 2) console.log(matrica[i]);
//   let brojReda = matrica[i];
//   for (let j = 0; j < brojReda.length; j++) {
//     if (j > 2) {
//       console.log(brojReda[j]);
//     }
//   }
// }

// DRUGI ZADATAK
// Izmeni sledeću matricu tako što ćeš svaki broj čija su kolona i red parni brojevi,
//  zameniti novim nasumičnim brojem (od 1 do 100). Odštampaj izmenjenu matricu.

// const matrica = [
//   [33, 44, 55, 66, 77, 88],
//   [11, 22, 33, 44, 55, 66],
//   [77, 88, 99, 88, 77, 66],
//   [55, 44, 33, 22, 11, 77],
// ];

// function nasumicniBroj() {
//   return Math.floor(Math.random() * 100);
// }

// for (let i = 0; i < matrica.length; i++) {
//   for (let j = 0; j < matrica[i].length; j++) {
//     if (i % 2 === 0 && j % 2 === 0) {
//       matrica[i][j] = nasumicniBroj();
//     }
//   }
// }
// console.log(matrica);

// TRECI ZADATAK
// Generiši dva nasumična broja X i Y izmedju 1 i 10.
// Napravi novu matricu koja ima X redova i Y kolona.
// Svaki broj u ovoj matrici treba biti jednak proizvodu reda i kolone u kojoj se nalazi.
// Odštampaj rezultujuću matricu.

// function nasumicniBrojevi() {
//   return Math.floor(Math.random() * 10);
// }
// let x = nasumicniBrojevi();
// let y = nasumicniBrojevi();
// console.log(x, y);

// let matrica = [];

// for (let i = 0; i < x; i++) {
//   let noviRed = [];

//   for (let j = 0; j < y; j++) {
//     let broj = i * j;
//     noviRed.push(broj);
//   }
//   matrica.push(noviRed);
// }
// console.log(matrica);
