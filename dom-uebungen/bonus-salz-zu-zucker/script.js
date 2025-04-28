const zutatenListe = document.querySelectorAll("ul.zutaten li");

for (let i = 0; i < zutatenListe.length; i++) {
  if (zutatenListe[i].innerText === "Salz") {
    zutatenListe[i].innerText = "Zucker";
  }
}
