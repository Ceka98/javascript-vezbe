// PRVI ZADATAK

// class User {
//   #firstName;
//   #lastName;

//   setPrezime(prezime) {
//     this.#lastName = prezime;
//   }
//   setIme(ime) {
//     this.#firstName = ime;
//   }
//   getFullName() {
//     if (typeof this.#lastName !== "string") {
//       return "Greska";
//     }
//     if (typeof this.#firstName !== "string" || this.#firstName.trim() === "") {
//       return "Greška";
//     }
//     return this.#firstName + " " + this.#lastName;
//   }
// }

// let korisnik = new User();
// korisnik.setIme("Stefan");
// korisnik.setPrezime("Cekic");
// console.log(korisnik.getFullName());

// DRUGI ZADATAK

// class Pokemon {
//   ime;
//   jacina;

//   constructor(ime, jacina) {
//     this.ime = ime;
//     this.jacina = jacina;
//   }

//   napad(pokemonDva) {
//     if (this.jacina > pokemonDva.jacina) {
//       console.log(`Ja sam ${this.ime} moja jacina ${this.jacina} je pobedila`);
//     } else if (this.jacina < pokemonDva.jacina) {
//       console.log(
//         `Ja sam ${pokemonDva.ime} moja jacina ${pokemonDva.jacina} je pobedila`
//       );
//     }
//   }
// }

// class Pikacu extends Pokemon {
//   constructor() {
//     super("Pikacu", 78);
//   }
// }

// class Charizard extends Pokemon {
//   constructor() {
//     super("Charizard", 25);
//   }

//   poleti() {
//     this.jacina = this.jacina + 25;
//     console.log(`Charizard je poleteo i sada ima jačinu ${this.jacina}!`);
//   }
// }

// class Bulbasaur extends Pokemon {
//   constructor() {
//     super("Bulbasaur", 130);
//   }

//   kaslje() {
//     this.jacina = this.jacina - 5;
//     console.log(
//       `Ja sam ${this.ime} zakasljao sam se i moja jacina sada je ${this.jacina}`
//     );
//   }
// }

// let Pika = new Pikacu();
// let Char = new Charizard();
// let Bulb = new Bulbasaur();

// Char.poleti();
// Pika.napad(Char);
// Bulb.kaslje();
// Pika.napad(Bulb);

// TRECI ZADATAK  --- nije u potpunosti uradjen!

// class Operacija {
//   #leviBroj;
//   #desniBroj;

//   constructor(desniBroj, leviBroj) {
//     this.#desniBroj = desniBroj;
//     this.#leviBroj = leviBroj;
//   }

//   getdesniBroj() {
//     return this.#desniBroj;
//   }

//   setdesniBroj(desniNoviBroj) {
//     this.#desniBroj = desniNoviBroj;
//   }

//   getLeviBroj() {
//     return this.#leviBroj;
//   }

//   setLeviBroj(noviLeviBroj) {
//     this.#leviBroj = noviLeviBroj;
//   }

//   izracunaj() {}
// }

// class deljenje extends Operacija {
//   constructor() {
//     super();
//   }
//   izracunaj() {
//     return this.getdesniBroj() / this.getLeviBroj();
//   }
// }

// let Podeli = new deljenje();
// Podeli.setdesniBroj(0);
// Podeli.setLeviBroj(10);
// console.log(Podeli.izracunaj());

// class mnozenje extends Operacija {
//   constructor() {
//     super();
//   }
//   izracunaj() {
//     return this.getdesniBroj() * this.getLeviBroj();
//   }
// }

// let Pomnozi = new mnozenje();
// console.log(Pomnozi.izracunaj());

// class sabiranje extends Operacija {
//   constructor() {
//     super();
//   }
//   izracunaj() {
//     return this.getdesniBroj() + this.getLeviBroj();
//   }
// }

// let Saberi = new sabiranje();
// console.log(Saberi.izracunaj());

// class oduzimanje extends Operacija {
//   constructor() {
//     super();
//   }
//   izracunaj() {
//     return this.getdesniBroj() - this.getLeviBroj();
//   }
// }

// let Oduzimanje = new oduzimanje();
// console.log(Oduzimanje.izracunaj());

//  CETVRTI ZADATAK

class Knjiga {
  #Naslov;
  #Pisac;
  #DaLiJeKnjigaDosupna;

  constructor(naslov, pisac, dostupna) {
    this.#Naslov = naslov;
    this.#Pisac = pisac;
    this.#DaLiJeKnjigaDosupna = dostupna;
  }

  getNaslov() {
    return this.#Naslov;
  }

  setNaslov(NoviNaslov) {
    this.#Naslov = NoviNaslov;
  }

  getPisac() {
    return this.#Pisac;
  }

  setPisac(NoviPisac) {
    this.#Pisac = NoviPisac;
  }

  getDaLiJeKnjigaDostupna() {
    return this.#DaLiJeKnjigaDosupna;
  }

  setDaLiJeKnjigaDosupna(dostuponostKnjige) {
    this.#DaLiJeKnjigaDosupna = dostuponostKnjige;
  }
}

class Biblioteka {
  #nizKnjiga = [];
  static ukpuniBrojKnjiga = 0;

  constructor() {}

  getNizKnjiga() {
    return this.#nizKnjiga;
  }

  setNizKnjiga(novaKnjiga) {
    this.#nizKnjiga = novaKnjiga;
  }

  dodajKnjigu(Knjiga) {
    this.#nizKnjiga.push(Knjiga);
    Biblioteka.ukpuniBrojKnjiga++;
  }

  prikazKnjiga() {
    this.#nizKnjiga.forEach((knjiga) => {
      let oznaka;
      if (knjiga.getDaLiJeKnjigaDostupna()) {
        oznaka = "x";
      } else {
        oznaka = " ";
      }
      console.log(`[${oznaka}] ${knjiga.getNaslov()} - ${knjiga.getPisac()}`);
    });
  }

  static brojDostpunihKnjiga() {}
}

let k1 = new Knjiga(
  "The Lord of the Rings",
  " John Ronald Reuel Tolkien",
  true
);
let k2 = new Knjiga("Don Quixote", "Miguel de Cervantes", false);

let k3 = new Knjiga("War and Peace", "Leo Tolstoy", false);

let B = new Biblioteka();
B.dodajKnjigu(k1);
B.dodajKnjigu(k2);
B.dodajKnjigu(k3);

B.prikazKnjiga();

console.log("Ukupan broj knjiga:", Biblioteka.ukpuniBrojKnjiga);
