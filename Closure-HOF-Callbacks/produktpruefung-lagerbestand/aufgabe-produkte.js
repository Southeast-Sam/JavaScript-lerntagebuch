/* Nr.2: Produktprüfung mit Bedingung & Formatierung */

const produkte = [
  { name: "Monitor", preis: 199.99, kategorie: "Elektronik", lagerbestand: 3 },
  { name: "Tastatur", preis: 49.5, kategorie: "Elektronik", lagerbestand: 0 },
  { name: "Buch", preis: 12.99, kategorie: "Medien", lagerbestand: 7 },
  { name: "Lampe", preis: 29.99, kategorie: "Wohnen", lagerbestand: 5 },
];

// Ein Array mit allen Produktnamen, die auf Lager sind
const produkteAufLager = produkte
  .filter((l) => l.lagerbestand > 0)
  .map((l) => l.name);

// den gesamtwert aller verfügbaren Produkte berechnen
const gesamtwert = produkte
  .filter((l) => l.lagerbestand > 0)
  .reduce((acc, l) => acc + l.preis * l.lagerbestand, 0);

// ein neues Array mit Strings im Format, aber nur wenn das Produkt verfügbar ist

const produktStrings = produkte.map((l) => {
  if (l.lagerbestand > 0) {
    return `${l.name} [${l.kategorie}] - ${
      l.lagerbestand
    } Stück verfügbar - Einzelpreis: ${l.preis.toFixed(2)} €`;
  }
});

// Ausgabe
console.log("Produkte auf Lager:", produkteAufLager);
console.log("Gesamtwert aller Produkte:", gesamtwert.toFixed(2));
console.log("Produkt-Strings:", produktStrings.filter(Boolean)); // filter(Boolean) entfernt alle "undefined" Werte aus dem Array
