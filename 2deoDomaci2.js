// Prvi zadatak
// Odstampaj rezultat oduzimanja sledece dve matrice
// a)
// let matrica = [
//   [1, 2],
//   [3, 1],
// ];
// let matrica1 = [
//   [2, 4],
//   [1, 3],
// ];
// let matricaRazlike = [];

// for (let i = 0; i < matrica.length; i++) {
//   let red = [];
//   for (let j = 0; j < matrica[i].length; j++) {
//     let oduzimanje = matrica[i][j] - matrica1[i][j];
//     red.push(oduzimanje);
//   }
//   matricaRazlike.push(red);
// }1
// console.log(matricaRazlike);

// let matrica3 = [
//   [3, 2],
//   [1, 4],
//   [5, 3],
// ];
// let matrica4 = [
//   [-2, 5],
//   [-8, 12],
//   [0, -18],
// ];

// let matricaRazlika1 = [];

// for (let x = 0; x < matrica3.length; x++) {
//   let red1 = [];
//   for (let y = 0; y < matrica3[x].length; y++) {
//     let oduzimanja1 = matrica3[x][y] - matrica4[x][y];
//     red1.push(oduzimanja1);
//   }
//   matricaRazlika1.push(red1);
// }
// console.log(matricaRazlika1);

//  DRUGI ZADATAK

// const abeceda = Array.from({ length: 26 }, (_, i) =>
//   String.fromCharCode(97 + i)
// );

// let matricaAbecede = [[], []];
// let polovina = abeceda.length / 2;
// for (let i = 0; i < abeceda.length; i++) {
//   if (i < polovina) {
//     matricaAbecede[0].push(abeceda[i]);
//   } else {
//     matricaAbecede[1].push(abeceda[i]);
//   }
// }
// let brojac = 1;
// for (let i = 0; i < matricaAbecede.length; i++) {
//   for (let j = 0; j < matricaAbecede[i].length; j++) {
//     if (brojac % 3 === 0) {
//       matricaAbecede[i][j] = matricaAbecede[i][j].toUpperCase();
//     }
//     brojac++;
//   }
// }
// console.log(matricaAbecede);

// TRECI ZADATAK

// function daLiJeIspravna(matrica) {
//   if (matrica.length === 0) {
//     return true;
//   }
//   let PrviRed = matrica[0].length;
//   for (let i = 0; i < matrica.length; i++) {
//     if (matrica[i].length !== PrviRed) {
//       return false;
//     }
//   }
//   return true;
// }

// const matrica1 = [
//   [1, 2, 3],
//   [0, 0, 1],
// ];

// const matrica2 = [
//   [10, 20],
//   [40, 50, 60],
// ];

// const matrica3 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
//   [7, 8],
//   [9, 8],
// ];

// const matrica4 = [[33, 44, 55], [66, 77, 88], []];
// const matrica5 = [[],[]];
// console.log(daLiJeIspravna(matrica5));

// CETVRTI ZADATAK
// Napiši funkciju koja računa zbir svih elemenata glavne dijagonale matrice.

// let matrica1 = [
//   [8, 9, 5, 2],
//   [4, 1, 0, 6],
//   [6, 5, 7, 2],
//   [0, 8, 9, 9],
// ];
// let matrica2 = [
//   [4, 2, 0, 10],
//   [18, 12, 0, 5],
//   [1, 6, 9, 33],
//   [8, 10, 6, 25],
// ];
// let matrica3 = [];
// let matrica4 = [
//   [6, 12, 15, 8],
//   [4, 25, 99, 0],
// ];

// function zbirDijagonale(matrica) {
//   for (let i = 0; i < matrica.length; i++) {
//     for (let j = 0; j < matrica[i].length; j++) {
//       if (matrica.length !== matrica[i].length) {
//         return false;
//       }
//     }
//   }
//   let dijagonala = 0;
//   for (let i = 0; i < matrica.length; i++) {
//     dijagonala = matrica[i][i] + matrica[i][i];
//   }
//   return dijagonala;
// }
// console.log(zbirDijagonale(matrica4));

