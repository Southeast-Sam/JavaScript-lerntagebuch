/* Nr.1: Callback + Higher Order Funktion 

function verarbeiteBenutzer(name, callback) {
  callback(name);
}

function sagHallo(name) {
  console.log("Hallo, " + name + "!");
}

verarbeiteBenutzer("Ali", sagHallo);
*/

/* Nr.2: Higher Order Function + Closure 

function erstelleBegrüßung(name) {
  return function () {
    console.log("Hallo, " + name + "!");
  };
}

let begrußeAli = erstelleBegrüßung("Ali");

begrußeAli();
*/

/* Nr.3

function führeAus(callback) {  //higher oder function
  callback();
}

function sagHallo() {       // callback
  console.log("Hallo Bruder!");
}

führeAus(sagHallo);
*/

/* Nr4: gibt Closure 

function erstelleZähler(startWert) {
  let zahl = startWert;

  return function () {
    zahl++;
    console.log(zahl);
  };
}

let zähler = erstelleZähler(5);

zähler();
zähler();
zähler();
*/

/* Nr.5: HOF + Callback + Closure 

function erstelleRechner(start) {
  let wert = start;

  return function (callback) {
    wert = callback(wert);
    return wert;
  };
}

function verdoppeln(x) {
  return x * 2;
}

let Rechner = erstelleRechner(5);

console.log(Rechner(verdoppeln));
console.log(Rechner(verdoppeln));
console.log(Rechner((x) => x + 10));
*/

/* Nr.6: HOF + Callback + Closure 

function erstelleLogger(startNachricht) {
  let wert = startNachricht;

  return function (callback) {
    console.log("START: " + wert);
    let ergebnis = callback(wert);
    console.log("CALLBACK: ", ergebnis);
    return ergebnis;
  };
}

function macheGroß(text) {
  return text.toUpperCase();
}

let logger = erstelleLogger(">> Starte Vorgang");
console.log(logger(macheGroß));
*/

/* Nr.7: Callback-Funktion 

function verarbeiteText(text, callback) {
  console.log("Start: ", text);
  return callback(text);
}

const ergebnis = verarbeiteText("ich bin cool", function (text) {
  return text.toUpperCase();
});

console.log("Ergebnis: ", ergebnis);
*/

/* Nr.8: Closure + HOF 

function erstelleBegrüßer(name) {
  return function () {
    console.log(`Hallo, ${name}! willkommen zurück!`);
  };
}
*/
/*ersteleBegrüßer("Ali")(); // doppelte Klammr => Funktion + direkter Aufruf*/
/*
const begruesser = erstelleBegrüßer("Ali");
begruesser(); */

/* Nr.8: closure-Zähler 

function erstelleZaehler() {
  let zahl = 0;

  return function () {
    zahl++;
    return zahl;
  };
}

const zaehler = erstelleZaehler();
console.log(zaehler());
console.log(zaehler());
console.log(zaehler());
*/

/* Nr.9: zwei unabhängige Zähler mit Closures 

function erstelleZaehler() {
  let zahl = 0;

  return function () {
    zahl++;
    console.log(zahl);
  };
}

const zaehler1 = erstelleZaehler();
const zaehler2 = erstelleZaehler();

zaehler1();
zaehler1();

zaehler2();
zaehler2();

zaehler1();
*/

/* Nr.10: Menü mit Aktionen (Closure + Callback) 

function erstelleMenü(nutzername) {
  return function (callback) {
    return callback(nutzername);
  };
}

const menüFürAli = erstelleMenü("Ali");

menüFürAli(function (name) {
  console.log(`🔐 ${name} hat sich eingeloggt!`);
});

menüFürAli(function (name) {
  console.log(`📁 ${name} öffnet die Dateien`);
});
*/

/* Nr.11: Aufgaben-Manager (mit Closure + optionalem Callback)
  Du sollst eine Funktion erstelleAufgabenManager() schreiben, die:
  - einen internen Aufgaben-Speicher (Array) hat
  - eine Funktion zurückgibt, mit der du neue Aufgaben hinzufügen kannst
  - zusätzlich kannst du beim Hinzufügen einen Callback übergeben, der z.B:
  eine Benachrichtigung ausgibt, wenn eine Aufgabe hinzugefügt wurde  

function erstelleAufgabenManager() {
  let aufgabenSpeicher = [];

  return {
    neueAufgabe: function (aufgabe, callback) {
      // speichern
      aufgabenSpeicher.push(aufgabe);

      //wenn callback existiert -> ausführen
      if (typeof callback === "function") {
        callback(aufgabe);
      }
    },

    zeigeAlle: function () {
      console.log(aufgabenSpeicher);
    },
  };
}

const manager = erstelleAufgabenManager();
manager.neueAufgabe("JavaScipt üben", function (a) {
  console.log(`📌 Aufgabe hinzugefügt: ${a}`);
});

manager.neueAufgabe("Pause machen");
manager.zeigeAlle();
*/

