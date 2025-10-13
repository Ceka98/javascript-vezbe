import { songData } from "./songsData.js";
import { departments } from "./departments.js";

// PRVI ZADATAK

// class Playlist {
//   playlist;

//   ImportSongs(songData) {
//     this.playlist = songData;
//   }
//   getTags(songTitle) {
//     let imePesme = this.playlist.find((pesma) => songTitle === pesma.title);

//     if (imePesme === undefined) {
//       throw "Greska, ova pesma se ne nalazi na nasoj pleylisti";
//     }

//     return imePesme.tags;
//   }

//   findFirstSongByArtist(artistName) {
//     let pesma =
//       this.playlist.find((pesma) => pesma.artist === artistName) || null;
//     return pesma;
//   }

//   tagsToCSV(songId, separator) {
//     let pesma = this.playlist.find((pesma) => pesma.id === songId);
//     if (!pesma) {
//       return "Greska, ta pesma ne postoji na ovoj pley listi";
//     }
//     let odvojiTags = pesma.tags.split(",");
//     return odvojiTags.join(separator);
//   }

//   getWindow(start, end) {
//     if (start < 0 || end > this.playlist.length || start >= end) {
//       throw "Greška, uneti parametri nisu ispravni za ovu playlistu";
//     }
//     return this.playlist.slice(start, end);
//   }
// }

// try {
//   let test1 = new Playlist();
//   test1.ImportSongs(songData);

//   console.log(test1.getTags("Bohemian Rhapsody"));
//   console.log(test1.findFirstSongByArtist("Queen"));
//   console.log(test1.tagsToCSV("1", "*"));
//   console.log(test1.getWindow(1, 3));
// } catch (greska) {
//   console.log(greska);
// }

// DRUGI ZADATAK

// const matrica1 = [
//   ["X", "X", "X"],
//   ["O", "O", "X"],
//   ["O", "X", "X"],
// ];

// const matrica2 = [
//   ["O", "O", "O"],
//   ["X", "X", "X"],
//   ["O", "O", "X"],
// ];

// const matrica3 = [
//   ["O", "X", "O"],
//   ["X", "X", "O"],
//   ["X", "O", "O"],
// ];

// function daLiJeIgraGotova(matrica, X) {
//   let glavnaDijagonala = true;
//   for (let i = 0; i < matrica.length; i++) {
//     if (matrica[i][i] !== X) {
//       glavnaDijagonala = false;
//     }
//   }
//   if (glavnaDijagonala) return true;

//   let sporednaDijagonla = true;
//   for (let i = 0; i < matrica.length; i++) {
//     if (matrica[i][matrica.length - 1 - i] !== X) {
//       sporednaDijagonla = false;
//     }
//   }
//   if (sporednaDijagonla) return true;

//   for (let i = 0; i < matrica.length; i++) {
//     let proveraReda = true;
//     for (let j = 0; j < matrica[i].length; j++) {
//       if (matrica[i][j] !== X) {
//         proveraReda = false;
//       }
//     }
//     if (proveraReda) return true;
//   }

//   for (let i = 0; i < matrica.length; i++) {
//     let proveraKolone = true;
//     for (let j = 0; j < matrica[i].length; j++) {
//       if (matrica[j][i] !== X) {
//         proveraKolone = false;
//       }
//     }
//     if (proveraKolone) return true;
//   }

//   return false;
// }

// console.log(daLiJeIgraGotova(matrica3, "X"));
// console.log(daLiJeIgraGotova(matrica3, "O"));

// TREVI ZADATAK

// class BankAcconut {
//   imeVlasnikaRacuna;
//   ID;
//   #sumaNovca = 0;
//   static kodBanke = "ACME123";

//   constructor(imeVlasnikaRacuna) {
//     this.imeVlasnikaRacuna = imeVlasnikaRacuna;
//     this.ID = Math.floor(Math.random() * 899999) + 100000;
//     this.#sumaNovca = 0;
//   }

//   getSumaNovca() {
//     return this.#sumaNovca;
//   }

//   setSumaNovca(sumaNovca) {
//     this.#sumaNovca = sumaNovca;
//   }

//   deposit(amount) {
//     this.#sumaNovca = this.#sumaNovca + amount;
//   }
//   withdraw(amount) {
//     if (amount > this.#sumaNovca) {
//       throw "Geska, nemate dovoljno sredstava na racunu";
//     }
//     this.#sumaNovca = this.#sumaNovca - amount;
//   }

//   static transfer(from, to, amount) {
//     from.withdraw(amount);
//     to.deposit(amount);
//   }
// }

// class SavingsAccount extends BankAcconut {
//   #interestRate;

//   constructor(imeVlasnikaRacuna, interestRate) {
//     super(imeVlasnikaRacuna);
//     this.#interestRate = interestRate;
//   }

//   applyInterestRate() {
//     let trenutnoStanje = this.getSumaNovca();
//     this.setSumaNovca(
//       trenutnoStanje + (trenutnoStanje * this.#interestRate) / 100
//     );
//   }
// }

// class CheckingAccount extends BankAcconut {
//   overdraftLimit;

//   constructor(imeVlasnikaRacuna, overdraftLimit) {
//     super(imeVlasnikaRacuna);
//     this.overdraftLimit = overdraftLimit;
//   }
//   withdraw(amount) {
//     if (amount <= this.getSumaNovca() + this.overdraftLimit) {
//       this.setSumaNovca(this.getSumaNovca() - amount);
//     } else {
//       throw "GRESKA: PREKORACILI STE DOZVOLJENI MINUS";
//     }
//   }
// }

// let racun1 = new SavingsAccount("Stefan", 10);
// let racun2 = new CheckingAccount("Dusan", 200);