// PETI ZADATAK
// Napravi 3x3 matricu i napuni je nasumičnim brojevima od 1 do 100.
// Odštampaj prvo celu matricu, a zatim i zbir svih njenih elemenata.
// function nasumicniBroj() {
//   return Math.floor(Math.random() * 100);
// }
// let matrica5 = [];
// let brojRedova = 3;
// let brojKolona = 3;

// for (let i = 0; i < brojRedova; i++) {
//   let noviRed = [];
//   for (let j = 0; j < brojKolona; j++) {
//     let broj = nasumicniBroj();
//     noviRed.push(broj);
//   }
//   matrica5.push(noviRed);
// }
// console.log(matrica5);

// let zbir = 0;

// for (let i = 0; i < matrica5.length; i++) {
//   for (let j = 0; j < matrica5[i].length; j++) {
//     zbir = zbir + matrica5[i][j];
//   }
// }
// console.log(zbir);

// SESTI ZADATAK
// Napiši funkciju koja radi transpoziciju matrice.
// Transpozicija matrica je operacija gde redovi matrice postaju kolone, a kolone redovi

// DOPUNA DOMACEG

// PRVI ZADATAK
// const recenica1 = "Ja sam Dusan";
// const recenica2 = "my favorite actor is Pedro PASCAL";

// function pretvoriULink(recenica) {
//   let niz2 = recenica.split(" ");
//   let niz3 = niz2.join("-");
//   let link = "https://www.google.com?q=";
//   let niz = [link, niz3];
//   let konacniLink;
//   konacniLink = niz.join("");
//   return konacniLink;
// }

// console.log(pretvoriULink(recenica2));

// DRUGI ZADATAK

const razno = [10, -5, "a", -7, 25, "-d", "bojler", 0, "šolja"];

// a)

// for (let i = 0; i < razno.length; i++) {
//   if (typeof razno[i] === "string") {
//     console.log(razno[i]);
//     break;
//   }
// }

// b)
// let noviNiz = razno.slice(2, 5 + 1);
// console.log(noviNiz);

// c)
// let jedanString = razno.join("");
// console.log(jedanString);
// let stringovi = jedanString.split("-");
// console.log(stringovi);

// for (let i = 0; i < stringovi.length; i++) {
//   if (stringovi[i] > 50) {
//     console.log(stringovi[i]);
//     break;
//   }
// }

//  TRECI ZADATAK

// const recenica = "Ja hoću život. Bolji život. Da ga zgrabim. Poput tigra";

// let niz = recenica.split(".");
// // console.log(niz);
// let prviNizSaRecZivot = niz.find((rec) => {
//   return rec.includes("život");
// });
// // console.log(prviNizSaRecZivot);
// let brojKaraktera = recenica.split("");
// // console.log(brojKaraktera);

// let brojSlova = brojKaraktera.filter((element) => {
//   if (element !== " " && element !== ".") return element;
// });
// console.log(brojSlova.length);

// function nasumicniBroj() {
//   return Math.floor(Math.random() * 42);
// }

// let x = nasumicniBroj();
// let y = nasumicniBroj();
// // console.log(x, y);
// let novaNasumicnaRec = recenica.slice(x, y);
// // console.log(novaNasumicnaRec);

// let uklonjeneTacke = recenica.split(".");
// let ubaceniZarezi = uklonjeneTacke.join(",");
// console.log(ubaceniZarezi);

// CETVRTI ZADATAK

// const fajlovi = [
//   "/Documents/Images/154567168717.jpg",
//   "/src/api/route.ts",
//   "C:/Filmovi/Kad utihnu jaganjci.mp4",
// ];

// function getFileName(file) {
//  file.split('/')

// }
// console.log(getFileName(fajlovi));
