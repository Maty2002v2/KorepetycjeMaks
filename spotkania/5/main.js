function mnozenie(){
    let tap4 = document.getElementById("tap1").value;
    let tap5 = document.getElementById("tap2").value;
    let wynik = document.getElementById("wynik");
    
    
    wynik.innerHTML = tap4 * tap5;
    }
    function dzielenie(){
       let tap4 = document.getElementById("tap1").value;
       let tap5 = document.getElementById("tap2").value;
       let wynik = document.getElementById("wynik");
       
       
       wynik.innerHTML = tap4 / tap5;
       }
       function dodawanie(){
          let tap4 = document.getElementById("tap1").value;
          let tap5 = document.getElementById("tap2").value;
          let wynik = document.getElementById("wynik");
          
          
          wynik.innerHTML = tap4 + tap5;
          }
          function odejmowanie(){
             let tap4 = document.getElementById("tap1").value;
             let tap5 = document.getElementById("tap2").value;
             let wynik = document.getElementById("wynik");
             
             
             wynik.innerHTML = tap4 - tap5;
             }