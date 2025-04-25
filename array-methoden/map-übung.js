/* .map() kann man bis zu 3 Parameter in die Callback Funktion schreiben:
z.B.: array.map((element, index, array) => {...})
Bedeutung Parameter: 
element = aktuelles element im Array
index = aktuelle Position im Array (0-basiert)
array = das komplette Array selbst */

/* Nr.1: .map()
    Zahlen verdoppeln mit .map()
    Ziel: ein neues Array mit verdoppelten Werten 

const zahlen = [2, 4, 6, 8];

const verdoppeln = zahlen.map((zahl) => zahl * 2);

console.log(verdoppeln);    */
// .map() gibt neues Array zurück
// Man musst das Ergebnis speichern, wenn man es braucht.
// Arrow funtion reicht - kein console.log im Callback nötig
// .map() verändert jedes Element - gibt neues Array mit gleicher Länge

/* Nr.2: Name großschreiben 
    Ziel: ein neues Array erstellen, in dem alle Namen in Großbuchstaben sind

const namen = ["Ali", "mira", "OMAR", "lina"];

const groß = namen.map((name) => {
  return name.toUpperCase();
});

console.log(groß);      */

// .toUpperCase() macht alles groß
// das neue Array wird in groß gespeichert

/* Nr.3: Preise erhöhen 
    Ziel: Erhöhe den Preis jedes Produkts um 10% 

const produkte = [
  { name: "Buch", preis: 20 },
  { name: "Stift", preis: 5 },
  { name: "Tasche", preis: 50 },
];

const neuePreise = produkte.map((produkt) => {
  return {
    name: produkt.name,
    preis: (produkt.preis * 1.1).toFixed(2),
  };
});

console.log(neuePreise);    */
// name: bleibt gleich
// preis: wird mit 1.1 multipliziert (10%)
// .toFixed(2) -> auf 2 Nachkommastellen runden, aber nicht optimal, wenn man der Wert weiter berechnen will
// jedes neue Objekt wird ins neue Array neuePreiese gepackt,

/* Nr.4: Filme markieren 
    Ziel: 1 neues Array von Filmtiteln
    Alle Filme, die älter als 2000 sind, sollen als "Klassiker" als Titel dranhängen 

const filme = [
  { titel: "Matrix", jahr: 1999 },
  { titel: "Inception", jahr: 2010 },
  { titel: "Pulp Fiction", jahr: 1994 },
  { titel: "Intersteller", jahr: 2014 },
];

const filmKlassiker = filme.map((film) => {
  if (film.jahr < 2000) {
    return film.titel + "(Klassiker)";
  } else {
    return film.titel;
  }
});

console.log(filmKlassiker);     */

// .map() läuft über jedes Objekt
// wenn das Jahr älter als 2000 ist ( < 2000 ) -> Titel + (Klassiker) dranhängen
// sonst -> Titel normal lassen
// Ergebnis ist ein neues Array von Strings

/* Nr.5: Bestellungen nummerieren und anzeigen
    Ziel: 1 neues Array mit formatierter Bestellübersicht erstellen 

const bestellungen = [
  "Pizza Salami",
  "Burger Menü",
  "Veganer Wrap",
  "Sushi Box",
];

const bestellÜbersicht = bestellungen.map((gericht, index) => {
  let übersicht = `${index + 1}. Bestellung: ${gericht} (${gericht.length} Zeichen)`;
  return übersicht;
});
console.log(bestellÜbersicht);      */
// Template String kann in eine Variable gespeichert werden
// ${index + 1} für menschlich nummeriert
