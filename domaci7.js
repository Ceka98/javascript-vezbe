import { korisnici } from "./podaci_korisnici.js";
import { gigatron } from "./podaci_korisnici.js";
// Zadatak 1
const niz = ["apple", "banana", "cat", "dog", "elephant", "fox"];
let niz1 = niz.filter((tekst) => tekst.length > 5);
console.log(niz1);

// Zadatak2

("Zovem se Dragoslav, prezivam se Stanisavljević i imam 6 godina.");
const niz3 = [
  {
    id: 1,
    ime: "Dragoslav",
    prezime: "Stanisavljević",
    godine: 6,
  },
  {
    id: 2,
    ime: "Jelena",
    prezime: "Conić",
    godine: 5,
  },
  {
    id: 3,
    ime: "Martina",
    prezime: "Nastić",
    godine: 7,
  },
];
let niz4 = niz3.map((podaci) => {
  return `Zovem se ${podaci.ime}, prezivam se ${podaci.prezime} i imam ${podaci.godine} godina`;
});
console.log(niz4);

// Zadatak3

let odabraniProizvodi = [];
odabraniProizvodi = gigatron
  .filter((proizvod) => proizvod.naStanju === true && proizvod.cena < 100000)
  .map((proizvod) => {
    return proizvod.ime;
  });
console.log(odabraniProizvodi);

// Zadatak 4

const namirnice = [
  { id: 1, namirnica: "Kupus", cena: 45 },
  { id: 2, namirnica: "Pašteta", cena: 75 },
  { id: 3, namirnica: "Kisela voda", cena: 1200 },
  { id: 4, namirnica: "Jaja", cena: 150 },
  { id: 5, namirnica: "Mleko", cena: 50 },
];
let namirnice1 = [];
namirnice1 = namirnice
  .filter((element) => element.cena >= 50 && element.cena <= 200)
  .map((element) => element.namirnica);
console.log(namirnice1);

// Zadatak 5
function redniBrojF(x) {
  return Math.floor(Math.random() * 10);
}
function novacF(y) {
  return Math.floor(Math.random() * 1000);
}

let datumPocetka = new Date();
let igraci = [
  {
    name: "Lazar",
    redniBroj: 0,
    novac: 0,
  },
  {
    name: "Valentina",
    redniBroj: 0,
    novac: 0,
  },
  {
    name: "Danijel",
    redniBroj: 0,
    novac: 0,
  },
  {
    name: "Uros",
    redniBroj: 0,
    novac: 0,
  },
  {
    name: "Jelena",
    redniBroj: 0,
    novac: 0,
  },
];
let igraci1 = [];
igraci1 = igraci.map(function gameStart(igrac) {
  return `Ime ${
    igrac.name
  }: Redni broj: ${(igrac.redniBroj = redniBrojF())} Novac: ${(igrac.novac = novacF())}`;
});
console.log(datumPocetka, igraci1);

// // Zadatak 6

let odredjenjiKorisnici = korisnici
  .filter(function odaberi(korisnik) {
    if (korisnik.gender === "Male" && korisnik.email.endsWith(".com")) {
      return true;
    } else {
      return false;
    }
  })
  .map(function Podaci(korisnik) {
    return korisnik.first_name + " " + korisnik.last_name;
  });
console.log(odredjenjiKorisnici);
