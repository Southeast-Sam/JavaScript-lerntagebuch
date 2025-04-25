/* Method Chaining heißt mehrere Methoden nacheinander direkt aufrufe ohne jedes mal neue
    Variablen zwischenspeichern. */

/* Nr.1: Einkaufswagen zusammenrechnen
    Ziel: 
    1. Filtere nur Produkte mit mindestens 5 Stück Bestand
    2. Verdopple die Preise der gefilterten Produkte (Rabatt wurde gestrichen!)
    3. Summiere alle neuen Preise zusammen 

const produkte = [
  { name: "Tastatur", preis: 30, bestand: 5 },
  { name: "Maus", preis: 10, bestand: 3 },
  { name: "Monitor", preis: 150, bestand: 7 },
  { name: "USB-Kabel", preis: 5, bestand: 2 },
  { name: "Headset", preis: 50, bestand: 5 },
];

const rechnung = produkte
  .filter((b) => b.bestand >= 5)
  .map((b) => b.preis * 2)
  .reduce((acc, zahl) => acc + zahl, 0);

console.log(rechnung);
*/

/* Nr.2: Bücherübersicht erstellen
    Ziel:
    1. Filtere nur Bücher mit min. 300 Seiten
    2. Passe die Titel an - hänge "DICKES BUCH" an den Titel dran
    3. Gib die Anzahl der Bücher aus 

const bücher = [
  { titel: "JavaScript Basics", seiten: 250 },
  { titel: "CSS Masterclass", seiten: 320 },
  { titel: "HTML für Anfänger", seiten: 200 },
  { titel: "React in Depth", seiten: 450 },
  { titel: "Node.js Guide", seiten: 150 },
];

const anzahl = bücher
  .filter((b) => b.seiten >= 300)
  .map((b) => b.titel + "(DICKES BUCH)").length;

console.log(anzahl);
*/

/* Nr.3: Bestellungen analysieren mit Method Chaining
    Ziel: 
    1. Filtere alle Bestellungen mit Preis über 20€
    2. Erhöhe jeden Preis um 10% (wegen Steuer)
    3. Filtere danach nochmal alle Bestellungen, deren neuer Preis über 50€ ist
    4. Summiere alle diese neuen Preise zusammen

const bestellungen = [
  { produkt: "Tastatur", preis: 30 },
  { produkt: "Maus", preis: 10 },
  { produkt: "Monitor", preis: 200 },
  { produkt: "USB-Kabel", preis: 200 },
  { produkt: "Headset", preis: 40 },
];

const neuePreise = bestellungen
  .filter((n) => n.preis > 20)
  .map((n) => n.preis * 1.1)
  .filter((preis) => preis > 50)
  .reduce((acc, zahl) => acc + zahl, 0);

console.log(neuePreise.toFixed(2));     */

// Alles wird in einer einzigen Verkettung (Chaining) erledigt – keine Zwischenvariablen
// Ergebnis: Eine einzige Zahl (Summe der passenden Bestellungen)

/* Nr.4: Supermarkt Umsatzanalyse
    Ziel: 
    1. Filtere alle Produkte, deren Bestand min. 10 Stück beträgt
    2. Gib jedem dieser Produkte +5% Bonus auf den Preis (z.B.: für Verpackungskosten)
    3. Filtere dann nur die Produkte, deren neuer Preis min. 50€ beträgt
    4. Multipliziere den neuen Preis mit der Stückzahl (bestand), um den Gesamtumsatz pro Produkt zu berechnen
    5. Summiere den gesamten Umsatz aller dieser Produkte 

const produkte = [
  { name: "Fernseher", preis: 450, bestand: 5 },
  { name: "Kühlschrank", preis: 700, bestand: 12 },
  { name: "Waschmaschine", preis: 650, bestand: 8 },
  { name: "Mikrowelle", preis: 80, bestand: 20 },
  { name: "Toaster", preis: 30, bestand: 25 },
  { name: "Staubsauger", preis: 90, bestand: 15 },
];

const umsatz = produkte
  .filter((u) => u.bestand >= 10)
  .map((p) => ({
    name: p.name,
    preis: p.preis * 1.05,
    bestand: p.bestand,
  }))
  .filter((p) => p.preis >= 50)
  .reduce((acc, p) => acc + p.preis * p.bestand, 0);

console.log(umsatz);        */

// filter(): nur Produkte mit bestand >= 10
// map(): Preis +5% anpassen (Verpackungskosten), aber bestand behalten
// filter(): neue Preise >= 50 behalten
// reduce(): Preis x bestand -> alle aufsummieren

/* Nr.5: Supermarkt Auswertung
    Ziel: 
    1. Filtere alle Produkte, die mehr als 5 Bewertungen haben
    2. Gib jedem dieser Produkte 10% Rabatt auf den Preis
    3. Filtere danach nur die Produkte, deren neuer Preis unter 100€ liegt
    4. Passe die Produktnamen an: Hänge " (Top Angebot!) " an den Namen dran
    5. Summiere alle neuen Preise zusammen  

const produkte = [
  { name: "TV", preis: 600, bewertungen: 8 },
  { name: "Kopfhörer", preis: 80, bewertungen: 12 },
  { name: "Smartphone", preis: 400, bewertungen: 4 },
  { name: "Tablet", preis: 250, bewertungen: 10 },
  { name: "Ladekabel", preis: 20, bewertungen: 25 },
  { name: "Kamera", preis: 500, bewertungen: 6 },
];

const auswertung = produkte
  .filter((p) => p.bewertungen > 5)
  .map((p) => ({
    name: p.name,
    preis: p.preis * 0.9,
  }))
  .filter((p) => p.preis < 100)
  .map((p) => ({
    name: p.name + "(Top Angebot)",
    preis: p.preis,
  }))
  .reduce((acc, p) => acc + p.preis, 0);

console.log(auswertung);
*/

/* Nr.6: Mega-Event-Manager
    Ziel: 
    1. Filtere alle Events, die mehr als 50 Teilnehmer haben
    2. Passe die Eventnamen an:
        - Falls das Event online ist, hänge "(Online)" an den Namen dran
        - Falls nicht, hänge "(Vor Ort)" an den Namen dran 
    3. Verdopple die Ticketpreise für alle Events mit mehr als 100 Teilnehmern
    4. Filtere danach nur die Events, deren Ticketpreis unter 150€ ist
    5. Summiere alle Ticketpreise zusammen */

const events = [
  { titel: "JavaScript Konferenz", teilnehmer: 120, online: true, preis: 90 },
  { titel: "CSS Workshop", teilnehmer: 45, online: false, preis: 50 },
  { titel: "React Meetup", teilnehmer: 80, online: true, preis: 70 },
  { titel: "Node.js Bootcamp", teilnehmer: 30, online: false, preis: 40 },
  { titel: "Webdesign Seminar", teilnehmer: 60, online: false, preis: 100 },
];

const eventManager = events
  .filter((p) => p.teilnehmer > 50)
  .map((p) => ({
    titel: p.titel + (p.online ? "(Online)" : "(Vor Ort)"),
    preis: p.teilnehmer > 100 ? p.preis * 2 : p.preis,
  }))
  .filter((p) => p.preis < 150)
  .reduce((acc, p) => acc + p.preis, 0);

console.log(eventManager);
