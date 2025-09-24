// PRVI ZADATAK:

// class Knjiga {
//   #naslov;
//   #pisac;
//   #dostupnaKnjiga;

//   constructor(naslov, pisac, dostupnaKnjiga) {
//     this.#naslov = naslov;
//     this.#pisac = pisac;
//     this.#dostupnaKnjiga = dostupnaKnjiga;
//   }
//   setNaslov(naslovKnjige) {
//     this.#naslov = naslovKnjige;
//   }
//   getNaslov() {
//     return this.#naslov;
//   }

//   setPisac(pisacKnjige) {
//     this.#pisac = pisacKnjige;
//   }
//   getPisac() {
//     return this.#pisac;
//   }

//   setDostupnaKnjiga(dostupnaKnjiga) {
//     this.#dostupnaKnjiga = dostupnaKnjiga;
//   }
//   getDostupnaKnjiga() {
//     return this.#dostupnaKnjiga;
//   }
// }

// class Biblioteka {
//   #nizKnjiga = [];
//   static ukupniBrojKnjiga = 0;
//   static brojDostupnihKnjiga = 0;

//   constructor() {}

//   dodajKnjigu(knjiga) {
//     if (knjiga.getDostupnaKnjiga() === true) {
//       Biblioteka.brojDostupnihKnjiga++;
//     }
//     this.#nizKnjiga.push(knjiga);
//     Biblioteka.ukupniBrojKnjiga++;
//   }

//   prikaziKnjigu() {
//     for (let i = 0; i < this.#nizKnjiga.length; i++) {
//       let knjiga = this.#nizKnjiga[i];
//       let oznaka;
//       if (knjiga.getDostupnaKnjiga() === true) {
//         oznaka = "x";
//       } else {
//         oznaka = "";
//       }
//       console.log(`[${oznaka}] ${knjiga.getNaslov()} - ${knjiga.getPisac()}`);
//     }
//   }

//   static PostavibrojDostupnihKnjiga() {
//     return Biblioteka.brojDostupnihKnjiga;
//   }
// }

// let k1 = new Knjiga(
//   "The Lord of the Rings",
//   " John Ronald Reuel Tolkien",
//   true
// );
// let k2 = new Knjiga("Don Quixote", "Miguel de Cervantes", false);

// let k3 = new Knjiga("War and Peace", "Leo Tolstoy", false);

// let B = new Biblioteka();
// B.dodajKnjigu(k1);
// B.dodajKnjigu(k2);
// B.dodajKnjigu(k3);

// B.prikaziKnjigu();

// console.log("Ukupan broj knjiga:", Biblioteka.ukupniBrojKnjiga);
// console.log("Broj dostupnih knjiga", Biblioteka.PostavibrojDostupnihKnjiga());

// DRUGI ZADATAK:

// class Broj {
//   #vrednost;

//   constructor(vrednost) {
//     this.#vrednost = vrednost;
//   }

//   setVrednost(novaVrednost) {
//     this.#vrednost = novaVrednost;
//   }

//   getVrednost() {
//     return this.#vrednost;
//   }

//   static nasumicniBroj(maksimalniBroj) {
//     return Math.floor(Math.random() * maksimalniBroj + 1);
//   }
// }

// class ParniBroj extends Broj {
//   constructor(vrednost) {
//     if (vrednost % 2 !== 0) {
//       throw "Greska ";
//     }
//     super(vrednost);
//   }
// }

// class NeparniBroj extends Broj {
//   constructor(vrednost) {
//     if (vrednost % 2 === 0) {
//       throw "Greska";
//     }
//     super(vrednost);
//   }
// }

// try {
//   let parniBroj1 = new ParniBroj(8);
//   console.log("Parni broj:", parniBroj1.getVrednost());

//   let neparniBroj1 = new NeparniBroj(7);
//   console.log("Neparni broj:", neparniBroj1.getVrednost());

//   let greska = new ParniBroj(5);
//   console.log(greska.getVrednost());
// } catch (error) {
//   console.log(error);
// }

// console.log("Nasumičan broj do 10:", Broj.nasumicniBroj(10));

// TRECI ZADATAK

// class Bioskop {
//   #sedista = [];

//   constructor(ukupanBrojSedista) {
//     for (let i = 1; i <= ukupanBrojSedista; i++) {
//       this.#sedista.push({ broj: i, zauzeto: false });
//     }
//   }

//   getSedista() {
//     return this.#sedista;
//   }

//   popuniSediste(broj) {
//     let popunjenoSediste = this.#sedista.map((sediste) => {
//       if (sediste.broj === broj && sediste.zauzeto === false) {
//         sediste.zauzeto = true;
//       } else if (sediste.broj === broj && sediste.zauzeto === true) {
//         throw `Sedište je već zauzeto!`;
//       }
//     });
//     return [...this.#sedista, popunjenoSediste];
//   }

//   brojSlobodnihSedista() {
//     return `Broj slobodnih sedista je  ${
//       this.#sedista.filter((s) => !s.zauzeto).length
//     };`;
//   }

//   pregledSedista() {
//     for (let i = 0; i < this.#sedista.length; i++) {
//       let sediste = this.#sedista[i];
//       if (sediste.zauzeto === false) {
//         console.log(`[${sediste.broj}]: slobodno`);
//       } else {
//         console.log(`[${sediste.broj}]; zauzeto`);
//       }
//     }
//   }
// }

// try {
//   let bioskop1 = new Bioskop(10);
//   bioskop1.popuniSediste(9);
//   bioskop1.popuniSediste(10);
//   console.log(bioskop1.getSedista());
//   console.log(bioskop1.brojSlobodnihSedista());
//   console.log(bioskop1.pregledSedista());
// } catch (error) {
//   console.log(error);
// }

// CETVRTI ZADATAK

// class BazaPodataka {
//   #podaci = {};
//   static brojBazaPodataka = 0;

//   constructor() {
//     BazaPodataka.brojBazaPodataka++;
//   }

//   getPodaci() {
//     return this.#podaci;
//   }

//   dodajKorisnika(id, username, password) {
//     if (this.#podaci[id] === id) {
//       throw "GRESKA";
//     }
//     if (password.length < 5 || password.length > 20) {
//       throw "GRESKA";
//     }

//     this.#podaci[id] = { username, password };
//   }

//   pronadjiKorisnika(id, password) {
//     let korisnik = this.#podaci[id];
//     if (korisnik && korisnik.password === password) {
//       return { [id]: korisnik };
//     } else {
//       return "Greska";
//     }
//   }
// }
// let baza1 = new BazaPodataka();
// baza1.dodajKorisnika(1, "Stefan", 12345);
// baza1.dodajKorisnika(2, "Dusan", 54321);
// console.log(baza1.getPodaci());

// console.log(baza1.pronadjiKorisnika(1, 12345));
// console.log(baza1.pronadjiKorisnika(1, 12354));
