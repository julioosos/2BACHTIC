
function Limpiar(idtexto) {
    var comboBox = document.createElement("comboBox");
    while (comboBox.options.length > 0) {                
        comboBox.remove(0);
    }        
}

function Borrar(x) {
	x.remove(x.selectedIndex);        
}






function Anadir(idlista,idvalor) {
    var option = document.createElement("option");
    option.text = document.getElementById(idvalor).value;
    document.getElementById(idlista).add(option);
}


function Procesar(idtexto) {
    document.getElementById(idtexto).value = "Hola";
}
