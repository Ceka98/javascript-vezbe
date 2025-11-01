class ZagadjenaZona {
  zona;

  constructor() {
    this.zona = [];
    for (let i = 0; i < 6; i++) {
      let NoviRed = [];
      for (let j = 0; j < 6; j++) {
        let polje = 0;
        NoviRed.push(polje);
      }
      this.zona.push(NoviRed);
    }
  }

  zagadjenoPolje(x, y, opasnost) {
    if (x > this.zona.length || x < 0) {
      return "To polje ne postoji";
    }
    if (y > this.zona.length || y < 0) {
      return "To polje ne postoji";
    }
    this.zona[x - 1][y - 1] = opasnost;

    let r = opasnost.poluprecnik;
    let A = [x - r, y - r];
    let B = [x - r, y + r];
    let C = [x + r, y - r];
    let D = [x + r, y + r];
    if (A < 0) {
      A = 0;
    }
    if (B < 0) {
      A = 0;
    }
    if (C < 0) {
      A = 0;
    }
    if (D < 0) {
      A = 0;
    }
    if (A > this.zona.length) {
      A = this.zona.length;
    }
    if (B > this.zona.length) {
      B = this.zona.length;
    }
    if (C > this.zona.length) {
      C = this.zona.length;
    }
    if (D > this.zona.length) {
      D = this.zona.length;
    }

    for (let i = A; i <= B; i++) {
      for (let j = C; j <= D; j++) {
        if (this.zona[i] === 0) {
          this.zona[i] = 1;
        }
        if (this.zona[j] === 0) {
          this.zona[j] === 1;
        }
      }
    }
  }

  nadjiOpasnostiPoTipu(tipOpasnosti) {
    let rezultat = [];
    for (let i = 0; i < this.zona.length; i++) {
      for (let j = 0; j < this.zona[i].length; j++) {
        if (this.zona[i][j].tip === tipOpasnosti) {
          rezultat.push(this.zona[i][j]);
        }
      }
    }
    return rezultat;
  }

  nadjiJakoOpasnaPolja() {
    let kordinate = [];
    for (let i = 0; i < this.zona.length; i++) {
      for (let j = 0; j < this.zona[i].length; j++) {
        if (this.zona[i][j].stepen > 8) {
          kordinate.push(i + 1, j + 1);
        }
      }
    }
    return kordinate;
  }
}

let novaZona = new ZagadjenaZona();
let objekat = { tip: "hemijska", stepen: 9, poluprecnik: 1 };
novaZona.zagadjenoPolje(2, 2, objekat);
console.log(novaZona.zona);
console.log(novaZona.nadjiOpasnostiPoTipu("hemijska"));
console.log(novaZona.nadjiJakoOpasnaPolja());
