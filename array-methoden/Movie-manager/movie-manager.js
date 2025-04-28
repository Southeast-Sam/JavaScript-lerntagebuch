/*
let filme = [];

// Filme hinzufügen (Titel, Genre, Bewertung von 1 -10)
function filmHinzufuegen(filmArray, titel, genre, bewertung) {
  const neueFilm = {
    titel: titel,
    genre: genre,
    bewertung: bewertung,
  };

  filmArray.push(neueFilm);
}

// Alle Filme anzeigen
function zeigeAlleFilme(filmArray) {
  return filmArray.map((film) => ({
    titel: film.titel,
    genre: film.genre,
    bewertung: film.bewertung,
  }));
}

// Nur bestimmte Genres filtern (z.B.: nur "Action"-Filme)
function filterFilmeNachGenre(filmArray, genre) {
  return filmArray.filter((film) => film.genre === genre);
}

// Durchschnittsbewertung aller Filme berechnen
function berechneDurchschnittBewertung(filmArray) {
  const gesamtBewertung = filmArray.reduce(
    (summe, film) => summe + film.bewertung,
    0
  );
  return gesamtBewertung / filmArray.length;
}

// Prüfen, ob es min. einen Film mit Bewertung über mindestBewertung gibt
function hatTopFilm(filmArray, mindestBewertung) {
  return filmArray.some((film) => film.bewertung > mindestBewertung);
}

// Filme alphabetisch sortieren
function sortiereFilmeNachTitel(filmArray) {
  return filmArray.map((film) => film.titel).sort();
}

// Filme hinzufügen
filmHinzufuegen(filme, "Inception", "Sci-Fi", 9);
filmHinzufuegen(filme, "Avengers", "Action", 8);
filmHinzufuegen(filme, "Titanic", "Drama", 7);

// Alle Filme zeigen
console.log("Alle Filme:");
console.log(zeigeAlleFilme(filme));

// Filme nach Genre filtern
console.log("Action Filme:");
console.log(filterFilmeNachGenre(filme, "Action"));

// durchschnittliche Bewertung
console.log("Durchschnittliche Bewertung:");
console.log(berechneDurchschnittBewertung(filme));

// Prüfen nach Top Filme
console.log("Ist ein Top Film dabei:");
console.log(hatTopFilm(filme, 8));

// Filme nach Alphabet sortieren
console.log("Deine Filme:");
console.log(sortiereFilmeNachTitel(filme));
*/
