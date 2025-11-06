// Pretvori podatke u niz nizova, a zatim uzmi redove 5-7 i vrati ih nazad u CSV format.

import { statistics } from "./podaci.js";

let niz1 = statistics.split("\n");
let niz2 = niz1.map((red) => {
  return red.split(",");
});
// console.log(niz2);

let petiRed = niz2[4];
let sedmiRed = niz2[6];

let CSVpetiRed = petiRed.join(",");
let CSVsedmiRed = sedmiRed.join(",");

let rezultat = CSVpetiRed + "\n" + CSVsedmiRed;
// console.log(rezultat);

// Pretvori niz iz prethodnog zadatka u niz objekata.
// Svaki objekat će imati ključeve (Country, City, Resident satisfaction…) i vrednosti (Germany, Berlin, 0.83…).

let kljucevi = niz2[0];
let nizObjekata = [];
for (let i = 1; i < niz2.length; i++) {
  let objekat = {};
  for (let j = 0; j < niz2[i].length; j++) {
    {
      objekat[kljucevi[j]] = niz2[i][j];
    }
  }
  nizObjekata.push(objekat);
}
// console.log(nizObjekata);

// Uzevši niz iz 2. zadatka, izdvoji gradove čije ime počinje na B.
// Zatim, sortiraj ih po vrednosti resident satisfaction u opadajućem redosledu.

let gradoviNaSlovoB = nizObjekata.filter((objekat) => {
  if (objekat.City.startsWith("B")) {
    return objekat;
  }
});
// console.log(gradoviNaSlovoB);

let gradoviNaSlovoBpoOpadajucojVrednosti = gradoviNaSlovoB.sort(
  (objekatA, objekatB) => {
    if (objekatA.Resident_satisfaction > objekatB.Resident_satisfaction)
      return -1;
    if (objekatA.Resident_satisfaction < objekatB.Resident_satisfaction)
      return 1;
  }
);

// console.log(gradoviNaSlovoBpoOpadajucojVrednosti);

// Uzevši niz iz 2. zadatka, pronađi prvi grad čija je prosečna zarada stanovništva manja
// od 40 000.

let gradSaMalomProsecnomZaradom = nizObjekata.find((objekat) => {
  return objekat.Average_salary < 40000;
});

// console.log(gradSaMalomProsecnomZaradom);

// Transformiši niz nizova podataka iz prvog zadatka u matricu. Svako polje matrice treba da predstavlja broj slova te reči (ili broja).
let matrica = [];
for (let i = 0; i < niz2.length; i++) {
  let noviRed = [];
  for (let j = 0; j < niz2[i].length; j++) {
    noviRed.push(niz2[i][j].length);
  }
  matrica.push(noviRed);
}
// console.log(matrica);

// Ukupan broj slova
// Saberi sve brojeve matrice iz prethodnog zadatka. Prikaži rezultat u konzoli.

let ukupanBroj = 0;
for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    ukupanBroj = ukupanBroj + matrica[i][j];
  }
}
// console.log(ukupanBroj);
