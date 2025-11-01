class Bioskop {
  imeFilma;
  brojReda;
  brojKolona;
  bioskopskaSala;

  constructor(imeFilma, brojReda, brojKolona) {
    this.imeFilma = imeFilma;
    this.brojReda = brojReda;
    this.brojKolona = brojKolona;
    this.bioskopskaSala = [];
    for (let i = 0; i < brojReda; i++) {
      let noviRed = [];
      for (let j = 0; j < brojKolona; j++) {
        let sediste = { z: false };
        noviRed.push(sediste);
      }
      this.bioskopskaSala.push(noviRed);
    }
  }

  zauzmiSediste(imeOsobe, prezimeOsobe, brojReda, brojKolone) {
    if (brojReda > this.brojReda || brojReda < 0) {
      return "Nemamo toliko redova u nasoj sali";
    }
    if (brojKolone > this.brojKolona || brojKolone < 0) {
      return "Nemamo toliko kolona u nasoj sali";
    }
    let sediste = this.bioskopskaSala[brojReda - 1][brojKolone - 1];
    if (sediste.z === false) {
      this.bioskopskaSala[brojReda - 1][brojKolone - 1] = {
        ime: imeOsobe,
        prezime: prezimeOsobe,
        z: true,
      };
      return "Uspesno ste rezervisali mesto";
    } else {
      return "Ovo mesto je zauzeto";
    }
  }

  prikaziSedista() {
    let kopijaSale = this.bioskopskaSala.map((red) =>
      red.map((sediste) => {
        if (sediste.z === false) {
          return ["      "];
        } else {
          return [sediste.ime[0], sediste.prezime[0]];
        }
      })
    );
    return kopijaSale;
  }
  prikaziStatistiku() {
    let brojSedistaUsali = this.brojReda * this.brojKolona;
    let brojZauzetihMesta = 0;
    let brojSlobodnihMesta = 0;
    for (let i = 0; i < this.bioskopskaSala.length; i++) {
      for (let j = 0; j < this.bioskopskaSala[i].length; j++) {
        if (this.bioskopskaSala[i][j].z === true) {
          brojZauzetihMesta++;
        } else {
          brojSlobodnihMesta++;
        }
      }
    }
    return `
Ukupan broj sedista u nasoj sali je ${brojSedistaUsali}
Broj zauzetih mesta za sada u sali je ${brojZauzetihMesta}
Broj slobodnih mesta za sada u sali je ${brojSlobodnihMesta}`;
  }

  daLiJeBioskopPun() {
    for (let i = 0; i < this.bioskopskaSala.length; i++) {
      for (let j = 0; j < this.bioskopskaSala[i].length; j++) {
        if (this.bioskopskaSala[i][j].z === false) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}
let vilinGrad = new Bioskop("Snezana", 4, 4);
console.log(vilinGrad.zauzmiSediste("Stefan", "Cekic", 2, 2));
console.log(vilinGrad.zauzmiSediste("Dusan", "Dodic", 4, 4));
console.log(vilinGrad.prikaziSedista());
console.log(vilinGrad.bioskopskaSala);
console.log(vilinGrad.prikaziStatistiku());
console.log(vilinGrad.daLiJeBioskopPun());
