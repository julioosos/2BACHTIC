
function Limpiar(idtexto) {
    var comboBox = document.createElement("comboBox");
    while (comboBox.options.length > 0) {                
        comboBox.remove(0);
    }        
}

function Borrar(idlista) {
var idlista = document.getElementById(idlista);

// Seleccionar las opciones
var seleccionado = [];
for (var i = 0; i < idlista.options.length; ++i)
{
    seleccionado[i] = idlista.options[i].selected;
}

// Eliminar las opciones seleccionadas
i = idlista.options.length;
while (i--)
{
    if (seleccionado[i])
    {
        idlista.remove(i);
    }
}
}






function Anadir(idlista,idvalor) {
    var option = document.createElement("option");
    option.text = document.getElementById(idvalor).value;
    document.getElementById(idlista).add(option);
}


function Procesar(idtexto) {
    document.getElementById(idtexto).value = "Hola";
}
