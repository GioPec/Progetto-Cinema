function validaForm(){
    if(controllaCAP()){
        if(document.myForm.remember.checked){
            window.alert("Hai scelto di ricordarti per i prossimi accessi");
        }else{
            window.alert("Hai scelto di non ricoradrti per i prossimi accessi");
        }
    }else
        return false
}

function controllaCAP(){
    if(document.myForm.cap.value.length!=5){
        alert("Il cap deve contenere 5 cifre");
        return false;
    }

    var v=parseInt(document.myForm.cap.value);
    if(isNaN(v)){
        alert("Il cap deve essere un numero");
        return false;
    }
    return true;
}