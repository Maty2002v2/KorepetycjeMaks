let num = document.getElementById("num");
let check = document.getElementById("check");
let p = document.getElementById("pr");

function obliczenia(){
    let number = parseInt(num.value);
    let ch = check.checked;
    let cenaZaWszystkieOgloszenia = 0;

    if (number >= 1 && number < 51) {
        cenaZaWszystkieOgloszenia = number * 2

    }
    if(number >= 51) {
        cenaZaWszystkieOgloszenia = number * 1
    }

    let rabat = 0;
    if(ch)
    {
        rabat = number * 0.2 
    }
  
    p.innerHTML = `Koszt ogłoszeń: ${cenaZaWszystkieOgloszenia - rabat} PLN`;
}