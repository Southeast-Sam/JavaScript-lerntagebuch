/* Nr.32:  Bewertungsauswertung 

const bewertungen = [
  { nutzer: "Ali", sterne: 4 },
  { nutzer: "Lina", sterne: 5 },
  { nutzer: "Hassan", sterne: 3 },
  { nutzer: "Murat", sterne: 4 },
  { nutzer: "Lina", sterne: 4 },
  { nutzer: "Ali", sterne: 2 },
];

function countBewertungenMit4Sternen(array) {
  let zähler = 0;

  for (const bewertung of array) {
    if (bewertung.sterne === 4) {
      zähler++;
    }
  }
  return zähler;
}

console.log(countBewertungenMit4Sternen(bewertungen));
*/

/* Nr.33: Aufgaben-Statistik pro Benutzer 

const benutzer = [
  {
    name: "Ali",
    aufgaben: [
      { titel: "Einkaufen", erledigt: true },
      { titel: "Staubsaugen", erledigt: false },
    ],
  },
  {
    name: "Lina",
    aufgaben: [
      { titel: "Emails", erledigt: true },
      { titel: "Bericht", erledigt: true },
    ],
  },
  {
    name: "Hassan",
    aufgaben: [{ titel: "Lernen", erledigt: false }],
  },
];

function countUnerledigteAufgaben(array) {
  let zähler = 0;

  for (const nutzer of array) {
    for (const fehlen of nutzer.aufgaben) {
      if (!fehlen.erledigt) {
        zähler++;
      }
    }
  }

  return zähler;
}

console.log(countUnerledigteAufgaben(benutzer));
*/

/* Nr.34: Unerledigte Aufgaben pro Benutzer 

const benutzer = [
  {
    name: "Ali",
    aufgaben: [
      { titel: "Einkaufen", erledigt: true },
      { titel: "Staubsaugen", erledigt: false },
    ],
  },
  {
    name: "Lina",
    aufgaben: [
      { titel: "Emails", erledigt: true },
      { titel: "Bericht", erledigt: true },
    ],
  },
  {
    name: "Hassan",
    aufgaben: [{ titel: "Lernen", erledigt: false }],
  },
];

function getUnerledigteAufgabenProBenutzer(array) {
  let result = [];

  for (const nutzer of array) {
    let zähler = 0;

    for (const offen of nutzer.aufgaben) {
      if (!offen.erledigt) {
        zähler++;
      }
    }

    result.push({ name: nutzer.name, Offen: zähler });
  }

  return result;
}

console.log(getUnerledigteAufgabenProBenutzer(benutzer));
*/

/* Nr.35: Aktive Benutzer mit genug Aufgaben 

const benutzer = [
  {
    name: "Ali",
    aufgaben: [
      { titel: "A", erledigt: true },
      { titel: "B", erledigt: false },
      { titel: "C", erledigt: true },
    ],
  },
  {
    name: "Lina",
    aufgaben: [
      { titel: "A", erledigt: true },
      { titel: "B", erledigt: true },
    ],
  },
  {
    name: "Hassan",
    aufgaben: [
      { titel: "A", erledigt: false },
      { titel: "B", erledigt: false },
      { titel: "C", erledigt: false },
      { titel: "D", erledigt: true },
    ],
  },
];

function getAktiveBenutzer(array) {
  let newArray = [];

  for (const nutzer of array) {
    if (nutzer.aufgaben.length >= 3) {
      for (const aufgabe of nutzer.aufgaben) {
        if (!aufgabe.erledigt) {
          newArray.push(nutzer.name);
          break;
        }
      }
    }
  }

  return newArray;
}

console.log(getAktiveBenutzer(benutzer));
*/

/* Nr.36: "Fast fertig"-Benutzer 

const benutzer = [
  {
    name: "Ali",
    aufgaben: [
      { titel: "A", erledigt: true },
      { titel: "B", erledigt: false },
      { titel: "C", erledigt: true },
    ],
  },
  {
    name: "Lina",
    aufgaben: [
      { titel: "A", erledigt: false },
      { titel: "B", erledigt: false },
    ],
  },
  {
    name: "Hassan",
    aufgaben: [
      { titel: "A", erledigt: true },
      { titel: "B", erledigt: true },
    ],
  },
];

function getFastFertigBenutzer(array) {
  let newArray = [];

  for (const nutzer of array) {
    let zähler = 0; // Zähler pro benutzer

    for (const aufgabe of nutzer.aufgaben) {
      if (!aufgabe.erledigt) {
        zähler++;
      }
    }

    if (zähler === 1) {
      newArray.push(nutzer.name);
    }
  }
  return newArray;
}

console.log(getFastFertigBenutzer(benutzer));
*/

/* Nr.37: Bewertungs-Check pro Kurs 

const kurse = [
  { name: "JavaScript", bewertungen: [5, 4, 4, 5] },
  { name: "Englisch", bewertungen: [3, 2, 2] },
  { name: "Mathe", bewertungen: [1, 5, 2, 3] },
  { name: "Sport", bewertungen: [5, 5, 5] },
];

function getTopKurse(array) {
  let newArray = [];

  for (const kurs of array) {
    let istTop = true;

    for (const bewertung of kurs.bewertungen) {
      if (bewertung < 4) {
        istTop = false;
        break;
      }
    }

    if (istTop) {
      newArray.push(kurs.name);
    }
  }
  return newArray;
}

console.log(getTopKurse(kurse));
*/
