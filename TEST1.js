import { proizvodi } from "./proizvodi.js";
import { ocene } from "./ocene.js";
import { zaposleni } from "./zaposleni.js";

// let formatiraniProizvodi = proizvodi.reduce((noviProizvod, pocetniProizvod) => {
//   return [
//     ...noviProizvod,
//     [pocetniProizvod.title, pocetniProizvod.price, pocetniProizvod.stock],
//   ];
// }, []);                   treba da bude funkcija!!!!
// // console.log(formatiraniProizvodi);
// ZADATAK 1

// let nizid = proizvodi.filter((proizvod49) => {
//   return proizvod49.id === 49;
// });
// let stockManjeOdDeset = proizvodi.filter((proizvodistock) => {
//   return proizvodistock.stock < 10;
// });
// let namirnice = proizvodi.filter((namirnica) => {
//   return namirnica.category === "groceries" && namirnica.stock > 10;
// });

// let izvestaj = [...nizid, ...namirnice, ...stockManjeOdDeset];

// let konacniIzvestaj = izvestaj.map(formatirajProizvod);

// function formatirajProizvod(proizvod) {
//   return `${proizvod.title} ($${proizvod.price} x ${proizvod.stock})`;
// }
// console.log(konacniIzvestaj);

// ZADATAK 2

// for (let i = 0; i < ocene.length; i++) {
//   let endswithyahoo = ocene[i].reviewerEmail.includes("yahoo");
//   if (endswithyahoo === true) {
//     console.log(ocene[i].reviewerName);
//     break;
//   }
// }

// for (let i = 0; i < ocene.length; i++) {
//   let stareOcene = ocene[i].date.includes("2024");
//   if (stareOcene === true) console.log(ocene[i].rating);
// }

// let ukupnaZarada = proizvodi.reduce((konacniZbir, proizvod) => {
//   return konacniZbir + proizvod.price;
// }, 0);
// console.log(ukupnaZarada);
// let prosecnaZarada = ukupnaZarada / proizvodi.length;
// console.log(prosecnaZarada);

// for (let i = 0; i < ocene.length; i++) {
//   let NajmanjeOcene = ocene[i].rating === 1;
//   if (NajmanjeOcene === true)
//     console.log(`${ocene[i].reviewerName} (${ocene[i].reviewerEmail})`);
// }

//  ZADATAK 3

// let niz1 = [
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
// let niz2 = niz1.filter((element) => {
//   if (typeof element === "string") {
//     return element;
//   }
// });
// function nasumicniBroj() {
//   return Math.floor(Math.random() * 100);
// }
// let niz3 = niz2.reduce((Objekat, element) => {
//   let vrednost;
//   let x = nasumicniBroj();
//   if (x % 3 === 0) {
//     vrednost = x;
//   } else {
//     vrednost = element.toLocaleLowerCase();
//   }
//   return { ...Objekat, [element]: vrednost };
// }, {});
// console.log(niz3);

// Zadatak 4

let spisakZaposlenih = [
  {
    id: 31,
    firstName: "Allie",
    lastName: "Clarks",
    gender: "female",
    age: 27,
    email: "alliescat@gmail.com",
    role: "user",
  },
  ...zaposleni,
  {
    id: 32,
    firstName: "Johnathan",
    lastName: "Silver",
    gender: "male",
    age: 31,
    email: "silver.johnathon@yahoo.com",
    role: "moderator",
  },
];

let formatSviZaposleni = spisakZaposlenih.sort((elementA, elementB) => {
  if (elementA.age > elementB.age) return 1;
  if (elementA.age < elementB.age) return -1;
});
console.log(formatSviZaposleni);
