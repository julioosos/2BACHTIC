function stopRKey(evt) {
   var evt = (evt) ? evt : ((event) ? event : null);
   var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
   if ((evt.keyCode == 13) && (node.type=="text")) {return false;}
}
function Limpiar(idlista) {
    var opcion = document.getElementById(idlista)
    while (opcion.options.length > 0) {                
        opcion.remove(0);
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

function Seleccionar(idvalor,idlista,idanadir,classanadir2,idtextoanadir) {
    var valores = document.getElementById(idlista);
    var seleccionado = valores.options.selectedIndex;
    document.getElementById(idvalor).value=valores.options[seleccionado].value;
    document.getElementById(idanadir).className = classanadir2;
    document.getElementById(idtextoanadir).innerHTML = "Editar";
}


/*function EditarAAnadir(idanadir,classanadir,idtextoanadir) {
   document.getElementById(idanadir).className = classanadir;
   document.getElementById(idtextoanadir).innerHTML = "Añadir";
   * 
}
*/

function Anadir(idlista,idvalor) {
    var option = document.createElement("option");
    option.text = document.getElementById(idvalor).value;
    document.getElementById(idlista).add(option);
    document.getElementById(idvalor).value="";
}

function Procesar() {
    var valores = document.getElementById("valores2");
    var seleccionado = valores.options.selectedIndex;
    document.getElementById("textarea").innerHTML = "Procesando " + valores.options[seleccionado].value;
}


function mostrarMensaje (idTexto) {
    document.getElementById(idTexto).innerHTML +=  "hola"+"&#13;&#10;"; // Agrego nueva linea antes
    }
