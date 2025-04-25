/* forEach() hat 3 mögliche Parameter:
z.B.: array.forEach(function(element, index, array) {...})
Parameter:
element = Aktuelle Element im Array
index = Position des Elements im Array
array = Das komplette Array (aber eher selten) */

/* Nr.1: -forEach() 
    Ziel: Jeden Namen im Array begrüßen

const namen = ["Ali", "Mira", "Omar"];

// eine Begrüßung für jedes Element im Array ausgeben
namen.forEach((name) => {
  console.log(`Hallo, ${name}! Schön dich zu sehen.`);
});
*/

/* Nr.2: Begrüßung mit Index
  Ziel: Für jeden Namen eine Begrüßung mit Position ausgeben 

const namen = ["Ali", "Mira", "Omar", "lina"];

namen.forEach((name, index) => {
  console.log(`${index + 1}. Hallo ${name}!`);
});   */

// index + 1, weil Nutzer 1 zählt, nicht 0
// name ist der aktuelle Name im Array
// index ist die Position im Array -> beginnt bei 0

/* Nr.3: Namen mit Länge anzeigen 
  Ziel: Gib für jeden Namen aus, wie viele Buchstaben er hat

const namen = ["Ali", "Mira", "Omar", "Lina"];

namen.forEach((name) => {
  let länge = name.length;
  console.log(`${name} hat ${länge} Buchstaben`);
});   */

// name.length gibt die Anzahl der Buchstaben

/* Nr.4: Nutzerdaten anzeigen 
  Ziel: FÜr jeden Nutzer soll Vorname + Alter ausgegebn werden

const nutzer = [
  { name: "Ali", alter: 21 },
  { name: "Mira", alter: 19 },
  { name: "Omar", alter: 25 },
];

nutzer.forEach((user) => {
  console.log(`${user.name} ist ${user.alter} Jahre alt.`);
});
*/

/* Nr.5: Aktive Nutzer anzeigen
  Ziel: nur die Namen der Nutzer ausgeben, bei denen active: true ist 

const nutzer = [
  { name: "Ali", active: true },
  { name: "Mira", active: false },
  { name: "Omar", active: true },
  { name: "Lina", active: false },
];

nutzer.forEach((user) => {
  if (user.active) {
    console.log(`${user.name} ist aktiv.`);
  }
});     */

// user.active wird überprüft
// wenn true -> gibt den Satz aus
// wenn false -> überspringen
