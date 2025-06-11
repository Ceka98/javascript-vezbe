// import { products } from "./products.js";
// //  Zadatak 1
// const imena = ["dule", "erik", "saša", "maša", "aleks"];
// const sifra = imena.reduce((PocetniNiz, PocetnoSlovo) => {
//   return PocetniNiz + PocetnoSlovo[0].toUpperCase();
// }, []); // "DESMA"
// console.log(sifra);

// Zadatak 2

// const brojevi = [4, -5, 10, 23, 2, -9];
// const ZbirKvadrata = brojevi
//   .map((trenutniBroj) => {
//     return trenutniBroj * trenutniBroj;
//   })
//   .reduce((pocetniBroj, trenutniBroj) => {
//     return pocetniBroj + trenutniBroj;
//   }, 0);
// console.log(ZbirKvadrata);
//  ILI
// const brojevi = [4, -5, 10, 23, 2, -9];
// const ZbirKvadrata = brojevi.reduce((pocetniBroj, trenutniBroj) => {
//   return trenutniBroj * trenutniBroj + pocetniBroj;
// }, 0);
// console.log(ZbirKvadrata);

// Zadatak 3

// const newProducts = products
//   .sort((element1, element2) => {
//     if (element1.price > element2.price) return 1;
//     if (element1.price < element2.price) return -1;
//     return 0;
//   })
//   .map((element) => {
//     return element.title + " " + element.price;
//   });

// console.log(newProducts);

// Zadatak 4

// const niz = ["Stefan", "Milena", "Jovica", "Anastasija", "Darko", "Jovana"];
// const niz1 = niz.sort((ime1, ime2) => {
//   if (ime1.endsWith("a") > ime2.endsWith("a")) return -1;
//   if (ime1.endsWith("a") < ime2.endsWith("a")) return 1;  .... prvi pokusaj
//   return 0;
// });
// console.log(niz1);

// const niz1 = niz
//   .filter((ime) => {
//     return ime.endsWith("a");
//   })
//   .sort((ime1, ime2) => {
//     if (ime1 > ime2) return -1;
//     if (ime1 < ime2) return 1;
//     return 0;
//   });
// console.log(niz1);
