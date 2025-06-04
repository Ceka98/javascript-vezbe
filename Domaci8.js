// ZADATAK 1
let niz1 = ["Novak", "Boris", "Petar", "Nikola", "Jovana"];
let niz2 = [];
niz2 = niz1.map(
  (osoba, brojac) =>
    `(${brojac}) Sediste na kome sedi ${osoba} je broj ${brojac + 1}`
);
console.log(niz2);

// ZADATAK 2

let niz3 = [0, 9, 4, 5, 11, 162, -2];
// Output:	[0, 16, 121, 4]
// Output:	[81, 25, 26244]
let niz4 = [];
let niz5 = [];
niz4 = niz3
  .filter((broj, brojac) => brojac % 2 === 0)
  .map((broj, brojac) => broj * broj);
console.log(niz4);

niz5 = niz3
  .filter((broj, brojac) => brojac % 2 !== 0)
  .map((broj, brojac) => broj * broj);
console.log(niz5);
