/*
let bibliothek = [];

// Ein neues Buch-Objekt ins Array einfügen
function buchHinzufuegen(bibliothek, titel, seiten, gelesen) {
  const neuesBuch = {
    titel: titel,
    seiten: seiten,
    gelesen: gelesen,
  };

  bibliothek.push(neuesBuch);
}

// Gibt schön alle Bücher aus
function zeigeAlleBuecher(bibliothek) {
  return bibliothek.map((buch) => ({
    titel: buch.titel,
    seiten: buch.seiten,
    gelesen: buch.gelesen,
  }));
}

// Gelesene Bücher filtern
function filterGeleseneBuecher(bibliothek) {
  return bibliothek.filter((buch) => buch.gelesen);
}

// Ungelesene Bücher filtern
function filterUngeleseneBuecher(bibliothek) {
  return bibliothek.filter((buch) => !buch.gelesen);
}

// Anzahl gelesene Bücher
function anzahlGeleseneBuecher(bibliothek) {
  return bibliothek.reduce((anzahl, buch) => {
    if (buch.gelesen) {
      return anzahl + 1;
    } else {
      return anzahl;
    }
  }, 0);
}

// Seiten anzahl alle Bücher berechnen
function gesamtSeitenzahl(bibliothek) {
  return bibliothek.reduce((summe, buch) => summe + buch.seiten, 0);
}

// Bücher hinzufügen
buchHinzufuegen(bibliothek, "Harry Potter", 500, true);
buchHinzufuegen(bibliothek, "Der Hobbit", 300, false);
buchHinzufuegen(bibliothek, "Clean Code", 450, true);
buchHinzufuegen(bibliothek, "1984", 328, true);
buchHinzufuegen(bibliothek, "Dune", 600, false);

// Alle Bücher anzeigen
console.log("Alle Bücher:");
console.log(zeigeAlleBuecher(bibliothek));

// Gelesen Bücher filtern
console.log("Gelesene Bücher:");
console.log(filterGeleseneBuecher(bibliothek));

// Ungelesene Bücher filtern
console.log("Ungelesene Bücher:");
console.log(filterUngeleseneBuecher(bibliothek));

// Anzahl gelesene Bücher
console.log("Anzahl der gelesene Bücher");
console.log(anzahlGeleseneBuecher(bibliothek));

// Gesamtzahl aller Seiten
console.log("Gesamtzahl der Seiten aller Bücher:");
console.log(gesamtSeitenzahl(bibliothek));
*/
