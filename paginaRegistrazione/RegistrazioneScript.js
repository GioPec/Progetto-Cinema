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
    
    return true;
}