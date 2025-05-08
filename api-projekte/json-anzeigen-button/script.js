document.getElementById("laden").addEventListener("click", async () => {
  const output = document.getElementById("output");

  try {
    const res = await fetch("person.json"); // lokale JSON-Datei laden
    const daten = await res.json(); // Inhalt in echtes JS-Objekt umwandeln

    // Zeige es hübsch formatiert im Browser an
    output.textContent = JSON.stringify(daten, null, 2);
  } catch (err) {
    output.textContent = "Fehler beim Laden der JSON-Datei.";
    console.error(err);
  }
});
