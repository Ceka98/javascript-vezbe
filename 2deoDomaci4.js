// PRVI ZADATAK
//  Napiši klasu Krug koja ima svoju boju i poluprečnik.
// Ova klasa ima i jedan privatni atribut koji se zove PI i koji iznosi 3,14.
// Klasa takođe ima 2 metode izracunajPovrsinu() i
// stampaj() koja ispisuje rečenicu “Ja sam krug X boje i moja površina je Y.”

// class Krug {
//   boja;
//   poluprecnik;
//   #PI = 3.14;

//   constructor(boja, poluprecnik) {
//     this.boja = boja;
//     this.poluprecnik = poluprecnik;
//   }

//   izracunajPovrsinu() {
//     return this.poluprecnik * this.poluprecnik * this.#PI;
//   }

//   stampaj() {
//     return `Ja sam krug ${
//       this.boja
//     } boje i moja provrsina je ${this.izracunajPovrsinu()}`;
//   }
// }

// plava boja i r = 5
// crvena boja i r = 16
// zelena boja i r = 0.8

// let krug1 = new Krug("plave", 5);
// let povrsina = krug1.izracunajPovrsinu();
// console.log(krug1.stampaj());

// let krug2 = new Krug("crvene", 16);
// let povrsina2 = krug2.izracunajPovrsinu();
// console.log(krug2.stampaj());

// let krug3 = new Krug("zelene", 0.8);
// let povrsina3 = krug3.izracunajPovrsinu();
// console.log(krug3.stampaj());

// DRUGI ZADATAK
// Napiši klasu BankovniRacun koja ima 2 privatna atributa “novac” i “sifra”.
// Pri kreiranju, količina novca na računu je nula, a šifru zadaje korisnik klase.

// class BankovniRacun {
//   #novac = 0;
//   #sifra;

//   constructor(sifra) {
//     this.#sifra = sifra;
//   }

//   uplatiNovac(suma) {
//     this.#novac = this.#novac + suma;
//     if (suma > 0) {
//       return `Uplata uspesno izvrsena`;
//     } else {
//       return `Greska`;
//     }
//   }
//   podigniNovac(suma) {
//     if (this.#novac >= suma) {
//       this.#novac = this.#novac - suma;
//       return `Novac uspeno isplacen`;
//     } else {
//       return "Nemate dovoljno sredstava na racunu.";
//     }
//   }

//   stanjeNaRacunu(sifra) {
//     if (this.#sifra === sifra) {
//       return this.#novac;
//     } else {
//       return "Greska";
//     }
//   }
// }

// let Racun = new BankovniRacun(9898);
// console.log(Racun.uplatiNovac(2));
// console.log(Racun.stanjeNaRacunu(9898));
// console.log(Racun.podigniNovac(1));
// console.log(Racun.stanjeNaRacunu(9898));

// Data je klasa Brava. Brava ima šifru koja predstavlja nasumičan broj između 0 i 100.
// Bez da menjaš implementaciju ove klase, probaj da otključaš bravu.

// class Brava {
//   #sifra;
//   #brojPreostalihPokusaja = 50;
//   #zakljucana = true;

//   constructor() {
//     this.#sifra = Math.floor(Math.random() * 100);
//   }

//   otkljucaj(sifra) {
//     if (!this.#zakljucana) {
//       console.log("Već otključano.");
//       return;
//     }

//     if (this.#brojPreostalihPokusaja <= 0) {
//       console.log("Nema više pokušaja.");
//       return;
//     }

//     this.#brojPreostalihPokusaja--;
//     if (sifra === this.#sifra) {
//       this.#zakljucana = false;
//       console.log(`Otključano! Šifra je ${sifra}.`);
//       return;
//     }

//     console.log(
//       `Pogrešno. Preostalo je još ${this.#brojPreostalihPokusaja} pokušaja.`
//     );
//   }

//   daLiJeZakljucana() {
//     return this.#zakljucana;
//   }
// }

// let brava = new Brava();

// for (let i = 0; i <= 100; i++) {
//   brava.otkljucaj(i);

//   if (!brava.daLiJeZakljucana()) {
//     console.log(`Prava šifra je: ${i}`);
//     break;
//   }
// }
