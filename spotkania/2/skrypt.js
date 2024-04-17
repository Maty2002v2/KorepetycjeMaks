const check = document.getElementById('check');
const num = document.getElementById('num');
const p = document.getElementById('p');

function calck() {
    let checkvalue = check.checked;
    let numvalue = parseInt(num.value)//pobieramy wartość inputa i zmieniamy go na liczbe;

    let koszt = numvalue * 100;
    
    if(checkvalue){
        koszt = koszt * 1.3;
    }

    p.innerHTML = 'Koszt Twojego wesela to ' + koszt + ' złotych';
}