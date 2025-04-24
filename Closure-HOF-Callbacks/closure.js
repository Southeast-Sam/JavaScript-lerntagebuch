/* Nr.1: Begrüßung merken 

function begrüßungSpeichern(namen) {
  return function () {
    console.log("Hallo, " + namen);
  };
}

const sagHallo = begrüßungSpeichern("Ali");
sagHallo();
*/

/* Nr.2: Klick-Zähler (ohne DOM) 
    Schreibe eine Funktion erstelleZähler(), die eine Funktion zurückgibt.
    Diese zurückgegebene Funktion soll jedes Mal, wenn sie aufgerufen wird, 
    die Anzahl der Aufrufe zählen und in der Konsole anzeigen

function erstelleZähler() {
  let zahl = 0;

  return function () {
    zahl++;
    return zahl;
  };
}
const zähle = erstelleZähler();
console.log(zähle());
console.log(zähle());
console.log(zähle());
*/

/* Nr.3: Passwort-Safe
    Schreibe eine Funktion, die ein Passwort entgegennimmt und eine Funktion zurückgibt.
    Die zurückgegebene Funktion soll dan prüfen, ob ein eingegebenes Passwort richtig
    ist. 

function passwortSafe(passwort) {
  return function (eingabe) {
    if (eingabe === passwort) {
      return "✅ Zugriff erlauben";
    } else {
      return "❌ Zugriff verweigert";
    }
  };
}

const check = passwortSafe("meinGeheimnis");
console.log(check("1234"));
console.log(check("meinGeheimnis"));
*/

/* Nr.4: Passwort-Safe mit 3 Versuchen 

function passwortTresor(passwort) {
  let versuche = 3;
  let gesperrt = false;

  return function (eingabe) {
    if (gesperrt) {
      return "🚫 Tresor gesperrt";
    }

    if (eingabe === passwort) {
      return "✅ Zugriff erlauben";
    } else {
      versuche--;
      if (versuche === 0) {
        gesperrt = true;
        return "🚫 Tresor gesperrt";
      } else {
        return `❌ Zugriff verweigert. Versuchen übrig: ${versuche}`;
      }
    }
  };
}
const check = passwortTresor("meinGeheim");
console.log(check("meinGeheim"));
console.log(check("1234"));
console.log(check("abfdkf"));
console.log(check("kafh2984"));
console.log(check("meinGeheim"));
*/

/* Nr.5: PIN-Terminal, 3 Versuche 
    Erstelle ein PIN-Terminal, das einen PIN speichert und nur 3 Versuche
    erlaubt. Danach ist das Terminal gesperrt

function pinTerminal(pin) {
  let versuche = 3;
  let gesperrt = false;

  return function (eingabe) {
    if (gesperrt) {
      return "🔒 Terminal gesperrt";
    }

    if (eingabe === pin) {
      return "✅ PIN korrekt";
    } else {
      versuche--;
      if (versuche === 0) {
        gesperrt = true;
        return "🔒 Terminal gesperrt";
      } else {
        return `❌ Falscher PIN. Noch ${versuche} Versuche übrig`;
      }
    }
  };
}
const check = pinTerminal("2468");
console.log(check("1234"));
console.log(check("3579"));
console.log(check("1462"));
console.log(check("2468"));
*/

/* Nr.6: Guthaben-Konto mit Einzahlen und Abheben 
    Erstelle eine Funktion, die ein Konto erstellt. Diese Funktion soll ein Objekt
    zurückgeben mit 3 Methoden

function erstelleKonto(startGuthaben) {
  let guthaben = startGuthaben;

  return {
    einzahlen: function (betrag) {
      guthaben += betrag;
      console.log(`+${betrag}€ eingezahlt.`);
    },
    abheben: function (betrag) {
      if (betrag <= guthaben) {
        guthaben -= betrag;
        console.log(`-${betrag}€ abgehoben`);
      } else {
        console.log("❌ Nicht genug Guthaben!");
      }
    },
    zeigeGuthaben: function () {
      console.log(`💰 Guthaben: ${guthaben}€`);
    },
  };
}

const konto = erstelleKonto(100);
konto.einzahlen(50);
konto.abheben(30);
konto.abheben(200);
konto.zeigeGuthaben();
*/

/* Nr.7: Punkte-Speicher
    Du baust ein Spiel, bei dem ein Spieler Punkte sammeln oder verlieren kan
    Deine Aufgabe ist es, eine Funktion zu schreiben, die einen Startwert (Punkte)
    bekommt und ein Objekt mit 3 Funktionen zurückgibt. 

function erstelleSpieler(startwert) {
  let wert = startwert;

  return {
    punkteHinzufügen: function (punkte) {
      wert += punkte;
      console.log(`+${punkte} Punkte`);
    },
    punkteAbziehen: function (punkte) {
      if (punkte <= wert) {
        wert -= punkte;
        console.log(`-${punkte} Punkte`);
      } else {
        console.log("❌ Nicht genug Punkte");
      }
    },
    zeigePunkte: function () {
      console.log(`Aktueller Punktestand: ${wert}`);
    },
  };
}

const spieler1 = erstelleSpieler(10);

spieler1.punkteHinzufügen(5);
spieler1.punkteAbziehen(3);
spieler1.zeigePunkte();
*/

