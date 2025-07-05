import { proizvodi } from "./proizvodi.js";
import { ocene } from "./ocene.js";
import { zaposleni } from "./zaposleni.js";

// ZADATAK 1

function formatiraj(proizvod) {
  return `${proizvod.title} ($${proizvod.price} x ${proizvod.stock})`;
}

// // a)

// let proizvodID = proizvodi.find((proizvod) => {
//   return proizvod.id === 49;
// });
// console.log(proizvodID);

// b)

// let proizvodiZaTrebovanje = proizvodi
//   .filter((proizvod) => {
//     return proizvod.stock < 10;
//   })
//   .map(formatiraj);
// console.log(proizvodiZaTrebovanje);

// c)

// let skupeNamirnice = proizvodi
//   .filter((proizvod) => {
//     return proizvod.category === "groceries" && proizvod.price > 10;
//   })
//   .map(formatiraj);
// console.log(
//   `${skupeNamirnice} Ukupno ima ${skupeNamirnice.length} namirnica sa cenom preko $10`
// );

// ZADATAK 2

// a)

// for (let i = 0; i < ocene.length; i++) {
//   let email = ocene[i].reviewerEmail.endsWith("yahoo.com");
//   if (email === true) {
//     console.log(ocene[i].reviewerName);
//     break;
//   }
// }

// b)

// let ProslogodisnjeOcene = ocene.filter((osobe) => {
//   return osobe.date.startsWith("2024");
// });
// console.log(ProslogodisnjeOcene);

// c)

// let vrednostProizvoda = proizvodi.reduce((pocetniBroj, proizvod) => {
//   return pocetniBroj + proizvod.price * proizvod.stock;
// }, 0);
// console.log(vrednostProizvoda);

// d)

// let prosecnaCenaProizvoda = proizvodi.reduce((pocetniBroj, proizvod) => {
//   return pocetniBroj + proizvod.price / proizvodi.length;
// }, 0);
// console.log(prosecnaCenaProizvoda);

// e)

// function formatirajOcenjivace(osoba) {
//   return `${osoba.reviewerName} (${osoba.reviewerEmail})`;
// }

// let losiOcenjivaci = ocene
//   .filter((osoba) => {
//     return osoba.rating === 1;
//   })
//   .map(formatirajOcenjivace);
// console.log(losiOcenjivaci);

// Zadatak 3

// let spisakProizvoda = [
//   "APPLE",
//   150,
//   "PERFUME",
//   "BREAD",
//   -17.99,
//   "EGG",
//   "JUICE",
//   0,
//   "ICE CREAM",
// ];

// function nasumicniBroj() {
//   return Math.floor(Math.random() * 100);
// }
// let sredjeniProzivodi = spisakProizvoda.filter((proizvd) => {
//   if (typeof proizvd === "string") {
//     return proizvd;
//   }
// });
// let konacniSpisak = sredjeniProzivodi.reduce((objekat, proizvod) => {
//   let vrednost;
//   let x = nasumicniBroj();
//   if (x % 3 === 0) {
//     vrednost = x;
//   } else {
//     vrednost = proizvod.toLowerCase();
//   }
//   return { ...objekat, [proizvod]: vrednost };
// }, {});
// console.log(konacniSpisak);

//  Zadatak 4

// let noviClanovi = zaposleni
//   .reduce((noviNiz, radnik) => {
//     return [
//       ...noviNiz,
//       {
//         id: 31,
//         firstName: "Allie",
//         lastName: "Clarks",
//         gender: "female",
//         age: 27,
//         email: "alliescat@gmail.com",
//         role: "user",
//       },
//       radnik,
//       {
//         id: 32,
//         firstName: "Johnathan",
//         lastName: "Silver",
//         gender: "male",
//         age: 31,
//         email: "silver.johnathon@yahoo.com",
//         role: "moderator",
//       },
//     ];
//   }, [])
//   .sort((osobaA, osobaB) => {
//     if (osobaA.age > osobaB.age) return 1;
//     if (osobaA.age < osobaB.age) return -1;
//   });
// console.log(noviClanovi.length);
