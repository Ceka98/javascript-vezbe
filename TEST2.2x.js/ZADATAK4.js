class File {
  dokument;
  constructor(dokument) {
    this.dokument = dokument;
  }
  getPathType() {
    let prvoSlovo = this.dokument[0];
    if (
      prvoSlovo === "C" ||
      prvoSlovo === "D" ||
      prvoSlovo === "E" ||
      prvoSlovo === "F"
    ) {
      return "absolute";
    }
    if (this.dokument.startsWith(".")) {
      return "relative";
    }
  }
  getExtension() {
    let niz = this.dokument.split(".");
    return niz[niz.length - 1];
  }
}

class VideoFile extends File {
  isVideoFileValid() {
    let ekstenzije = ["mp4", "mov", "avi", "mpeg", "wmv"];
    let podela = this.dokument.split(".");
    let nastavak = podela[podela.length - 1];
    if (ekstenzije.includes(nastavak)) {
      return true;
    } else {
      return false;
    }
  }
}

class AudioFile extends File {
  lengthInSeconds;
  constructor(dokument, lengthInSeconds) {
    super(dokument);
    this.lengthInSeconds = lengthInSeconds;
  }
  getAudioDuration() {
    let minuti = this.lengthInSeconds / 60;
    return minuti;
  }
}

let test = new File("C:/Windows/System32/virus.exe");
console.log(test.getPathType());
console.log(test.getExtension());

test1 = new VideoFile("C:/Windows/System32/virus.exe");
console.log(test1.isVideoFileValid());

test2 = new AudioFile("C:/Windows/System32/virus.exe", 220);
console.log(test2.getAudioDuration());
