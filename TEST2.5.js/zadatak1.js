class Kutija {
  #sirina;
  #duzina;
  visina;

  constructor(sirina, duzina, visina) {
    this.sirina = sirina;
    this.duzina = duzina;
    this.visina = visina;
  }

  izračunajZapreminu() {}
}

class SpecijalnaKutija extends Kutija {
  constructor(visina) {
    super(10, 10);
    this.visina = visina;
  }

  prikaz() {
    return `${this.visina}cm`;
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
    return this.matrica;
  }
}

let novoSkladiste = new Skladiste(500);
novoSkladiste.utovari([
  [4, 5],
  [5, 4],
]);
console.log(novoSkladiste.prikaz());

// koja sabira zapreminu svih kutija u matrici i vraća ukupan zbir, odnosno trenutno zauzeti kapacitet skladišta.

function izračunajTrenutniKapacitet(matrica) {
  let zbir = 0;
  for (let i = 0; i < matrica.length; i++) {
    for (let j = 0; j < matrica[i].length; j++) {
      const kutija = matrica[i][j];
      zbir = zbir + kutija.sirina * kutija.duzina * kutija.visina;
    }
  }
  return zbir;
}
console.log(izračunajTrenutniKapacitet(novoSkladiste));

function izbaci() {}