/* Nr.12: Event-Logger
  Schreib eine Funktion erstelleLogger, die:
  - sich alle Nachrichten merkt, die geloggt werden
  - eine Methode log() hat, die eine Nachricht speichert
  - einen optionalen Callback erlaubt, der ausgeführt wird, wenn eine Nachricht geloggt
  wurde
  - eine Methode zeigeLogs() hat, die alle bisherigen Nachrichten ausgibt

function erstelleLogger() {
  let nachrichten = [];

  return {
    log: function (nachricht, callback) {
      // speichern
      nachrichten.push(nachricht);

      // wenn Callback existiert -> ausführen
      if (typeof callback === "function") {
        callback(nachricht);
      }
    },

    zeigeAlle: function () {
      console.log(nachrichten);
    },
  };
}

const manager = erstelleLogger();
manager.log("App gestartet", function (msg) {
  console.log(`✅ Neues Log: ${msg}`);
});

manager.log("Benutzer angemeldet");
manager.zeigeAlle();
*/

/* Nr.13: Challenge: Todo-Manager Pro (array)
  erstelle eine Funktion erstelleTodoManager(), die dir ein Objekt mit mehreren
  Methoden zurückgibt

function erstelleTodoManager() {
  let liste = [];

  return {
    hinzufügen: function (aufgabe, callback) {
      liste.push(aufgabe);

      if (typeof callback === "function") {
        callback(aufgabe);
      }
    },

    anzeigen: function () {
      liste.forEach(function (aufgabe, index) {
        console.log(`${index + 1}.${aufgabe}`);
      });
    },

    löschen: function (index) {
      if (index >= 1 && index <= liste.length) {
        liste.splice(index - 1, 1);   // -1 weil Nutzer 1 zählt, nicht 0
      } else {
        console.log("❌ Ungültiger Index");
      }
    },

    anzahl: function () {
      return liste.length;
    },
  };
}

const todo = erstelleTodoManager();
todo.hinzufügen("JavaScript lernen", function (a) {
  console.log(`🆕 Neue Aufgabe: ${a}`);
});

todo.hinzufügen("HTML & CSS lernen");
todo.hinzufügen("Portfolio erstellen");
todo.anzeigen();
todo.löschen(2);
todo.anzeigen();
console.log("Aktuelle Anzahl:", todo.anzahl());
*/

/* Nr.14: Kontakt-Manager (object) 

function erstelleKontaktManager() {
  let kontakte = [];

  return {
    hinzufügen: function (name, nummer, callback) {
      let kontakt = { name: name, nummer: nummer };
      kontakte.push(kontakt);

      if (typeof callback === "function") {
        callback(kontakt);
      }
    },

    anzeigen: function () {
      kontakte.forEach((kontakt, index) => {
        console.log(`${index + 1}. ${kontakt.name} - ${kontakt.nummer}`);
      });
    },

    löschen: function (index) {
      if (index >= 1 && index <= kontakte.length) {
        kontakte.splice(index - 1, 1);
      } else {
        console.log("❌ Ungültiger Index");
      }
    },

    anzahl: function () {
      return kontakte.length;
    },
  };
}

const kontakte = erstelleKontaktManager();
kontakte.hinzufügen("Ali", "017698765432", function (k) {
  console.log(`📇 Neuer Kontakt: ${k.name} (${k.nummer})`);
});
kontakte.hinzufügen("Mira", "017698765432");
kontakte.anzeigen();
kontakte.löschen(1);
kontakte.anzeigen();
console.log("Anzahl Kontakte:", kontakte.anzahl());
*/

/* Nr.15: Buch-Manager 

function erstelleBuchManager() {
  let bücher = [];

  return {
    hinzufügen: function (titel, autor, callback) {
      let buch = { titel: titel, autor: autor };
      bücher.push(buch);

      if (typeof callback === "function") {
        callback(buch);
      }
    },

    anzeigen: function () {
      bücher.forEach((buch, index) => {
        console.log(`${index + 1}. ${buch.titel} - ${buch.autor}`);
      });
    },

    löschen: function (index) {
      if (index >= 1 && index <= bücher.length) {
        bücher.splice(index - 1, 1);
      } else {
        console.log("❌ Ungültiger Index");
      }
    },

    anzahl: function () {
      return bücher.length;
    },

    zeigeAlles: function () {
      console.log(bücher);
    },
  };
}

const bücher = erstelleBuchManager();
bücher.hinzufügen("Der Alchimist", "Paulo Coelho", function (b) {
  console.log(`📗 Buch hinzugefügt: ${b.titel} von ${b.autor}`);
});
bücher.hinzufügen("1984", "George Orwell");
bücher.anzeigen();
bücher.zeigeAlles();
bücher.löschen(1);
bücher.anzeigen();
console.log("📚 Anzahl Bücher:", bücher.anzahl());
*/
