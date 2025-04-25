/* filter() hat 3 mögliche Parameter:
z.B.: array.filter((element, index, array) => {...})
Parameter:
element = Aktuelles Element im Array
index = Index des Elements (optional)
array = Das gesamte Array (optional) */

/* Nr.1: Nur gerade Zahlen herausfiltern
    Ziel: Ein neues Arry mit nur den geraden Zahlen 

const zahlen = [1, 2, 3, 4, 5, 6, 7, 8];

const geradeZahlen = zahlen.filter((zahl) => {
  return zahl % 2 === 0;
});

console.log(geradeZahlen);  */
// .filter() geht durch jedes Element im Array
// für jede Zahl prüft es, ob es durch 2 teilbar ist: zahl % 2 === 0
// .filter gibt nur das zurück, was true ergibt - aber nur mit den Dingen, die man behalten will

/* Nr.2: Verfügbare Produkte
    Ziel: neues Array mit nur den Produkten erstellen, bei denen die Anzahl ("bestand")
    größer als 0 ist 

const produkte = [
  { name: "Tastatur", bestand: 5 },
  { name: "Maus", bestand: 0 },
  { name: "Monitor", bestand: 3 },
  { name: "USB-Kabel", bestand: 0 },
  { name: "Headset", bestand: 7 },
];

const bestanden = produkte.filter((produkt) => produkt.bestand > 0);

console.log(bestanden);     */

// .filter() läuft über jedes Produkt
// Es prüft: produkt.bestand > 0
// Wenn true → Produkt kommt ins neue Array
// Wenn false → wird ignoriert

/* Nr.3: Prüfungsergebnisse filtern
    Ziel: nur die Schüler zurück, die bestanden haben UND min. 18 Jahre alt sind 

const schüler = [
  { name: "Ali", alter: 17, bestanden: true },
  { name: "Mira", alter: 19, bestanden: false },
  { name: "Omar", alter: 18, bestanden: true },
  { name: "Lina", alter: 16, bestanden: true },
  { name: "Tarek", alter: 20, bestanden: true },
];

const bestanden = schüler.filter(
  (ergebnis) => ergebnis.alter >= 18 && ergebnis.bestanden
);
console.log(bestanden);
*/

/* Nr.4: Nur relevante Events anzeigen
     Ziel : Gib nur die Events zurück, bei denen:
     1. teilgenommen: true
     2. Kategorie ist entweder "Workshop" oder "Webinar" 

const events = [
  { titel: "JavaScript Basics", kategorie: "Workshop", teilgenommen: true },
  { titel: "CSS für Fortgeschrittene", kategorie: "Kurs", teilgenommen: true },
  { titel: "React Deep Dive", kategorie: "Webinar", teilgenommen: false },
  { titel: "HTML Einsteiger", kategorie: "Workshop", teilgenommen: true },
  { titel: "Node.js Crashkurs", kategorie: "Webinar", teilgenommen: true },
];

const neueEvent = events.filter(
  (thema) =>
    thema.teilgenommen &&
    (thema.kategorie === "Webinar" || thema.kategorie === "Workshop")
);
console.log(neueEvent);
*/

/* Nr.5: Artikel nach Suchbegriff filtern
    Ziel: nur die Artikel zurückgeben, deren Titel den Begriff "js" enthalten
    (Groß- und Kleinschreibung ignorieren!) 

const artikel = [
  { titel: "Lerne HTML ", views: 150 },
  { titel: "CSS Crashkurs", views: 200 },
  { titel: "Modernes JavaScript", views: 300 },
  { titel: "React mit Hooks", views: 250 },
  { titel: "JS Einsteiger Guide", views: 180 },
];

const artikelZurück = artikel.filter((thema) =>
  thema.titel.toLowerCase().includes("js")
);
console.log(artikelZurück);     */

// Alles klein machen: .toLowerCase()
// Dann .includes("js") prüfen
