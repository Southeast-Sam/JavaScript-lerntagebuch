/* Nr.1: 
  - Erstelle ein neues Array mit den Namen aller Produkte, die mehr als 50€ kosten.
  - Prüfe danach, ob mindestens ein Produkt teurer als 150€ ist.
  - Berechne am Ende den Gesamtpreis aller Produkte. 

const produkte = [
  { name: "Schuhe", preis: 120 },
  { name: "Hose", preis: 80 },
  { name: "Jacke", preis: 200 },
  { name: "T-Shirt", preis: 40 },
  { name: "Mütze", preis: 25 },
];

// 1. Neue Liste: Produkte über 50€
const teureProdukte = produkte.filter((p) => p.preis > 50);

// 2. Nur Name und Preis holen (hier könnte man noch map machen, ist aber optional)
const namenUndPreise = teureProdukte.map((p) => ({
  name: p.name,
  preis: p.preis,
}));

// 3. Prüfen, ob mindestens ein Produkt über 150€ ist
const mindestensEinTeuer = teureProdukte.some((p) => p.preis > 150);

// 4. Gesamtpreis aller Produkte berechnen
const gesamtPreis = produkte.reduce((acc, p) => acc + p.preis, 0);

console.log(namenUndPreise);
console.log("min. ein Produkt über 150€: ", mindestensEinTeuer);
console.log("Gesamtpreis:", gesamtPreis);

// Wenn die Methode ein Array zurückgibt und es logisch Sinn macht zu kombinieren -> Chaining benutzen
// sonst Schritte einzeln machen (wenn die Methode etwas anderes zurückgibt wie true/fals, einzelne Zahl, String usw.)
*/

/* Nr.2: Entscheide:
  - Was kannst du chainen?
  - Wo musst du trennen 

const zahlen = [3, 10, 18, 7, 22, 5, 13];

// Zahlen größer als 8 rausfiltern und diese mit 2 multiplizieren
const neueZahlen = zahlen.filter((p) => p > 8).map((p) => p * 2);

// mindestens ein Zahl dieser verdoppelten Zahlen prüfen, der größer als 30 ist
const zahlPrüfen = neueZahlen.some((p) => p > 30);

// Summe aller Originalzahlen berechnen
const summe = zahlen.reduce((acc, zahl) => acc + zahl, 0);

console.log(neueZahlen);
console.log("min. ein Zahl größer als 30:", zahlPrüfen);
console.log("Summe aller Originalzahlen:", summe);
*/

/* Nr.3 

const produkte = [
  { name: "iPhone", preis: 1200 },
  { name: "Laptop", preis: 1500 },
  { name: "Headphones", preis: 200 },
  { name: "Smartwatch", preis: 350 },
  { name: "Monitor", preis: 400 },
];

// Produkte filtern und aufsteigend sortieren 
const preisVonProdukten = produkte
  .filter((p) => p.preis > 300)
  .sort((a, b) => a.preis - b.preis);

// neues Array erstellen, das nur die Namen der Produkte enthält
const namenDerProdukte = preisVonProdukten.map((p) => p.name);

// mindestens ein Produkt der gefilterten Produkten günstiger als 1000€
const minProdukt = preisVonProdukten.some((p) => p.preis < 1000);

// Gesamtpreis aller gefilterten Produkte
const gesamtpreis = preisVonProdukten.reduce(
  (acc, zahl) => acc + zahl.preis,
  0
);

console.log(preisVonProdukten);
console.log(namenDerProdukte);
console.log("min. ein Produkt günstiger als 1000€:", minProdukt);
console.log("Gesamtpreis aller gefilterten Produkte:", gesamtpreis);
*/

/* Nr.4 

const kunden = [
  { name: "Ali", bestellungen: [100, 200, 300] },
  { name: "Zara", bestellungen: [50, 150] },
  { name: "Murat", bestellungen: [400, 1000, 1200] },
  { name: "Elif", bestellungen: [75, 85] },
  { name: "Berkan", bestellungen: [500] },
];

// kunden finden, deren min eine Bestellung größer als 500€ ist
const kundeFinden = kunden.filter((p) => p.bestellungen.some((b) => b > 500));

// Ein neues Array erstellen mit Namen und Bestellungen dieser Kunden
const kundeInfo = kundeFinden.map((p) => ({
  name: p.name,
  bestellungen: p.bestellungen,
}));

// Die Kunden alphabetisch nach Namen sortieren
const namenSortieren = kundeInfo.map((p) => p.name).sort();

// Gesamtwert aller Bestellungen dieser ausgewählten Kunden berechnen
const gesamtWert = kundeInfo.reduce((acc, kunde) => {
  const bestellungSumme = kunde.bestellungen.reduce(
    (summe, zahl) => summe + zahl,
    0
  );
  return acc + bestellungSumme;
}, 0);
// Für jeden Kunden -> nimm seine Bestellungen -> summiere sie zusammen -> dann addiere zum Gesamtergebnis

// Prüfen, ob alle diese Kunden min. 2 Bestellungen haben
const minBestellung = kundeInfo.every((p) => p.bestellungen.length >= 2);

console.log("Gefundene Kunden:", kundeFinden);
console.log("Sortierte Namen:", namenSortieren);
console.log("Gesamtpreis aller Bestellungen:", gesamtWert);
console.log("Alle Kunden haben min. 2 Bestellungen:", minBestellung);
console.log(kundeInfo);

*/

/* Nr.5 

const fahrzeuge = [
    { typ: "Auto", ps: 150, farbe: "rot" },
    { typ: "Motorrad", ps: 95, farbe: "schwarz" },
    { typ: "LKW", ps: 400, farbe: "weiß" },
    { typ: "Quad", ps: 70, farbe: "grün" },
    { typ: "SUV", ps: 250, farbe: "blau" },
  ];
  
  // Alle Fahrzeuge filtern, die mehr als 100 PS haben
  const fahrzeugFinden = fahrzeuge.filter((p) => p.ps > 100);
  
  // Ein neues Array mit Typen, PS und farbe dierser Fahrzeuge erstellen
  const fahrzeugInfo = fahrzeugFinden.map((p) => ({
    typ: p.typ,
    ps: p.ps,
    farbe: p.farbe,
  }));
  
  // Fahrzeug Typen alphabetisch sortieren
  const typenSortieren = fahrzeugInfo.map((p) => p.typ).sort();
  
  // Prüfen, ob alle gefilterten Fahrzeuge eine Farbe haben, die länger als 3 Buchstaben ist
  const fahrzeugPrüfen = fahrzeugInfo.every((p) => p.farbe.length > 3);
  
  // die durchschnittliche PS-Zahl aller gefilterten Fahrzeuge berechnen
  const durchschnittPs =
    fahrzeugInfo.reduce((acc, zahl) => acc + zahl.ps, 0) / fahrzeugInfo.length;
  
  console.log("Gefundene Fahrzeuge:", fahrzeugFinden);
  console.log("Sortierte Typen:", typenSortieren);
  console.log(
    "Alle Fahrzeuge haben eine Farbe, die länger als 3 Buchstaben ist:",
    fahrzeugPrüfen
  );
  console.log("Durchschnittliche PS-Zahl:", durchschnittPs);
*/
