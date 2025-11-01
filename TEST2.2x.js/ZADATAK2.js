import { rawShipmentData } from "./shipments.js";

class TemuShipment {
  rawData;
  parsedData;

  constructor(neobradjeniPodaci) {
    this.rawData = neobradjeniPodaci;
    this.parseRawData();
    this.parsedData;
  }

  parseRawData() {
    let podaci1 = this.rawData.split("\n");
    let podaci2 = podaci1.map((string) => {
      return string.split("|");
    });
    return (this.parsedData = podaci2);
  }

  findUrgentShipment() {
    let urgentnaDostava = this.parsedData.find((paket) => {
      if (paket[1] === "HIGH_URGENCY" && paket[2] === "AWAITING_DISPATCH") {
        return true;
      }
    });
    return urgentnaDostava;
  }
  popAllUrgentShipments() {
    let posiljke = this.parsedData.filter((posiljka) => {
      if (posiljka[1] === "HIGH_URGENCY") {
        console.log(posiljka);
      } else {
        return posiljka;
      }
    });
    return posiljke;
  }

  exportToCSV() {
    let dokument1 = [
      ["ID", "Priority", "Status", "Destination", "Estimated Dispatch Date"],
      ...this.parsedData,
    ];
    let rezultat = dokument1.join(";");
    return rezultat;
  }
}

let novaPosiljka = new TemuShipment(rawShipmentData);
console.log(novaPosiljka.parsedData);
console.log(novaPosiljka.findUrgentShipment());
console.log(novaPosiljka.popAllUrgentShipments());
console.log(novaPosiljka.exportToCSV());
