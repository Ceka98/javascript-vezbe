class Kutija {
  #sirina;
  #duzina;
  visina;

  constructor(sirina, duzina, visina) {
    this.#sirina = sirina;
    this.#duzina = duzina;
    this.visina = visina;
  }

  izracunajZapreminu() {
    return this.#sirina * this.#duzina * this.visina;
  }
}

class SpecijalnaKutija extends Kutija {
  constructor(visina) {
    super(10, 10, visina);
    this.visina = visina;
  }

  prikaz() {
    return `[${this.visina}cm]`;
  }
}

kutija1 = new SpecijalnaKutija(6);
console.log(kutija1.prikaz());

class Skladiste {
  maxKapacitet;
  matrica = [];
  constructor(maxKapacitet) {
    this.maxKapacitet = maxKapacitet;
  }

  utovari(brojevi) {
    for (let i = 0; i < brojevi.length; i++) {
      let noviRed = [];
      for (let j = 0; j < brojevi[i].length; j++) {
        let visina = brojevi[i][j];
        noviRed.push(new SpecijalnaKutija(visina));
      }
      this.matrica.push(noviRed);
    }
  }

  prikaz() {
    let prikazVisina = [];
    for (let i = 0; i < this.matrica.length; i++) {
      let noviRed = [];
      for (let j = 0; j < this.matrica[i].length; j++) {
        let visinaKutije = `${this.matrica[i][j].visina}cm`;
        noviRed.push(visinaKutije);
      }
      prikazVisina.push(noviRed);
    }
    return prikazVisina;
  }

  izracunajTrenutniKapacitet() {
    let zbir = 0;
    for (let i = 0; i < this.matrica.length; i++) {
      for (let j = 0; j < this.matrica[i].length; j++) {
        zbir += this.matrica[i][j].izracunajZapreminu();
      }
    }
    return zbir;
  }

  izracunajPreostaliKapacitet() {
    let kapacitet = this.izracunajTrenutniKapacitet();
    let razlika = this.maxKapacitet - kapacitet;
    return razlika;
  }

  istovari() {
    if (this.izracunajPreostaliKapacitet() > 0) {
      return 0;
    }
    if (this.izracunajPreostaliKapacitet() < 0) {
    }
  }
}

let novoSkladiste = new Skladiste(2000);
novoSkladiste.utovari([[4], [5], [5], [4]]);
console.log(novoSkladiste.prikaz());
console.log(novoSkladiste.izracunajTrenutniKapacitet());
console.log(novoSkladiste.matrica);
console.log(novoSkladiste.izracunajPreostaliKapacitet());

// koja sabira zapreminu svih kutija u matrici i vraća ukupan zbir, odnosno trenutno zauzeti kapacitet skladišta.
