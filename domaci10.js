// Zadatak 1

// const niz = ["a", -5, 88, "bcd"];
// let niz1 = [120, ...niz];
// let niz2 = [...niz, "efg"];
// let niz3 = [-5, "f", ...niz1, 0, 0, 0];
// let niz4 = [17, ...niz, 999, ...niz, 168];
// console.log(niz4);

// Zadatak 2

// const googleFit = [
//   {
//     id: 76,
//     name: "Kevin",
//     steps: 120,
//   },
//   {
//     id: 99,
//     name: "Sophie",
//     steps: 20,
//   },
//   {
//     id: 111,
//     name: "John",
//     steps: 672,
//   },
//   {
//     id: 95,
//     name: "Mary",
//     steps: 245,
//   },
// ];
// prvi pokusaj ..
// let niz5 = googleFit.map((objekat) => {
//   return objekat.name + "  " + objekat.steps;
// });
// console.log(niz5);

// drugi pokusaj, ispravni ....
// let niz5 = googleFit.reduce((konacniObjekat, objekat) => {
//   return { ...konacniObjekat, [objekat.name]: objekat.steps };
// }, {});
// console.log(niz5);

// Zadatak 3

// const market = { id: 18, name: "Maxi", description: "Supermarket" };

// let A_market = { ...market, location: "Leskovac" };
// let B_market = { employees: 25, ...market, revenue: 1900000 };
// let C_market = { ...A_market, name: "Idea", location: "Nis" };
// console.log(C_market);

// Zadatak 4

// let osobe = [{ Kevin: 120 }, { Sophie: 20 }, { John: 672 }, { Mary: 245 }];

// function nasumicniBroj() {
//   return Math.floor(Math.random() * 100);
// }

// let podaci = osobe.reduce((konacniPodaci, objekat) => {
//   return [
//     ...konacniPodaci,
//     "ID:" +
//       nasumicniBroj() +
//       "  " +
//       "Name: " +
//       Object.keys(objekat) +
//       "  " +
//       "Steps:" +
//       Object.values(objekat),
//   ];
// }, []);
// console.log(podaci);

// let podaci = osobe.reduce((konacniNiz, pocetniPodaci) => {
//   return ` ID: ${nasumicniBroj()} Name: ${Object.keys(
//     pocetniPodaci
//   )} Steps: ${Object.values(pocetniPodaci)} `;
// }, []);
// console.log(podaci);

// let podaci = osobe
//   .reduce((FinalniNiz, poceniObjekat) => {
//     return [...FinalniNiz, poceniObjekat];
//   }, [])
//   .map((poceniObjekat) => {
//     return `{ ID: ${nasumicniBroj()}  Name: ${Object.keys(
//       poceniObjekat
//     )}  Steps: ${Object.values(poceniObjekat)} }`;
//   });
// console.log(podaci);
