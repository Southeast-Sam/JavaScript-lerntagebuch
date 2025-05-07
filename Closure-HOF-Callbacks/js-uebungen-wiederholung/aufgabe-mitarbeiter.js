/* Nr.1: Mitarbeiter-Auswertung */

const mitarbeiter = [
  { name: "Ali", alter: 25, abteilung: "Logistik" },
  { name: "Mira", alter: 32, abteilung: "IT" },
  { name: "Jonas", alter: 28, abteilung: "IT" },
  { name: "Sina", alter: 40, abteilung: "Buchhaltung" },
];

// Alle Namen der Mitarbeiter in der IT-Abteilung in einem Array aus.

const MitarbeiterIT = mitarbeiter
  .filter((m) => m.abteilung === "IT")
  .map((m) => m.name);

// Durchschnittsalter der Mitarbeiter berechnen und das Ergebnis mit 2 Nachkommastellen ausgebnen
const durchschnittsalter =
  mitarbeiter.reduce((acc, m) => acc + m.alter, 0) / mitarbeiter.length;
const durchschnittsalter2 = parseFloat(durchschnittsalter.toFixed(2)); // Hier wandelt parseFloat den Durchschnitt in eine Zahl um und toFixed(2) sorgt dafür, dass nur 2 Nachkommastellen angezeigt werden.

// Ein neues Array mit Strings im Format erstellen: "Name (Abteilung) ist X Jahre alt"
const mitarbeiterStrings = mitarbeiter.map(
  (m) => `${m.name} (${m.abteilung}) ist ${m.alter} Jahre alt`
);

// Ausgabe

console.log(" Mitarbeiter in der IT-Abteilung:", MitarbeiterIT);
console.log("Durchschnittsalter der Mitarbeiter:", durchschnittsalter2);
console.log("Mitarbeiter-Strings:", mitarbeiterStrings);
