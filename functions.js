function mostraAcquisti() {

    var list = "";
    var i;
    for (i = 0; i <= sessionStorage.length-2; i++) {

        var key = sessionStorage.key(i);

        var ordine = sessionStorage.getItem(key);

        var ordineParsato = JSON.parse(ordine);

        //alert(ordineParsato);
        
        list += ("<div class='container table-responsive' style='border: solid black 3px; height: 320px; margin: 30px; color: black; background-color: rgb(253, 231, 170);'>" + "<br><h1>" + ordineParsato.titoloFilm
            + "</h1><h3><br>Giorno: "+ordineParsato.giornoSelezionato +"<br>Orario: "+ ordineParsato.orarioSelezionato + ":00" +
            "<br>Numero biglietti: "+ordineParsato.n_biglietti + "<br>Importo: "+ ordineParsato.importo+"<br></h3></div>");
    }

    document.getElementById("daRiempire").innerHTML = list;
    
    return true;
}

function inviaDati() {

    //controllo accesso utente

    if (window.sessionStorage.getItem("nomeUtente")==null) { alert("Devi prima accedere per poter comprare dei biglietti!"); return; }

    var film = document.getElementById("form_titolofilm").innerHTML;

    var e1 = document.getElementById("giorno");
    var day = e1.options[e1.selectedIndex].value; 
    //controllo dati non vuoti
    if (day=="") { alert("Seleziona un giorno!"); return; }

    var e2 = document.getElementById("orario");
    var hour = e2.options[e2.selectedIndex].value;
    //controllo dati non vuoti
    if (hour=="") { alert("Seleziona un orario!"); return; }

    var num =  document.getElementById("num_biglietti").value;
    //controllo dati non vuoti
    if (num<=0) { alert("Seleziona un numero positivo di biglietti!"); return; }

    var costo =  document.getElementById("importo").innerHTML;

    var oggetto = { titoloFilm: film, giornoSelezionato: day, orarioSelezionato: hour, n_biglietti: num, importo: costo };
    var oggettoJSON = JSON.stringify(oggetto);

    var x = (sessionStorage.length + 1);   
    x = "ordine" + x;
    //alert(x);

    sessionStorage.setItem(x, oggettoJSON);

    //document.getElementById("carrello").

    alert("Aggiunto al carrello!");
}

function calcolaPrezzo(){
    var giorno = document.getElementById("giorno").value;
    var n = document.getElementById("num_biglietti").value;
    var tipo = document.forms.form_carrello.tipo.value;
    if(giorno == "" || n<=0){return true;}
    if((giorno == "Sabato") || (giorno=="Domenica")){
      
        if(tipo=="studente"){
            var costo =(3.30*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else if(tipo=="minorenne"){
            var costo = (5.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else{
            var costo = (7.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo+"€";
        }
    }
    else{
        if(tipo=="studente"){
            var costo = (5.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else if(tipo=="minorenne"){
            var costo = (6.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo+"€";
        }
        else{
            var costo = (9.50*n).toFixed(2);
            document.getElementById("importo").innerHTML=costo+"€";
        }
    }

    return true;
}

function passaTitolo(titolo){
    document.getElementById('form_titolofilm').innerHTML=titolo;
    return true;
}