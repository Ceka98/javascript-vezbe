import { prodavci } from "./prodavci.js";
import { tezge } from "./tezge.js";

let jeftineTezge = tezge.filter((tezga) => {
  return tezga.imeTezge.includes("JEFTINO");
});

let ProdavciTezge = jeftineTezge.map((tezga) => {
  let prodavac = prodavci.find((info) => tezga.id === info.idTezge);
  return { ...tezga, prodavac: prodavac, jeftino: true };
});
console.log(ProdavciTezge);