// racun1.deposit(2000);
// racun2.deposit(3000);

// console.log(" Stanje na vasem racunu je " + racun1.getSumaNovca());
// console.log(" Stanje na vasem racunu je " + racun2.getSumaNovca());

// racun1.applyInterestRate();

// console.log("Stanje racuna uvecano sa stednjom" + " " + racun1.getSumaNovca());

// racun2.withdraw(3200);

// console.log(
//   "Stanje na vasem racunu nakon podizanja novca sa dozvoljenim minusom" +
//     " " +
//     racun2.getSumaNovca()
// );

// BankAcconut.transfer(racun1, racun2, 1000);
// console.log(
//   "Stanje na vasem racunu nakon transvera novca" + " " + racun2.getSumaNovca()
// );
// try {
//   racun2.withdraw(1001);
// } catch (error) {
//   console.log(error);
// }
// CETVRTI ZADATAK

// a) getDepartments()
// ova f-ja vraća niz svih departmana ID sektora (frontend, backend, devops…)

// function getDepartments() {
//   return Object.keys(departments);
// }
// console.log(getDepartments());

// b) getEmployees(departmentName)
// ova f-ja vraća niz imena zaposlenih iz zadatog departmana
// primer:
// 	getEmployees(“devops”);
// ["Cohen Lynn", "Kirsten Jordan", "Duran Hendrix"]

// function getEmployees(departmentName) {
//   let departman = departments[departmentName];
//   if (!departman) {
//     throw "Greska to odeljenje ne postoji";
//   }
//   let zaposleni = [];
//   if (departman.lead) {
//     zaposleni.push(departman.lead.name);
//   }
//   let clanovi = Object.values(departman.members);
//   clanovi.forEach((zaposlen) => {
//     zaposleni.push(zaposlen.name);
//   });
//   return zaposleni;
// }

// console.log(getEmployees("frontend"));

// function getAllEmployees() {
//   let departman1 = departments.frontend;

//   let zaposleni = [];
//   if (departman1.lead) {
//     zaposleni.push(departman1.lead.name);
//   }
//   let clanoviFrondenda = Object.values(departman1.members);
//   clanoviFrondenda.forEach((zaposlen) => {
//     zaposleni.push(zaposlen.name);
//   });

//   let departman2 = departments.backend;

//   if (departman2.lead) {
//     zaposleni.push(departman2.lead.name);
//   }
//   let clanoviBackenda = Object.values(departman2.members);
//   clanoviBackenda.forEach((zaposlen) => {
//     zaposleni.push(zaposlen.name);
//   });

//   let departman3 = departments.devops;

//   if (departman3.lead) {
//     zaposleni.push(departman3.lead.name);
//   }
//   let clanoviDevopsa = Object.values(departman3.members);
//   clanoviDevopsa.forEach((zaposlen) => {
//     zaposleni.push(zaposlen.name);
//   });

//   let departman4 = departments.sales;

//   if (departman4.lead) {
//     zaposleni.push(departman4.lead.name);
//   }
//   let clanoviSalesa = Object.values(departman4.members);
//   clanoviSalesa.forEach((zaposlen) => {
//     zaposleni.push(zaposlen.name);
//   });

//   let departman5 = departments.hr;

//   if (departman5.lead) {
//     zaposleni.push(departman5.lead.name);
//   }
//   let clanoviHra = Object.values(departman5.members);
//   clanoviHra.forEach((zaposlen) => {
//     zaposleni.push(zaposlen.name);
//   });

//   return zaposleni;
// }

// console.log(getAllEmployees());

// function getTeamLead(departmentName) {
//   let departman = departments[departmentName];
//   if (!departman) {
//     throw "Greska to odeljenje ne postoji";
//   }

//   return departman.lead.name || null;
// }

// console.log(getTeamLead("frontend"));

// function promoteEmployees(threshold, raisePercentage) {
//   let departman1 = departments.frontend;

//   let zaposleni = [];
//   if (departman1.lead) {
//     zaposleni.push(departman1.lead);
//   }
//   let clanoviFrondenda = Object.values(departman1.members);
//   clanoviFrondenda.forEach((zaposlen) => {
//     zaposleni.push(zaposlen);
//   });

//   let departman2 = departments.backend;

//   if (departman2.lead) {
//     zaposleni.push(departman2.lead);
//   }
//   let clanoviBackenda = Object.values(departman2.members);
//   clanoviBackenda.forEach((zaposlen) => {
//     zaposleni.push(zaposlen);
//   });

//   let departman3 = departments.devops;

//   if (departman3.lead) {
//     zaposleni.push(departman3.lead);
//   }
//   let clanoviDevopsa = Object.values(departman3.members);
//   clanoviDevopsa.forEach((zaposlen) => {
//     zaposleni.push(zaposlen);
//   });

//   let departman4 = departments.sales;

//   if (departman4.lead) {
//     zaposleni.push(departman4.lead);
//   }
//   let clanoviSalesa = Object.values(departman4.members);
//   clanoviSalesa.forEach((zaposlen) => {
//     zaposleni.push(zaposlen);
//   });

//   let departman5 = departments.hr;

//   if (departman5.lead) {
//     zaposleni.push(departman5.lead);
//   }
//   let clanoviHra = Object.values(departman5.members);
//   clanoviHra.forEach((zaposlen) => {
//     zaposleni.push(zaposlen);
//   });

//   for (let i = 0; i < zaposleni.length; i++) {
//     let radnik = zaposleni[i];
//     if (threshold > radnik.salary) {
//       radnik.salary = radnik.salary + (radnik.salary * raisePercentage) / 100;
//     }
//   }

//   return zaposleni;
// }

// console.log(promoteEmployees());

// console.log(promoteEmployees(400000, 10));
