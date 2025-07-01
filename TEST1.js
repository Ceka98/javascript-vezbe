import { proizvodi } from "./proizvodi.js";
import { ocene } from "./ocene.js";
import { zaposleni } from "./zaposleni.js";

// ZADATAK 1

// function formatiraj(proizvod) {
//   return `${proizvod.title} ($${proizvod.price} x ${proizvod.stock})`;
// }

// // a)

// let proizvodID = proizvodi.filter((proizvod) => {
//   return proizvod.id === 49;
// });
// let izvestajProizvoda49 = proizvodID.map(formatiraj);
// console.log(izvestajProizvoda49);

// b)

// let proizvodiZaTrebovanje = proizvodi.filter((proizvod) => {
//   return proizvod.stock < 10;
// });
// let izvestajTrebovanja = proizvodiZaTrebovanje.map(formatiraj);
// console.log(izvestajTrebovanja);

// c)

// let skupeNamirnice = proizvodi.filter((proizvod) => {
//   return proizvod.category === "groceries" && proizvod.price > 10;
// });

// let izvestaj = skupeNamirnice.map(formatiraj);
// console.log(
//   `${izvestaj} Ukupno ima ${izvestaj.length} namirnica sa cenom preko $10`
// );

// ZADATAK 2

// a)

// for (let i = 0; i < ocene.length; i++) {
//   let email = ocene[i].reviewerEmail.includes("yahoo");
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

// let losiOcenjivaci = ocene.filter((osoba) => {
//   return osoba.rating === 1;
// });
// console.log(losiOcenjivaci);

// let izvestaj = losiOcenjivaci.map(formatirajOcenjivace);
// console.log(izvestaj);
