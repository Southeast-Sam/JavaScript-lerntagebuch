/* Nr.3: Kursbewertungssystem */

const kurse = [
  {
    titel: "JavaScript Basics",
    bewertung: 4.8,
    teilnehmer: 320,
    kategorie: "Programmieren",
  },
  {
    titel: "Einführung in KI",
    bewertung: 4.9,
    teilnehmer: 180,
    kategorie: "Technologie",
  },
  {
    titel: "Excel für Anfänger",
    bewertung: 4.2,
    teilnehmer: 270,
    kategorie: "Office",
  },
  {
    titel: "Python Crashkurs",
    bewertung: 3.8,
    teilnehmer: 150,
    kategorie: "Programmieren",
  },
  {
    titel: "WordPress Aufbau",
    bewertung: 4.4,
    teilnehmer: 210,
    kategorie: "Webdesign",
  },
];

// Alle Kurse ausgeben, die eine Bewertung von min. 4.5 haben.
const hochbewerteteKurse = kurse
  .filter((k) => k.bewertung >= 4.5)
  .map((k) => `${k.titel} - (${k.bewertung})`);

// die durchschnittliche Bewertung aller ProgrammierenKurse - mit 2 Nachkommastellen
const progKurse = kurse.filter((k) => k.kategorie === "Programmieren");
const durchschnittsBewertung =
  progKurse.reduce((acc, k) => acc + k.bewertung, 0) / progKurse.length;

// Hier wird parseFloat verwendet, um sicherzustellen, dass die Ausgabe eine Zahl ist und toFixed(2) sorgt dafür, dass nur 2 Nachkommastellen angezeigt werden.
const durchschnittsBewertung2 = parseFloat(durchschnittsBewertung.toFixed(2));

// ein Array mit einem String im Format, nur für Kurse mit mehr als 200 Teilnehmern
const kursStrings = kurse.map((k) => {
  if (k.teilnehmer > 200) {
    return `📚 ${k.titel} - ${k.teilnehmer} Teilnehmer - Bewertung: ${k.bewertung} ⭐️`;
  }
});

// Ausgabe
console.log("Hochbewertete Kurse:", hochbewerteteKurse);
console.log(
  "Durchschnittliche Bewertung der Programmierkurse:",
  durchschnittsBewertung2
);
console.log("Kurs-Strings:", kursStrings.filter(Boolean)); // filter(Boolean) entfernt alle "undefined" Werte aus dem Array
