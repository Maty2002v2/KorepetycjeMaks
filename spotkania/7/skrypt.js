function f1(){
    let num = parseInt(document.getElementById("zl").value);
    let wys = document.getElementById("para");
     if(num==1){
        wys.innerHTML = "Zamówiłeś żelka: miś"
     }else if(num==2){
        wys.innerHTML = "Zamówiłeś żelka: żabka"
     }else if(num==3){
        wys.innerHTML = "Zamówiłeś żelka: serce"
     }else{
        wys.innerHTML = "Zamówiłeś żelka: inny"
     }
     let r1 = parseInt(document.getElementById("r").value);
     let g1 = parseInt(document.getElementById("g").value);
     let b1 = parseInt(document.getElementById("b").value);
     let butt = document.getElementById("click");
     butt.style.backgroundColor = `rgb(${r1},${g1},${b1} )`
}
