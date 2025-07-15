import { stanovi } from "./stanovi.js";

// PRVI ZADATAK
// a) Koliko ima porodica koje su se uselile 2019. godine?

// let useljeni2019 = stanovi.filter((porodica) => {
//   return porodica.datumUseljenja.startsWith("2019");
// });
// console.log(useljeni2019.length, "porodice su se uselile 2019 godine");

// b) Koja porodica živi u stanu broj 16?

// let stanBroj16 = stanovi
//   .filter((stan) => {
//     return stan.brojStana === 16;
//   })
//   .map((stan) => {
//     return `U stanu 16 zivi ${stan.imePorodice}`;
//   });
// console.log(stanBroj16);

// c) Koji je najveći broj članova porodice u svim stanovima?

// let brojClanova = stanovi.sort((porodicaA, porodicaB) => {
//   if (porodicaA.brojClanova > porodicaB.brojClanova) return -1;
//   if (porodicaA.brojClanova < porodicaB.brojClanova) return 1;
// });
// console.log(
//   `Najci broj clanova porodice i svim stanovima je ${brojClanova[0].brojClanova}`
// );

// d)  Odštampaj sve stanove sa 50 ili više kvadratne površine u sledećem formatu: Milenkovići (50m²)
// Porodica Milentijević (60m²)
// .
// .
// .

// function formatiranje(stan) {
//   return `${stan.imePorodice}, ${stan.kvadraturaStana} m2`;
// }
// let velikiStanovi = stanovi
//   .filter((stanovi) => {
//     if (stanovi.kvadraturaStana >= 50) return stanovi;
//   })
//   .map(formatiranje);
// console.log(velikiStanovi);

//  DRUGI ZADATAK
// a) stanovi sa šifrom koja je parni broj
//    stanovi sa šifrom koja je neparni broj
//    stanovi sa šifrom koja je neka reč

// let parneSifreStana = stanovi.filter((stan) => {
//   if (stan.sifraNaVratima % 2 === 0) return true;
// });
// let neparneSifreStana = stanovi.filter((stan) => {
//   if (stan.sifraNaVratima % 2 !== 0 && typeof stan.sifraNaVratima !== "string")
//     return true;
// });
// let stringStanovi = stanovi.filter((stan) => {
//   if (typeof stan.sifraNaVratima === "string") return true;
// });

//  b)Sastavi novi spisak stanova tako što ćeš ove grupe naređati u sledećem redosledu:
// novi komšija Milan
// stanovi sa šifrom koja je neparni broj
// stanovi sa šifrom koja je parni broj
// stanovi sa šifrom koja je neka reč
// function nasumicniBroj() {
//   return Math.floor(Math.random() * 100);
// }
// let danasnjiDatum = new Date();
// let noviKomsija = {
//   brojStana: 44,
//   imePorodice: "Milan Đorić",
//   brojClanova: 3,
//   sifraNaVratima: nasumicniBroj(),
//   datumUseljenja: danasnjiDatum,
//   kvadraturaStana: 50,
// };
// let NoviRasporedStanara = [
//   noviKomsija,
//   ...neparneSifreStana,
//   ...parneSifreStana,
//   ...stringStanovi,
// ];
// console.log(NoviRasporedStanara);

// TRECI ZADATAK
// a)
// let kvadraturaStana = stanovi.reduce(
//   (Objekat, stan) => {
//     return {
//       ...Objekat,
//       [stan.brojStana]: stan.kvadraturaStana,
//       ukupno: Objekat.ukupno + stan.kvadraturaStana,
//     };
//   },
//   { ukupno: 0 }
// );
// console.log(kvadraturaStana);

// console.log(kvadraturaStana);
// let ukupnaKvadratura = stanovi.reduce((UkupnaKvadratura, stan) => {
//   return UkupnaKvadratura + stan.kvadraturaStana;
// }, 0);
// console.log(ukupnaKvadratura);

// kvadraturaStana.ukupno = ukupnaKvadratura;
// console.log(kvadraturaStana);

// CETRVRTI ZADATAK

// let krajSifreT = stanovi.filter((stan) => {
//   if (
//     typeof stan.sifraNaVratima === "string" &&
//     stan.sifraNaVratima.endsWith("t")
//   )
//     return stan;
// });
// console.log(krajSifreT);

// let StanZaUseljenje = krajSifreT.reduce(
//   (PrazanStan, stan) => {
//     return {
//       brojStana: PrazanStan.brojStana + stan.brojStana,
//       imePorodice: PrazanStan.imePorodice + stan.imePorodice,
//       brojClanova: PrazanStan.brojClanova + stan.brojClanova,
//       sifraNaVratima: PrazanStan.sifraNaVratima + stan.sifraNaVratima,
//       datumUseljenja: new Date(),
//       kvadraturaStana: PrazanStan.kvadraturaStana + stan.kvadraturaStana,
//     };
//   },
//   {
//     brojStana: 0,
//     imePorodice: "",
//     brojClanova: 0,
//     sifraNaVratima: "",
//     kvadraturaStana: 0,
//   }
// );
// console.log(StanZaUseljenje);
