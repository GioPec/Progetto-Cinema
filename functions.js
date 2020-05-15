function openForm() {

}

function mostraAcquisti() {

    var list = "";
    var i;
    for (i = 0; i <= sessionStorage.length-1; i++) {

        var key = sessionStorage.key(i);

        var ordine = sessionStorage.getItem(key);

        var ordineParsato = JSON.parse(ordine);

        alert(ordineParsato);
        
        list += ("<div style='background-color: firebrick; height: 500px;'>"
            + "giorno: "+ordineParsato.giornoSelezionato + " " +"ora: "+ ordineParsato.orarioSelezionato + " " +
            "n: "+ordineParsato.n_biglietti +" "+ "importo: "+ ordineParsato.importo+"</div>");
    }

    document.getElementById("daRiempire").innerHTML = list;
    
    return true;
}

function inviaDati() {

    var e1 = document.getElementById("giorno");
    var day = e1.options[e1.selectedIndex].value; 

    var e2 = document.getElementById("orario");
    var hour = e2.options[e2.selectedIndex].value;

    var num =  document.getElementById("num_biglietti").value;

    var costo =  document.getElementById("importo").innerHTML;

    var oggetto = { giornoSelezionato: day, orarioSelezionato: hour, n_biglietti: num, importo: costo };
    var oggettoJSON = JSON.stringify(oggetto);

    var x = (sessionStorage.length + 1);   
    x = "ordine" + x;
    alert(x);

    sessionStorage.setItem(x, oggettoJSON);
}

function calcolaPrezzo(){
    var giorno = document.getElementById("giorno").value;
    var n = document.getElementById("num_biglietti").value;
    var tipo = document.forms.form_carrello.tipo.value;
    if(giorno == ""){return true;}
    if((giorno == "6") || (giorno=="7")){
      
        if(tipo=="studente"){
            var costo = 3.30*n;
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else if(tipo=="minorenne"){
            var costo = 5.50*n;
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else{
            var costo = 7.50*n;
            document.getElementById("importo").innerHTML=costo+"€";
        }
    }
    else{
        if(tipo=="studente"){
            var costo = 5.50*n;
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else if(tipo=="minorenne"){
            var costo = 6.50*n;
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else{
            var costo = 9.50*n;
            document.getElementById("importo").innerHTML=costo+"€";
        }
    }

    return true;
}

function passaFilm(titolo){
    alert(titolo);
    return true;
}