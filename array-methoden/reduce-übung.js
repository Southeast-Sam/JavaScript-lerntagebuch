/* Nr.1: Summe mit .reduce()
    Ziel: die Gesamtsumme aller Zahlen im Array berechnen 

const zahlen = [5, 10, 15, 20];

const gesamtSumme = zahlen.reduce((acc, zahl) => {
  return acc + zahl;
}, 0);

console.log(gesamtSumme);*/
// .reduce() läuft durch jedes Element des Arrays
// acc = Akkumulator (der aktuelle Zwischenstand)
// zahl = currentValue (aktuelle Zahl aus dem Array)
// 0 am Ende = Startwert von acc

/* Nr.2: Größter Wert mit .reduce()
    Ziel: Finde den höchsten Wert im Array

const punkte = [12, 55, 4, 98, 34, 76];

const groeßterWert = punkte.reduce((acc, punkt) => {
  return punkt > acc ? punkt : acc;
}, 0);

console.log(groeßterWert);*/
// acc ist der aktuelle Maximalwert
// punkt ist die aktuelle Zahl im Array
// der ternary Operator prüft, wenn punkt größer ist, wird er neuer Max-Wert, sonst bleibt der alte acc

/* Nr.3: Häufigkeiten zählen
    Ziel: Anzahl einzelne Tierart im Array durchzählen 

const tiere = ["Hund", "Katze", "Hund", "Vogel", "Katze", "Hund"];

const zählen = tiere.reduce((acc, tier) => {
  acc[tier] = (acc[tier] || 0) + 1;
  return acc;
}, {});

console.log(zählen);*/
// acc ist das Zwischenergebnis-Objekt, startet mit {}
// tier ist das aktuelle Element im Array
// (acc[tier] || 0) -> wenn der Tiername noch nicht existiert, wird 0 genommen, dann + 1 hochzählen
// return acc -> wichtig, damit reduce() das Zwischenergebnis weiterreicht

/*Nr.4: Objekt aus Array mit IDs bauen
    Ziel: Erstelle ein Objekt, in dem jede ID der zugehörige Name ist  

const nutzer = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Mira" },
  { id: 3, name: "Omar" },
];

const neueObjekt = nutzer.reduce((acc, benutzer) => {
  acc[benutzer.id] = benutzer.name; // id wird key, name wird Wert
  return acc;
}, {});

console.log(neueObjekt);    */
// in Js sind die Keys von Objekten immer Strings - selbst wenn man Zahlen verwendet - außer man benutzt ein Map-Objekt
// key = benutzer.id
// Wert = benutzer.name
// acc[key] = value(Wert)

/* Nr.5: Zahlen sammeln (größer als 10)
    Ziel: Sammle alle Zahlen > 10 in ein neues Array 

const zahlen = [5, 12, 3, 25, 7, 18, 1];

const großerAlsZehn = zahlen.reduce((acc, zahl) => {
  if (zahl > 10) {
    acc.push(zahl);
  }

  return acc;
}, []);

console.log(großerAlsZehn);     */
// starte mit einem Array als acc []
// Für jede Zahl im Array prüfen, ob die Zahl größer als 10 ist
// wenn ja -> acc.push(zahl)
// wenn nein -> weitermachen

/* Nr.6: Wortzähler
    Ziel: Zähle, wie oft jedes Wort in einem Satz vorkommt 

const text = "du bist cool ich bin cool zusammen sind wir super cool";
const wörter = text.split(" ");

const wortZählen = wörter.reduce((acc, wert) => {
  acc[wert] = (acc[wert] || 0) + 1;
  return acc;
}, {});

console.log(wortZählen);    */
// split(" ") teilt den Text in einzelne Wörter (Array);
