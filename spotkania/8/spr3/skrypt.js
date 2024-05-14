function f1(){
    let imie = document.getElementById("imie").value
    let nazwisko = document.getElementById("nazwisko").value
    let mail = document.getElementById("mail").value
    let wys = document.getElementById("wys")
    let wybor = document.getElementById("wybor").value
    let ch = document.getElementById("spr").checked
    if(ch){
        ch = "kopia na maila zostanie przesłana"
    }else{
        ch = "kopi nie bedzie na mailu"
    }

    if(imie.length < 1 ||nazwisko.length < 1||mail.length < 1 ){
        wys.innerHTML = "brakuje uz pola"
        return;
    }
    
    wys.innerHTML = imie  + nazwisko + "<br>" + mail + "<br>" + "Usuługa:" + wybor + "<br>" + ch
    
}

function f2(){
    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("wys")
    document.getElementById("wybor").value
    wys.innerHTML = "";
}
