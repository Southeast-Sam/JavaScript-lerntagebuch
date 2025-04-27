let produkte = [];

// Produkte hinzufügen (Name, Preis, Kategorie)
function produktHinzufuegen(produktArray, name, preis, kategorie) {
  const neueProdukt = {
    name: name,
    preis: preis,
    kategorie: kategorie,
  };

  produktArray.push(neueProdukt);
}

// Alle Produkte anzeigen
function zeigeAlleProdukte(produktArray) {
  return produktArray.map((produkt) => ({
    name: produkt.name,
    preis: produkt.preis,
    kategorie: produkt.kategorie,
  }));
}

// Kategorie filtern (z.B.: "Elektronik", "Kleidung")
function filterProdukteNachKategorie(produktArray, kategorie) {
  return produktArray.filter((produkte) => produkte.kategorie === kategorie);
}

// Gesamtkosten aller Produkte berechnen
function berechneGesamtpreis(produktArray) {
  return produktArray.reduce((summe, produkt) => summe + produkt.preis, 0);
}

// Prüfen, ob min. ein teures Produkt vorhanden ist
function hatTeuresProdukt(produktArray, preisGrenze) {
  return produktArray.some((produkt) => produkt.preis > preisGrenze);
}

// Produkte Name alphabetisch sortieren
function sortiereProdukteNachName(produktArray) {
  return produktArray.map((produkt) => produkt.name).sort();
}

// Produkte hinzufügen
produktHinzufuegen(produkte, "iPhone", 1200, "Elektronik");
produktHinzufuegen(produkte, "T-Shirt", 30, "Kleidung");
produktHinzufuegen(produkte, "Fernseher", 800, "Elektronik");
produktHinzufuegen(produkte, "Schuhe", 120, "Kleidung");

// Alle Produkte zeigen
console.log("Alle Produkte:");
console.log(zeigeAlleProdukte(produkte));

// Produkte nach Kategorien filtern
console.log("Elektronische Produkte:");
console.log(filterProdukteNachKategorie(produkte, "Elektronik"));

// Gesamte Preis
console.log("Gesamt Preis:");
console.log(berechneGesamtpreis(produkte));

// Teures Produkt?
console.log("Ist da ein teures Produkt dabei:");
console.log(hatTeuresProdukt(produkte, 1000));

// Produkte Namen alphabetisch sortieren
console.log("Deine Produkte:");
console.log(sortiereProdukteNachName(produkte));
