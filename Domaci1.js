// // ZADATAK 1

// const niz1 = ["Milan", "Mladen", "Vojin", "Darko", "Milica", "Vladimir"];
// const niz2 = niz1
//   // .map(function VelikoSlovoM(imaM) {
//   //   if (imaM.includes("m")) {
//   //     return imaM.toUpperCase();
//   //   }
//   //   return imaM;
//   // }) ----> prvo sam ovako ali mi se nije svidjalo sto mi Vladimira izlogjue sa velika slova
//   // pa sam se setio da mogu dva puta da pozovem funkciju .includes()  :)
//   .filter(function PrvoSLovoM(tekst) {
//     if (tekst[0] === "M") {
//       return true;
//     } else {
//       return false;
//     }
//   });
// console.log(niz2);
// let ime = "Stefan";
// console.log(ime[0]);

// // ZADATAK 2

// const niz3 = [
//   {
//     id: 141596489,
//     ime: "Dragoslav",
//     datumPrijave: "2025-05-26T17:36:22.035",
//   },
//   {
//     id: 04537893554,
//     ime: "Jelena",
//     datumPrijave: "2025-05-26T17:36:22.035",
//   },
//   {
//     id: 6477889897,
//     ime: "Petar",
//     datumPrijave: "2025-05-26T17:36:22.035",
//   },
// ];

// const niz4 = niz3.map(function IdBrojevi(element) {
//   return element.id;
// });
// console.log(niz4);

// // ZADATAK 3

// const niz5 = [16, 4.6, 8, -10, 0, 1.5, 67];
// // PRIMER JEDAN

// const niz6 = niz5.map(function umanjivanje(x) {
//   return x / 2;
// });
// console.log(niz6);

// // PRIMER DVA

// const niz7 = niz5.map((x) => x / 2);
// console.log(niz7);

// // ZADATAK 4

// const niz8 = [
//   { ime: "Marko", godine: 16 },
//   { ime: "Slavica", godine: 19 },
//   { ime: "Zeljko", godine: 18 },
//   { ime: "Tina", godine: 17 },
//   { ime: "Petar", godine: 18 },
//   { ime: "Milca", godine: 19 },
// ];
// const niz9 = niz8
//   .filter(function punoletni(element1) {
//     if (element1.godine > 17) return element1.godine;
//   })
//   .map(function samoImena(element1) {
//     return element1.ime;
//   });

// console.log(niz9);
