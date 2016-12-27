function evaluar(){
    var horaActual = document.getElementById("hora_actual").value;
    var loroHabla = document.getElementById("loro_habla").value;
    var salida = document.getElementById("salida");
    
    var habla = true;
    
    if (loroHabla == "1"){
        habla = true;
    }
    if (loroHabla == "2"){
        habla = false;
    }
    
    if(habla = true){
        if (horaActual < 7 || horaActual > 20){
            salida.innerHTML = "si";
        }
        else {
            salida.innerHTML = "no";
        }
    }
    if(habla = false){
        salida.innerHTML = "no";
    }
}