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
            + ordineParsato.giornoSelezionato + " " + ordineParsato.orarioSelezionato + "</div>");
    }

    document.getElementById("daRiempire").innerHTML = list;
    
    return true;
}

function inviaDati() {

    var e1 = document.getElementById("giorno");
    var day = e1.options[e1.selectedIndex].value; 

    var e2 = document.getElementById("orario");
    var hour = e2.options[e2.selectedIndex].value;

    var oggetto = { giornoSelezionato: day, orarioSelezionato: hour };
    var oggettoJSON = JSON.stringify(oggetto);

    var x = (sessionStorage.length + 1);   
    x = "ordine" + x;
    alert(x);

    sessionStorage.setItem(x, oggettoJSON);
}