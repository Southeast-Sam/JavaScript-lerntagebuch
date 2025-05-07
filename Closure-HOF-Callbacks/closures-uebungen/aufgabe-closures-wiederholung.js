/* Nr.1: Closure-Zähler 

function erzeugeZaehler(startWert) {
  let zaehler = startWert;
  return function () {
    zaehler++;
    return zaehler;
  };
}

const zaehler1 = erzeugeZaehler(5);
console.log(zaehler1());
console.log(zaehler1());

const zaehler2 = erzeugeZaehler(100);
console.log(zaehler2());
*/

/* Nr.2: Erweiterte Zähler mit Reset & Verlauf */

function erzeugeFlexZaehler(startWert) {
  let zaehler = startWert;
  let verlauf = [startWert];
  return {
    naechsterWert: () => {
      // erhöht den Zähler um 1 und gibt den neuen Wert zurück
      zaehler++;
      verlauf.push(zaehler);
      return zaehler;
    },
    reset: () => {
      // setzt den Zähler auf den Startwert zurück
      zaehler = startWert;
      verlauf = [startWert];
    },
    verlauf: () => {
      // gibt ein Array mit allen bisher gezählten Werten zurück
      return verlauf;
    },
  };
}

const z = erzeugeFlexZaehler(3);
console.log(z.naechsterWert());
console.log(z.naechsterWert());
console.log(z.verlauf());
z.reset();
console.log(z.naechsterWert());
console.log(z.verlauf());
