// PRVI ZADATAK

// const igraci = {
//   "Jayson Tatum": "54.13 million USD",
//   "Giannis Antetokounmpo": "54.13 million USD",
//   "Luka Dončić": "46 million USD",
//   "Kevin Durant": "53.28 million USD",
//   "LeBron James": "52.63 million USD",
//   "Shai Gilgeous-Alexander": "38.33 million USD",
//   "Anthony Edwards": "45.55 million USD",
//   "Joel Embiid": "55.22 million USD",
// };

// let imenaIgraca = Object.keys(igraci);
// let zaradeIgraca = Object.values(igraci);

// for (let i = 0; i < imenaIgraca.length; i++) {
//   let ime = imenaIgraca[i];
//   let zarada = zaradeIgraca[i];
//   console.log(`${ime} ===  ${zarada}`);
// }

// DRUGI ZADATAK

// const statistikaVoca = {
//   jabuka: 4,
//   kruska: 3,
//   narandza: 0,
//   banana: 1,
// };

// a) Na osnovu ovog objekta, napravi niz elemenata koji se zove korpa i koji sadrži svako voće onoliko puta koliki je broj pored tog voća

// let imenaVoca = Object.keys(statistikaVoca);
// let brojVoca = Object.values(statistikaVoca);

// let korpa = [];

// for (let i = 0; i < imenaVoca.length; i++) {
//   let voce = imenaVoca[i];
//   let brojKomadaVoca = brojVoca[i];

//   for (let j = 0; j < brojKomadaVoca; j++) {
//     korpa.push(voce);
//   }
// }
// console.log(korpa);

// b) Na osnovu primera A, napiši funkciju koja može da napravi niz elemenata na osnovu bilo kog objekta.
// const fudbaleri = {
//   ronaldo: 2,
//   messi: 5,
//   neymar: 10,
// };

// const brojevi = {
//   parni: 3,
//   neparni: 6,
//   nula: 1,
// };

// function ispisivanjeKeysNaOnsovuValues(objekat) {
//   let imenaUNizu = Object.keys(objekat);
//   let brojNecega = Object.values(objekat);

//   let konacniNiz = [];

//   for (let i = 0; i < imenaUNizu.length; i++) {
//     let imena = imenaUNizu[i];
//     let broj = brojNecega[i];

//     for (let j = 0; j < broj; j++) {
//       konacniNiz.push(imena);
//     }
//   }
//   return konacniNiz;
// }

// console.log(ispisivanjeKeysNaOnsovuValues(fudbaleri));

// ZADATAK 3
// Transformiši sledeći objekat tako što ćeš proveriti svaku njegovu vrednost.
//  Ako je vrednost objekat, pretvori ga u broj njegovih ključeva. Ako nije objekat, obriši ga.

const firma = {
  id: 120,
  ime: "Yura",
  brojZaposlenih: 1354,
  lokacija: {
    id: 33,
    ime: "Niš",
  },
  brojOtpustenih: 45,
  datumZacetka: new Date(2020, 4, 5),
  vlasnik: {
    ime: "Dragoslav",
    prezime: "Stanisavljević",
    datumRodjenja: new Date(1965, 8, 10),
    datumZaposljenja: new Date(2020, 4, 5),
    plata: 410000,
    valutaPlate: "RSD",
  },
  statistika: {},
};
