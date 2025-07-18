import { videos } from "./videos.js";

//  PRVI ZADATAK
// a) Napiši funkciju koja YouTube video prikazuje u sledećem formatu:
// Yoga for beginners									(2022)
// by Richard Harper (50533 subs)				   (10 comments)

function infoVidea(video) {
  return `${video.title}      (${new Date(video.releasedOn).getFullYear()})
by ${video.author.name} (${video.author.subscriberCount}) subs              (${
    video.comments.length
  }) comments`;
}
// console.log(infoVidea(videos[3]));

// b)  Napiši funkciju koja na osnovu YouTube videa i njegovog ID-a generiše link:
// Link: https://www.youtube.com/watch?v=68756251498d109d28e79017

function YouTubeLink(video) {
  return `https://www.youtube.com/watch?v=${video.id} `;
}
// console.log(YouTubeLink(videos[0]));

// c) Napiši funkciju koja štampa priznanice za određeni broj YouTube subscriber-a. Ove priznanice se štampaju za 100k, 1M, 10M, 100M subscriber-a.
//        YouTube congratulates
//          Faulkner Pearson
//    for passing 100,000 subscribers!

function priznanica(video) {
  let pratioci = video.author.subscriberCount;
  if (pratioci > 100000) {
    return `   YouTube congratulates ${video.author.name} for passing 100,000 subscribers!`;
  } else {
    return "";
  }
}
// console.log(priznanica(videos[0]));

// DRUGI ZADATAK

// a) Poređaj sve videe po broju pregleda i odštampaj prva 3 u formatu iz prvog zadatka (pod A).

// let pregledi = videos.sort((videoA, videoB) => {
//   if (videoA.viewCount > videoB.viewCount) return 1;
//   if (videoA.viewCount < videoB.viewCount) return -1;
// });
// console.log(infoVidea(pregledi[0]));
// console.log(infoVidea(pregledi[1]));
// console.log(infoVidea(pregledi[2]));

// b) Pronađi sve videe čiji autor ima preko 100 000 subscriber-a. Za svakog od njih, odštampaj priznanicu u formatu iz prvog zadatka (pod C).

// let cestitka = videos.filter((video) => {
//   if (video.author.subscriberCount > 100000) return true;
// });
// let cestitaj = cestitka.map((video) => {
//   return priznanica(video);
// });
// console.log(cestitaj);

// c) Koliko ima videa koji su objavljeni u 2024. godini?

// let snimci2024 = videos.filter((video) => {
//   return video.releasedOn.startsWith("2024");
// });
// console.log(snimci2024.length);

// d) Odštampaj sve videe koje je objavio youtuber Stephenson Atkinson.

// let StephensonAtkinson = videos.filter((video) => {
//   return video.author.name === "Stephenson Atkinson";
// });
// console.log(StephensonAtkinson);

// TRECI ZADATAK

// a) Napravi novu listu videa u kojoj će svaki video na parnoj poziciji ostati isti, dok će oni na neparnim pozicijama imati novi ID koji je nasumični broj između 1 i 100 000.

let neparnePozicije = videos.filter((video, brojac) => {
  if (brojac % 2 !== 0) {
    return video;
  }
});
// console.log(neparnePozicije)
function nasumicniBroj() {
  return Math.floor(Math.random() * 100000);
}
let noviID = neparnePozicije.map((video) => {
  video.id = nasumicniBroj();
  return video;
});
// console.log(noviID);
//  b) Koristeći funkciju iz prvog zadatka (pod B), generiši linkove svih videa koji imaju numerički ID

let numerickiID = noviID.map((video) => {
  return YouTubeLink(video);
});
// console.log(numerickiID);

// c) Poređaj sve videe po broju komentara u rastućem redosledu,
// zatim napravi objekat čija će svojstva biti ID-jevi videa, a vrednosti njihov broj komentara.

let brojKomentara = noviID.sort((videoA, videoB) => {
  if (videoA.comments.length > videoB.comments.length) return 1;
  if (videoA.comments.length < videoB.comments.length) return -1;
});
// console.log(brojKomentara);
let IDiKomentari = brojKomentara.reduce((Objekat, video) => {
  return { ...Objekat, [video.id]: video.comments.length };
}, {});
// console.log(IDiKomentari);

// d) Napravi novu listu videa koja će podržati lajkovanje komentara.
// Svaki komentar će imati polje likes čija će vrednost biti 0.

// CETVRTI ZADATAK
// a) svakom videu dodati “score” svojstvo

let score = videos.map((video) => {
  let score = (video.viewCount * video.comments.length) / 8;
  return { ...video, score };
});
// console.log(score);

// b) videu na 8. poziciji dodeliti negativan score od -2.5
let score8 = score.map((video) => {
  score[7].score = -2.5;
  return video;
});
// console.log(score8);

// c) poređati videe po score-u

let topScore = score8.sort((videoA, videoB) => {
  if (videoA.score > videoB.score) return -1;
  if (videoA.score < videoB.score) return 1;
});
// console.log(topScore);

// d) dodati na kraj liste jedan proizvoljan video sa score-om od 100

let konacniSpisak = [
  ...topScore,
  {
    id: "KucajDvaPuta",
    title: "Baba jula",
    viewCount: 758549623158,
    releasedOn: "1998-02-19T11:40:25",
    author: { id: 25, name: "Bora Djordjevic", subscriberCount: 1000000000 },
    comments: [],
    score: 100,
  },
];
// console.log(konacniSpisak);
