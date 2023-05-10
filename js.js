function Dodawanie() { //tworzymy funkcje dodawanie
    dod = document.getElementsByTagName('input'); //deklarujemy zmienna a, ktora zawiera tablice elementów typu input = 36 inputów
    var x = 0; //deklarujemy zmienna x
    for (var i = 0; i < dod.length; i++) { //petla wykonujaca sie tak dlugo az nie skonczy sie dlugosc a, inaczej zwana iteracja
      x = Number(dod[i].value) + x //zamienia sie element tablicy w int i dodaje do niej wartosc x 
    }
    document.getElementById("result").innerText = x; //wypisuje wynik dodawania
  }