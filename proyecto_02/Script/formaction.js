var filaSeleccionada = null;

// Función para agregar una nueva fila con los datos ingresados
function agregarFila() {
    // Obtener los valores de los campos
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var nitEmpresa = document.getElementById("nitEmpresa").value;
    var direccion = document.getElementById("direccion").value;
    var nombreEmpresa = document.getElementById("nombreEmpresa").value;
    var mensaje = document.getElementById("mensaje").value;

    // Crear una nueva fila en la tabla con los datos ingresados
    var tablaDatos = document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];
    var fila = tablaDatos.insertRow();
    var celdaNombreCompleto = fila.insertCell(0);
    var celdaNitEmpresa = fila.insertCell(1);
    var celdaDireccion = fila.insertCell(2);
    var celdaNombreEmpresa = fila.insertCell(3);
    var celdaMensaje = fila.insertCell(4);
    var celdaAcciones = fila.insertCell(5);

    // Agregar los valores a las celdas de la fila
    celdaNombreCompleto.innerHTML = nombreCompleto;
    celdaNitEmpresa.innerHTML = nitEmpresa;
    celdaDireccion.innerHTML = direccion;
    celdaNombreEmpresa.innerHTML = nombreEmpresa;
    celdaMensaje.innerHTML = mensaje;

    // Agregar botones de editar y eliminar
    celdaAcciones.innerHTML = '<button type="button" class="btn btn-warning btn-sm" onclick="editarFila(this)">Editar</button> <button type="button" class="btn btn-danger btn-sm" onclick="eliminarFila(this)">Eliminar</button>';

    // Limpiar los campos del formulario después de enviar
    document.getElementById("formulario").reset();
}

// Función para editar una fila seleccionada
function editarFila(botonEditar) {
    filaSeleccionada = botonEditar.parentNode.parentNode;
    document.getElementById("nombreCompleto").value = filaSeleccionada.cells[0].innerHTML;
    document.getElementById("nitEmpresa").value = filaSeleccionada.cells[1].innerHTML;
    document.getElementById("direccion").value = filaSeleccionada.cells[2].innerHTML;
    document.getElementById("nombreEmpresa").value = filaSeleccionada.cells[3].innerHTML;
    document.getElementById("mensaje").value = filaSeleccionada.cells[4].innerHTML;
    filaSeleccionada.remove();
}

// Función para eliminar una fila seleccionada
function eliminarFila(botonEliminar) {
    filaSeleccionada = botonEliminar.parentNode.parentNode;
    filaSeleccionada.remove();
}

// Capturar el envío del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    agregarFila(); // Agregar una nueva fila con los datos ingresados
});