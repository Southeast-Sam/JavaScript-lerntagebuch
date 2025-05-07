# JSON Produktliste

Ein einfaches JavaScript-Projekt, das eine lokale JSON-Datei lädt und die Produkte dynamisch auf der Webseite anzeigt - mit Ladeanimation.

## Features

- Lädt Daten aus einer JSON-Datei mit `fetch()`
- Zeigt Name, Preis und Verfügbarkeit jedes Produkts im DOM
- Ladeanimation mit CSS-Spinner (`style.css`)
- Farbige Darstellung je nach Lagerstatus (grün = lagernd, rot = nicht lagernd)
- Künstliche Ladeverzögerung (`await new Promise(...)`), um Spinner sichtbar zu halten
- `async/await`, DOM-Manipulation
