function evaluar(){
    var horaActual = document.getElementById("hora_actual").value;
    var loroHabla = document.getElementById("loro_habla").value;
    var habla = true;
    var salida = document.getElementById("salida");
        
    if (loroHabla == "2"){
        habla = false;
    }
    if(horaActual < 7 || horaActual > 20){
        if (habla == true){
            salida.innerHTML = "si";
        }
        else if(habla == false){
            salida.innerHTML = "no";
        }
    }
    else {
        salida.innerHTML = "no";
    }
}


/* --------- otra solucion ---- */
/*
function evaluar(){
    var horaActual = document.getElementById("hora_actual").value;
    var loroHabla = document.getElementById("loro_habla").value;
    var salida = document.getElementById("salida");
    
    if(horaActual < 7 || horaActual > 20){
        if (loroHabla == "1"){
            salida.innerHTML = "si";
        }
        else if(loroHabla == "2"){
            salida.innerHTML = "no";
        }
    }
    else {
        salida.innerHTML = "no";
    }
}
*/