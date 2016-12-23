function evaluar(){
    var horaActual = document.getElementById("hora_actual").value;
    var loroHabla = document.getElementById("loro_habla").value;
    var habla = true;
    var salida = document.getElementById("salida");
    
    if (loroHabla == "2"){
        habla = false;
    }
    if(horaActual < 7 || horaActual > 20){
        if (loroHabla = true){
            salida.innerHTML = "si";
        }
        else {
            salida.innerHTML = "no";
        }
    }
    else {
        salida.innerHTML = "no";
    }
}