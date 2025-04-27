/* Nr.1: Objekt-Methoden
  Ziel: Objekt-Eigenschaften auslesen und prüfen 

const schueler = {
  name: "Ali",
  alter: 17,
  klasse: "12A",
  faecher: ["Mathe", "Deutsch", "Englisch"],
  istBestanden: true,
};

// Alle Keys (Eigenschaften) holen
const schuelerKeys = Object.keys(schueler);

// Alle Werte holen
const schuelerValues = Object.values(schueler);

// Key-Value-Paare holen
const schuelerEntries = Object.entries(schueler);

// Prüfen, ob das Property "Klasse" existiert
const hatKlasse = schueler.hasOwnProperty("klasse");

console.log(schuelerKeys);
console.log(schuelerValues);
console.log(schuelerEntries);
console.log(hatKlasse);
*/

// ---------------------------------------------------------------------------------

/* Nr.2: Produktmanager (Array-Methoden mit Funktionen)

const produkte = [
  { name: "Schuhe", preis: 120 },
  { name: "Hose", preis: 80 },
  { name: "Jacke", preis: 200 },
  { name: "T-Shirt", preis: 40 },
  { name: "Mütze", preis: 25 },
];

// Funktion: Produkte filtern, die teurer als Grenze sind
function filterTeureProdukte(produktArray, grenze) {
  const gefilterteArray = produktArray.filter(
    (produkt) => produkt.preis > grenze
  );
  return gefilterteArray;
}

// Funktion: Nur die Namen der Produkte holen
function getProduktNamen(produktArray) {
  return produktArray.map((produkt) => produkt.name);
}

// Funktion: Gesamtpreis aller Produkte berechnen
function berechneGesamtpreis(produktArray) {
  return produktArray.reduce((summe, produkt) => summe + produkt.preis, 0);
}

// Funktion benutzen
const teureProdukte = filterTeureProdukte(produkte, 50);
const produktNamen = getProduktNamen(teureProdukte);
const gesamtpreis = berechneGesamtpreis(produkte);

// Ergebnisse
console.log("Produkte teurer als 50€:", teureProdukte);
console.log("Namen der teuren Produkte:", produktNamen);
console.log("Gesamtpreis aller Produkte:", gesamtpreis);
*/

// ---------------------------------------------------------------------------------

/* Nr.3: Tiermanager 

const tiere = [
  { art: "Hund", gewicht: 30 },
  { art: "Katze", gewicht: 5 },
  { art: "Elefant", gewicht: 5000 },
  { art: "Maus", gewicht: 0.5 },
  { art: "Pferd", gewicht: 400 },
];

// Tiere herausfiltern, deren Gewich größer als grenze ist
function filterSchwereTiere(tierArray, grenze) {
  const tierGewicht = tierArray.filter((tier) => tier.gewicht > grenze);
  return tierGewicht;
}

// Arten der Tiere (Hund, Katze, etc.) in ein neues Array holen
function getTierArten(tierArray) {
  return tierArray.map((tier) => tier.art);
}

// Das gesamte Gewicht aller Tiere zusammenrechnen
function berechneGesamtGewicht(tierArray) {
  return tierArray.reduce((summe, kg) => summe + kg.gewicht, 0);
}

// Funktion benutzen
const schwereTiere = filterSchwereTiere(tiere, 10);
const tierArten = getTierArten(schwereTiere);
const gesamtGewicht = berechneGesamtGewicht(schwereTiere);

// Ergebnisse
console.log("Gefilterte Tiere:", schwereTiere);
console.log("Tier art:", tierArten);
console.log("Gesamte Gewicht:", gesamtGewicht);

*/

// ---------------------------------------------------------------------------------

/* Nr.4: Tier Gewichtslabel
   Jedem Tier ein Label ("leicht", "mittel", "schwer") basierend auf Gewicht zuordnen

const tiere = [
  { art: "Hund", gewicht: 30 },
  { art: "Katze", gewicht: 5 },
  { art: "Elefant", gewicht: 5000 },
  { art: "Maus", gewicht: 0.5 },
  { art: "Pferd", gewicht: 400 },
];

// Neues Array mit Label je nach Gewicht erstellen
function erstelleGewichtsLabel(tierArray) {
  return tierArray.map((tier) => {
    let label;
    if (tier.gewicht < 100) {
      label = "leicht";
    } else if (tier.gewicht <= 500) {
      label = "mittel";
    } else {
      label = "schwer";
    }

    return {
      art: tier.art,
      gewicht: tier.gewicht,
      label: label,
    };
  });
}

// Funktion aufrufen und Ergebnis speichern
const gewichtsLabel = erstelleGewichtsLabel(tiere);

// Ausgabe
console.log(gewichtsLabel);
*/

// ---------------------------------------------------------------------------------

