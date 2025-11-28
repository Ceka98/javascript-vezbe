import { vozaci } from "./vozaci.js";

// // Prvi zadatak 01. Tipovi podataka
// // Transformiši niz vozača tako da ključevi objekata ostanu isti, a vrednosti postanu tipovi podataka (string, number, object…).

let izmenjeneVrednsotiObjekta = [];

for (let i = 0; i < vozaci.length; i++) {
  let vozac = vozaci[i];
  let noviObjekat = {};
  let kljucevi = Object.keys(vozac);

  for (let j = 0; j < kljucevi.length; j++) {
    let kljuc = kljucevi[j];
    noviObjekat[kljuc] = typeof vozac[kljuc];
  }
  izmenjeneVrednsotiObjekta.push(noviObjekat);
}
console.log(izmenjeneVrednsotiObjekta);

// 02. Najčešći tip
// Za svaki od objekata, nađi onaj tip podatka koji se najčešće ponavlja.

// const niz = [1, 0, 9, -3, 10, 5];
// let niz2 = niz.sort((A, B) => {
//   if (A < B) return 1;
//   if (A > B) return -1;
//   return 0;
// });
// console.log(niz2[0]);

// let brojPrijatelja = vozaci.sort((A, B) => {
//   if (A.brojPrijatelja < B.brojPrijatelja) return 1;
//   if (A.brojPrijatelja > B.brojPrijatelja) return -1;
//   return 0;
// });
// console.log(brojPrijatelja);

// const niz = [1, 0, 9, -3, 10, 5];
// const najveciBroj = Math.min(...niz);
// console.log(najveciBroj);

// const niz = ["dule", "stefan", "anastasija", "ana"];
// let najduzeIme = niz[0];
// for (let i = 1; i < niz.length; i++) {
//   if (niz[i].length > najduzeIme.length) {
//     najduzeIme = niz[i];
//   }
// }
// console.log(najduzeIme);

// // 03. Automobili
// // Uzmi sve nazive automobila, izdvoji sve sem prvog i poslednjeg, a zatim ih spoji u jedan string tako da budu odvojeni tačkom-zarez.

// let automobil = vozaci
//   .filter((objekat) => {
//     if (objekat.automobil !== undefined) {
//       return objekat.automobil;
//     }
//   })
//   .map((objekat) => {
//     return objekat.automobil;
//   });

// let automobiliUsredini = automobil.slice(1, 4);
// let stringAutomobila = automobiliUsredini.join(";");
// console.log(stringAutomobila);

// // 04. Nasumične brojke
// // Napiši funkciju koja generiše dva nasumična broja X i Y koja su između 4 i 10.

// function brojOd4do10() {
//   let x = Math.floor(Math.random() * 7) + 4;
//   let y = Math.floor(Math.random() * 7) + 4;

//   return [x, y];
// }

// // console.log(nasumicniBroj());

// // 05. Matrica
// // Napravi matricu nasumičnih dimenzija X i Y, koristeći funkciju iz prethodnog zadatka.

// // let [red, kolona] = brojOd4do10();
// const red = 10;
// const kolona = 10;
// // console.log(red, kolona);
// let matrica = [];
// for (let i = 0; i <= red; i++) {
//   let noviRed = [];
//   for (let j = 0; j <= kolona; j++) {
//     let nasumicniBroj = Math.floor(Math.random() * 10);
//     noviRed.push(nasumicniBroj);
//   }
//   matrica.push(noviRed);
// }
// // console.log(matrica);

// // 06. Gradovi vozača
// // Izdvoji prva slova svih gradova u kojima žive vozači.
// // Zatim, koristeći funkciju iz četvrtog zadatka i matricu iz petog, generiši nasumičnu poziciju u matrici
// // (X i Y) i popuni je prvim slovom grada. Ponovi ovaj postupak za sve gradove, tj. njihova prva slova.

// let pocetnaSlovaGradova = vozaci.map((objekat) => {
//   return objekat.mestoRodjenja.grad[0];
// });
// // console.log(pocetnaSlovaGradova);

// for (let i = 0; i < pocetnaSlovaGradova.length; i++) {
//   let slovo = pocetnaSlovaGradova[i];
//   let [red, kolona] = brojOd4do10();
//   matrica[red][kolona] = slovo;
// }
// const matricaTekst = JSON.stringify(matrica, null, 0);
// // console.log(matricaTekst);

// Zadatak 2 popravni
let nizNizovaTipova = [];

for (let i = 0; i < izmenjeneVrednsotiObjekta.length; i++) {
  let vozac = izmenjeneVrednsotiObjekta[i];
  nizNizovaTipova.push(Object.values(vozac));
}
console.log(nizNizovaTipova);

let nizTipova = nizNizovaTipova.reduce((konacniNiz, niz) => {
  return [...konacniNiz, ...niz];
}, []);

console.log(nizTipova);
let brojacBroja = 0;
let brojacString = 0;
let brojacObjekat = 0;
let brojacundefined = 0;
for (let i = 0; i < nizTipova.length; i++) {
  let tip = nizTipova[i];
  if (tip === "number") {
    brojacBroja++;
  }
  if (tip === "string") {
    brojacString++;
  }
  if (tip === "object") {
    brojacObjekat++;
  }
  if (tip === "undefined") {
    brojacundefined++;
  }
}
let nizBrojaca = [
  `Tip podatka broj ima :${brojacBroja}`,
  `Tip podatka Objekat ima :${brojacObjekat}`,
  `Tip podatka String ima :${brojacString}`,
  `Tip podatka Undefined ima :${brojacundefined}`,
];

console.log(nizBrojaca);
console.log(`U nizu "nizTipova" najvise se ponavlja tip "String"`);