/* Nr.8: Spielr mit Level und Erfahrungspunkten (XP) 

function erstelleGamer(startXP) {
  let XP = startXP;
  let level = 0;

  return {
    xpHinzufügen: function (punkte) {
      XP += punkte;
      if (XP >= 100) {
        const neuelevel = Math.floor(XP / 100);
        const restXP = XP % 100;
        level += neuelevel;
        XP = restXP;
        console.log(
          `+${punkte} XP -> Level up! Jetzt Level ${level}, XP übrig: ${XP}`
        );
      } else {
        console.log(`+${punkte} XP`);
      }
    },
    zeigeStatus: function () {
      console.log(`🎮 XP: ${XP}, Level: ${level}`);
    },
    zurücksetzen: function () {
      XP = 0;
      level = 1;
      console.log("🔄 Zurückgesetzt");
    },
  };
}

const gamer = erstelleGamer(80);
gamer.xpHinzufügen(30);
gamer.zeigeStatus();
gamer.zurücksetzen();
gamer.zeigeStatus();
*/

/* Nr.9: Energie-Booster für Helden 

function erstelleHeld(startEnergie) {
  let energie = startEnergie;
  let level = 1;

  return {
    energieTanken: function (punkte) {
      energie += punkte;
      if (energie >= 100) {
        const neueLevel = Math.floor(energie / 100);
        const restEnergie = energie % 100;
        level += neueLevel;
        energie = restEnergie;
        console.log(
          `+${punkte} Energie -> Level up! Jetzt Level ${level}, Energie: ${energie}`
        );
      } else {
        console.log(`+${punkte} Energie`);
      }
    },
    zeigeStatus: function () {
      console.log(`Energie: ${energie}, Level: ${level}`);
    },
    reset: function () {
      energie = 0;
      level = 1;
      console.log("🔄 Zurückgesetzt");
    },
  };
}

const held = erstelleHeld(80);
held.energieTanken(50);
held.energieTanken(80);
held.zeigeStatus();
held.reset();
held.zeigeStatus();
*/

/* N.10: XP-System mit Multiplikator 

function erstelleKrieger(startXP) {
  let XP = startXP;
  let level = 1;
  let multiplikator = 1;

  return {
    xpSammeln: function (punkte) {
      const bonusXP = punkte * multiplikator;
      XP += bonusXP;

      if (XP >= 100) {
        const levelUps = Math.floor(XP / 100);
        XP = XP % 100;
        level += levelUps;
        multiplikator += levelUps * 0.1;

        console.log(
          `+${bonusXP} XP -> Level Up! Level: ${level}, Rest-XP: ${XP.toFixed(2)}, Multiplikator: ${multiplikator.toFixed(2)}`
        );
      } else {
        console.log(`+${bonusXP.toFixed(2)} XP gesammelt`);
      }
    },
    status: function () {
      console.log(
        `XP: ${XP}, Level: ${level}, Multiplikator: ${multiplikator} `
      );
    },
    zurücksetzen: function () {
      XP = 0;
      level = 1;
      multiplikator = 1;
      console.log("🔄 Zurückgesetzt");
    },
  };
}
const held = erstelleKrieger(90);
held.xpSammeln(50);
held.xpSammeln(230);
held.status();
held.zurücksetzen();
held.status();
*/

/* Nr.11: XP-Tracker mit täglichem Training 

function trainingsHelde(startXp) {
  let Xp = startXp;
  let level = 1;

  return {
    trainieren: function (punkte) {
      Xp += punkte;

      if (Xp >= 100) {
        const neueLevel = Math.floor(Xp / 100);
        const restXP = Xp % 100;
        level += neueLevel;
        Xp = restXP;
        console.log(
          `+${punkte} XP -> Level Up! Jetzt Level ${level}, XP: ${Xp}`
        );
      } else {
        console.log(`+${punkte} XP`);
      }
    },
    zeigeStatus: function () {
      console.log(`XP: ${Xp}, Level: ${level}`);
    },
    reset: function () {
      Xp = 0;
      level = 1;
      console.log("🔄 Zurückgesetzt");
    },
  };
}
const trainer = trainingsHelde(80);
trainer.trainieren(80);
trainer.trainieren(50);
trainer.zeigeStatus();
trainer.reset();
trainer.zeigeStatus();
*/