/* Nr.5: Vogelmanager 

const voegel = [
  { art: "Spatz", gewicht: 0.03 },
  { art: "Adler", gewicht: 6 },
  { art: "Papagei", gewicht: 0.4 },
  { art: "Pinguin", gewicht: 20 },
  { art: "Strauß", gewicht: 150 },
];

// Neues Array mit Label je nach Gewicht erstellen
function erstelleGewichtsLabelVoegel(vogelArray) {
  return vogelArray.map((vogel) => {
    let label;
    if (vogel.gewicht < 0.5) {
      label = "winzig";
    } else if (vogel.gewicht <= 10) {
      label = "normal";
    } else {
      label = "schwer";
    }

    return {
      art: vogel.art,
      gewicht: vogel.gewicht,
      label: label,
    };
  });
}

// Funktion aufrufen und Ergebnis speichern
const manager = erstelleGewichtsLabelVoegel(voegel);

// Filtere alle winzigen Vögel heraus
const winzigeVoegel = manager.filter((vogel) => vogel.label === "winzig");

// Ausgabe
console.log(manager);
console.log(winzigeVoegel);
*/

// ---------------------------------------------------------------------------------

/* Nr.6: Film-Manager 

const filme = [
  { titel: "Inception", bewertung: 8.8 },
  { titel: "Interstellar", bewertung: 8.6 },
  { titel: "Tenet", bewertung: 7.5 },
  { titel: "Dunkirk", bewertung: 7.9 },
  { titel: "Memento", bewertung: 8.4 },
];

// Alle Filme heraus filtern, deren Bewertung größer als grenze ist
function filterTopFilme(filmArray, grenze) {
  const filmeFiltern = filmArray.filter((film) => film.bewertung > grenze);
  return filmeFiltern;
}

// Die Titel der Filme in ein neues Array holen
function getFilmtitel(filmArray) {
  return filmArray.map((film) => film.titel);
}

// Die durchschnittliche Bewertung aller Filme berechnen
function berechneDurchschnittBewertung(filmArray) {
  return filmArray.reduce((acc, film) => acc + film.bewertung, 0);
}

// Funktionen aufrufen und speichern
const topFilm = filterTopFilme(filme, 8.0);
const getTitel = getFilmtitel(topFilm);
const durchschnittBewertung =
  berechneDurchschnittBewertung(topFilm) / topFilm.length;

// Ausgabe
console.log("Gefilterte Filme:", topFilm);
console.log("Titel der Filme:", getTitel);
console.log("Durchschnittliche Bewertung:", durchschnittBewertung);
*/

// ---------------------------------------------------------------------------------

/* Nr.7: Buch-Manager

const buecher = [
  { titel: "Harry Potter", seiten: 500, gelesen: true },
  { titel: "Der Hobbit", seiten: 300, gelesen: false },
  { titel: "Clean Code", seiten: 450, gelesen: true },
  { titel: "1984", seiten: 328, gelesen: true },
  { titel: "Dune", seiten: 600, gelesen: false },
];

// Alle Bücher filtern, die gelesen wurden
function filterGeleseneBuecher(buchArray) {
  return buchArray.filter((buch) => buch.gelesen);
}

// Alle Bücher holen, die weniger als maxSeiten haben
function getKurzeBuecher(buchArray, maxSeiten) {
  const kurzeBuch = buchArray.filter((buch) => buch.seiten < maxSeiten);
  return kurzeBuch;
}

// Die Gesamtanzahl der Seiten aller Bücher im Array berechnen
function berechneGesamtseiten(buchArray) {
  return buchArray.reduce((summe, buch) => summe + buch.seiten, 0);
}

// Prüfen, ob es min. ein Buch gibt, das mehr Seiten hat als Seitengrenze
function hatDickesBuch(buchArray, seitenGrenze) {
  const buchPrüfen = buchArray.some((buch) => buch.seiten > seitenGrenze);
  return buchPrüfen;
}

// Prüfen, ob alle Bücher im Array gelesen sind
function alleBuecherGelesen(buchArray) {
  return buchArray.every((buch) => buch.gelesen);
}

// Bücher Label (kurz, normal, dick) als Objekt zurückgeben
function getBuecherLabel(buchArray) {
  return buchArray.map((buch) => {
    let label;
    if (buch.seiten < 350) {
      label = "kurzes Buch";
    } else if (buch.seiten <= 450) {
      label = "normales Buch";
    } else {
      label = "dickes Buch";
    }

    return {
      titel: buch.titel,
      seiten: buch.seiten,
      label: label,
    };
  });
}

// Funktion benutzen
const geleseneBuecher = filterGeleseneBuecher(buecher);
const kurzeBuecher = getKurzeBuecher(geleseneBuecher, 350);
const gesamtseiten = berechneGesamtseiten(geleseneBuecher); // oder buecher, je nach dem wie viele Bücher man gewählt hat
const dickesBuch = hatDickesBuch(geleseneBuecher, 450);
const buecherGelesen = alleBuecherGelesen(geleseneBuecher);
const buchLabel = getBuecherLabel(geleseneBuecher);

// Ausgabe
console.log("Gelesene Bücher:", geleseneBuecher);
console.log("kurze Bücher:", kurzeBuecher);
console.log("Gesamte Seiten der gewählten Bücher:", gesamtseiten);
console.log("Dickes Buch ausgewählt:", dickesBuch);
console.log("Sind alle ausgewählten Bücher fertig gelesen:", buecherGelesen);
console.log("Deine ausgewählten Bücher:", buchLabel);
*/

// ---------------------------------------------------------------------------------
