import { vozaci } from "./vozaci.js";

// Prvi zadatak 01. Tipovi podataka
// Transformiši niz vozača tako da ključevi objekata ostanu isti, a vrednosti postanu tipovi podataka (string, number, object…).

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
// console.log(izmenjeneVrednsotiObjekta);

// 02. Najčešći tip
// Nađi onaj objekat čiji se tip podatka najčešće ponavlja

// 03. Automobili
// Uzmi sve nazive automobila, izdvoji sve sem prvog i poslednjeg, a zatim ih spoji u jedan string tako da budu odvojeni tačkom-zarez.

let automobil = vozaci
  .filter((objekat) => {
    if (objekat.automobil !== undefined) {
      return objekat.automobil;
    }
  })
  .map((objekat) => {
    return objekat.automobil;
  });

let automobiliUsredini = automobil.slice(1, 4);
let stringAutomobila = automobiliUsredini.join(";");
// console.log(stringAutomobila);

// 04. Nasumične brojke
// Napiši funkciju koja generiše dva nasumična broja X i Y koja su između 4 i 10.

function brojOd4do10(x, y) {
  x = Math.floor(Math.random() * 7) + 4;
  y = Math.floor(Math.random() * 7) + 4;

  return [x, y];
}

// console.log(nasumicniBroj());

// 05. Matrica
// Napravi matricu nasumičnih dimenzija X i Y, koristeći funkciju iz prethodnog zadatka.

let [red, kolona] = brojOd4do10();
// console.log(red, kolona);
let matrica = [];
for (let i = 0; i < red; i++) {
  let noviRed = [];
  for (let j = 0; j < kolona; j++) {
    let nasumicniBroj = Math.floor(Math.random() * 10);
    noviRed.push(nasumicniBroj);
  }
  matrica.push(noviRed);
}
console.log(matrica);

// 06. Gradovi vozača
// Izdvoji prva slova svih gradova u kojima žive vozači.
// Zatim, koristeći funkciju iz četvrtog zadatka i matricu iz petog, generiši nasumičnu poziciju u matrici (X i Y) i popuni je prvim slovom grada. Ponovi ovaj postupak za sve gradove, tj. njihova prva slova.

let mestoRodjenja = vozaci.map((objekat) => {
  return objekat.mestoRodjenja.grad[0];
});
console.log(mestoRodjenja);
