window.onload = function(){
    var segundos = 00;
    var tens = 00;
    var appendtens = window.document.getElementById("tens")
    var appendsegundos = window.document.getElementById("segundos")
    var buttonstart = window.document.getElementById("butao-start")
    var buttonstop = window.document.getElementById("butao-stop")
    var buttonreset = window.document.getElementById("butao-reset")
    var Interval ;

    buttonstart.onclick = function(){

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);

    }

    buttonstop.onclick = function(){
        clearInterval(Interval);
    }

    buttonreset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        segundos = "00";
        appendsegundos.innerHTML = segundos;
        appendtens.innerHTML = tens;
    }

    function startTimer(){
        tens++;

        if(tens <= 9){
            appendtens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendtens.innerHTML = tens;
        }

        if (tens > 99){
            console.log("segundos")
            segundos++;
            appendsegundos.innerHTML = "0" + segundos;
            tens = 0;
            appendsegundos.innerHTML = "0" + 0;
        }

        if(segundos >9){
            appendsegundos.innerHTML = segundos;
        }
    }
}