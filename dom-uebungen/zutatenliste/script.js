const zutatenListe = document.querySelectorAll("ul.zutaten li");
console.log(zutatenListe); // alle anzeigen

for (let i = 0; i < zutatenListe.length; i++) {
  console.log(zutatenListe[i]); // Einzelne <li> Elemente ausgeben
  console.log(zutatenListe[i].innerText);
}

console.log(zutatenListe[0].innerText);
