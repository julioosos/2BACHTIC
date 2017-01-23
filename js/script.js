function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type == "text")) {
        return false;
    }
}
        function getHora() {
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
           
            var ampm = 24;

            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ':' + ampm;
            return date.getFullYear() + "." + date.getMonth() + "." + date.getDate() + " " + strTime;


        }
/*
 * ------------------------------------------------------------------------------
 * Elimina todas las entradas existentes en la lista de valores referenciada
 * por IDLISTA
 * ------------------------------------------------------------------------------
 */

function Limpiar(idlista) {
    var opcion = document.getElementById(idlista)
    while (opcion.options.length > 0) {
        opcion.remove(0);
    }

}

function limpiarMensajes {
	var inputs = document.frm.getElementsByTagName("input");
for(var i=0;i<inputs.length;i++){
inputs[i].value = "";
}
}

function Borrar(idlista) {
    var idlista = document.getElementById(idlista);

    // Seleccionar las opciones
    var seleccionado = [];

    for (var i = 0; i < idlista.options.length; ++i) {
        seleccionado[i] = idlista.options[i].selected;
    }
    // Eliminar las opciones seleccionadas
    i = idlista.options.length;
    while (i--) {
        if (seleccionado[i]) {
            idlista.remove(i);
        }
    }
}

function Seleccionar(valor, idlista, idanadir, classanadir2, idtextoanadir) {
    var valores = document.getElementById(idlista);
    var seleccionado = valores.options.selectedIndex;
    document.getElementById(valor).value = valores.options[seleccionado].value;
    document.getElementById(idanadir).className = classanadir2;
    document.getElementById(idtextoanadir).innerHTML = "Editar";


}

/*function EditarAAnadir(idanadir,classanadir,idtextoanadir) {
   document.getElementById(idanadir).className = classanadir;
   document.getElementById(idtextoanadir).innerHTML = "Añadir";
   * 
}
*/

function Anadir(idlista, valor) {
    var option = document.createElement("option");
    option.text = document.getElementById(valor).value;
    document.getElementById(idlista).add(option);
    document.getElementById(valor).value = "";
    document.getElementById(valor).focus();

}

function Procesar_(idvalor2, idtexto) {
    var valores = document.getElementById(idvalor2);
    var seleccionado = valores.options.selectedIndex;
    document.getElementById(idtexto).innerHTML = "Procesando " + valores.options[seleccionado].value;
}

function mostrarMensaje(idTexto, valor) {
    document.getElementById(idTexto).innerHTML += valor + "&#13;&#10;"; // Agrego nueva linea antes
}

function moveUp(idlista) {
	var idlista = document.getElementById(idlista);
	var seleccionado = idlista.getElementsByTagName('option');
	for (var i = 1; i < seleccionado.length; i++) {
		var opcion = seleccionado[i];
		if (opcion.selected) {
			idlista.removeChild(opcion);
			idlista.insertBefore(opcion, seleccionado[i - 1]);
			}
       }
}
    
function moveDown(idlista) {
	var idlista = document.getElementById(idlista);
	var seleccionado = idlista.getElementsByTagName('option');
	for (var i = seleccionado.length - 2; i >= 0; i--) {
		var opcion = seleccionado[i];
		if (opcion.selected) {
		   var siguienteOpcion = seleccionado[i + 1];
		   opcion = idlista.removeChild(opcion);
		   siguienteOpcion = idlista.replaceChild(opcion, siguienteOpcion);
		   idlista.insertBefore(siguienteOpcion, opcion);
			}
       }
}


        
function stopRKey(evt) {
            var evt = (evt) ? evt : ((event) ? event : null);
            var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
            if ((evt.keyCode == 13) && (node.type == "text")) {
                return false;
            }
        }       
        
function getValores(idLista){
	
	var valores=[]
	var lista = document.getElementById(idLista);
	
	for (var i = 0; i < lista.options.length; ++i) {
        valores[i] = lista.options[i].value;
    }
    return valores;
}         


function ProcesarAlberto() {
	var val = getValores('valores');
	var alberto = document.getElementById("alberto");
	var acumpar = 0
	var acumimpar = 0
	for ( i = 0; i < val.length; i++) {
/* 
 * -------------------------------------------------------------------------------------------------------------------
 * numero%2 = 0 significa que ese número al dividirlo entre 2, el resto es 0. Los números pares cumplen esta condición
 * -------------------------------------------------------------------------------------------------------------------
 */
		if (val[i]%2 == 0) {
		acumpar=acumpar+1;
		} else {
		acumimpar=acumimpar+1;
		}
	}
		alert("Hay " + acumpar + " números pares" + "\nHay " + acumimpar + " números impares");
}


function ProcesarDonRafael() {
	var valores = getValores('valores');
	acumulador = 0;
	restador = 0;
    for (i = 0; i < valores.length; i++) {
		var val = parseInt(valores[i]);
		if (valores[i] > 0 ) {
		acumulador=acumulador+val;
		}
		else {
		restador=restador+val;
		}
	}
	
	alert('la suma de los números positivos son '+acumulador+' la suma de los numeros negativos son '+restador);
}
