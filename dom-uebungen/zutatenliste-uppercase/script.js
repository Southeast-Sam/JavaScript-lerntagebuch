let zutatenliste = document.querySelectorAll("ul.zutaten li");

for (let i = 0; i < zutatenliste.length; i++) {
  const text = zutatenliste[i].innerText;
  const groß = text.toUpperCase();
  zutatenliste[i].innerText = groß;
}
