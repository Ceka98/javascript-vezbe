// ZADATAK 1                 PRVI PRIMER
let brojac = 0;
while (brojac < 25) {
  console.log(brojac);
  brojac += 2;
}
// DRUGI PRIMER
let brojac1 = 0;
while (brojac < 25) {
  brojac++;
  if (brojac % 2 === 0) {
    console.log(brojac);
  }
}

// ZADATAK 2

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numberOfLetters = alphabet.length;
  const randomIndex = Math.floor(Math.random() * numberOfLetters);
  return alphabet[randomIndex];
}
let rec = "";
let slovo = getRandomLetter();
while (slovo != "g") {
  slovo = getRandomLetter();
  rec += slovo;
  // <-----    // OVO  JE BILO PROBLE
}
console.log(rec);

// ZADATAK 3

let y = 0;
let brojac3 = 0;
while (y < 100) {
  y = y + 1;
  if (y % 7 === 0) {
    brojac3++;
  }
}
console.log(brojac);

// ZADATAK 4
let niz2 = [];
const niz1 = [
  3,
  "dusan",
  7,
  { ime: "lazar", starost: 25 },
  "viktorija",
  "",
  { ime: "mika", starost: 60 },
  -9,
];
for (i = 0; i < niz1.length; i++) {
  if (typeof niz1[i] === "string") {
    tekst = niz1[i].toUpperCase();
    niz2.push(tekst);
  } else if (typeof niz1[i] === "number") {
    broj = niz1[i] * 2;
    niz2.push(broj);
  }
}
console.log(niz1[3].ime, niz1[6].ime, niz2);

// // ZADATAK 5
let brojac5 = 0;
let x = 50;
let nasumicanBroj5 = Math.floor(Math.random() * 10);
while (x > 0) {
  x = x - nasumicanBroj5;
  nasumicanBroj5 = Math.floor(Math.random() * 10);
  brojac5++;
}
console.log(brojac5);
