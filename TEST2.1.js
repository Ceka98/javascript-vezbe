// import { songData } from "./songsData.js";

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
//   console.log(test1.getWindow(1, 0));
// } catch (greska) {
//   console.log(greska);
// }

// DRUGI ZADATAK

// const matrica1 = [
//   ["X", "X", "X"],
//   ["O", "O", "X"],
//   ["O", "X", "X"],
// ];

// function daLiJeIgraGotova(matrica, X) {
//   let glavnaDijagonala = true;
//   for (i = 0; i < matrica.length; i++) {
//     if (matrica[i][i] !== X) {
//       glavnaDijagonala = false;
//     }
//   }
//   if (glavnaDijagonala) return true;

//   let sporednaDijagonla = true;
//   for (i = 0; i < matrica.length; i++) {
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

// console.log(daLiJeIgraGotova(matrica1, "X"));
// console.log(daLiJeIgraGotova(matrica1, "O"));

// TREVI ZADATAK

// class BankAcconut {
//   imeVlasnikaRacuna;
//   ID;
//   #sumaNovca = 0;
//   static kodBanke = "ACME123";

//   constructor(imeVlasnikaRacuna) {
//     this.imeVlasnikaRacuna = imeVlasnikaRacuna;
//     this.ID = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
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
//     from.setSumaNovca(from.getSumaNovca() - amount);
//     to.setSumaNovca(to.getSumaNovca() + amount);
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
