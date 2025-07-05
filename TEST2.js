import { tezge } from "./tezge.js";
import { prodavci } from "./prodavci.js";

// Zadatak 1

function stampajTezgu(tezga) {
  return `Na tezgi ${tezga.imeTezge}, ${tezga.imeProdavca} prodaje ${tezga.kolicinaProizvoda} proizvoda. Za sada je zaradio/la ${tezga.zarada} dinara.`;
}

function stampajProdavca(prodavac) {
  return `Prodavac ${prodavac.ime} je iz grada ${prodavac.grad}. Njegov/Njen broj telefona je ${prodavac.brojTelefona}`;
}

// console.log(stampajTezgu(tezge[0]));
// console.log(stampajProdavca(prodavci[0]));

// Zadatak 2

// a) Koje je ime prvog prodavca koji ima više od 90 proizvoda?

// for (let i = 0; i < tezge.length; i++) {
//   let prodavac = tezge[i];
//   if (prodavac.kolicinaProizvoda > 90) {
//     console.log(prodavac.imeProdavca);
//     break;
//   }
// }

// b) Koliko ima prodavaca čiji broj telefona počinje sa 061?

// let brojTelefona = prodavci.filter((prodavci) => {
//   if (prodavci.brojTelefona.startsWith("061")) return prodavci;
// });
// console.log(
//   `Ima ${brojTelefona.length} prodavaca ciji broj telefona pocinje sa "061"`
// );

// c) Koji je ukupna zarada svih tezgi koje prodaju u dinarima, a kolika je ukupna zarada u evrima?

// let zaradaUDinarima = tezge.reduce((ukupnaZarada, tezga) => {
//   if (tezga.valuta === "RSD") {
//     return ukupnaZarada + tezga.zarada;
//   }
//   return ukupnaZarada;
// }, 0);
// console.log(`Ukupna zarada u dinarima je ${zaradaUDinarima} dinara.`);

// let zaradaUEvrima = tezge.reduce((ukupnaZarada, tezga) => {
//   if (tezga.valuta === "EUR") {
//     return ukupnaZarada + tezga.zarada;
//   }
//   return ukupnaZarada;
// }, 0);
// console.log(`Ukupna zarada u evrima je ${zaradaUEvrima} evra.`);

// d) Idi od tezge do tezge i pitaj prodavce koliko imaju proizvoda. Kad naiđeš na tezgu sa manje od 10 proizvoda, odštampaj je koristeći funkciju iz prvog zadatka.

// for (let i = 0; i < tezge.length; i++) {
//   let tezga = tezge[i];
//   if (tezga.kolicinaProizvoda < 10) {
//     console.log(stampajTezgu(tezga));
//     break;
//   }
// }

// e)  Transformiši niz tezgi u niz koji sadrži tekstove: [3049 dinara, 3289 eura...]. Obrati pažnju na traženi format tekstova.

// let zarade = tezge.map((tezga) => {
//   if (tezga.valuta === "RSD") {
//     return `${tezga.zarada} dinara`;
//   } else {
//     return `${tezga.zarada} eura`;
//   }
// });
// console.log(zarade);

// ZADATAK 3

// a) Pronađi sve tezge sa jeftinim proizvodima

// let jeftineTezge = tezge.filter((tezga) => {
//   if (tezga.imeTezge.includes("JEFTINO")) return tezga;
// });
// console.log(jeftineTezge);

// b) Svakoj tezgi iz prethodnog koraka dodaj informacije o njenom prodavcu

// 4 ZADATAK

// let StringID = tezge.filter((tezga) => {
//   if (typeof tezga.id === "string") return tezga;
// });
// let numerickiID = tezge
//   .filter((tezga) => {
//     if (typeof tezga.id !== "string") return tezga;
//   })
//   .map((tezga) => {
//     tezga.id = null;
//     return tezga;
//   });

// let parniID = numerickiID.filter((tezga, i) => {
//   i++;
//   if (i % 2 === 0) {
//     return tezga;
//   }
// });
// let neparniID = numerickiID.filter((tezga, i) => {
//   i++;
//   if (i % 2 !== 0) {
//     return tezga;
//   }
// });
// let konacniSkup = [...parniID, ...StringID, neparniID];
// console.log(konacniSkup);
