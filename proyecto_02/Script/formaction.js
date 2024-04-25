// Función para agregar una nueva fila con los datos ingresados
function agregarFila() {
    // Obtener los valores de los campos
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var nitEmpresa = document.getElementById("nitEmpresa").value;
    var direccion = document.getElementById("direccion").value;
    var nombreEmpresa = document.getElementById("nombreEmpresa").value;
    var ciudad = document.getElementById("ciudad").value;

    // Crear una nueva fila en la tabla con los datos ingresados
    var tablaDatos = document.getElementById("tablaDatos").getElementsByTagName("tbody")[0];
    var fila = tablaDatos.insertRow();
    var celdaNombreCompleto = fila.insertCell(0);
    var celdaNitEmpresa = fila.insertCell(1);
    var celdaDireccion = fila.insertCell(2);
    var celdaNombreEmpresa = fila.insertCell(3);
    var celdaCiudad = fila.insertCell(4); // Cambiar el nombre de la variable
    var celdaMensaje = fila.insertCell(5); // Agregar una celda para los botones

    // Agregar los valores a las celdas de la fila
    celdaNombreCompleto.innerHTML = nombreCompleto;
    celdaNitEmpresa.innerHTML = nitEmpresa;
    celdaDireccion.innerHTML = direccion;
    celdaNombreEmpresa.innerHTML = nombreEmpresa;
    celdaCiudad.innerHTML = ciudad; // Mostrar la ciudad en la columna "Ciudad"
    celdaMensaje.innerHTML = '<button type="button" class="btn btn-warning btn-sm" onclick="editarFila(this)">Editar</button> <button type="button" class="btn btn-danger btn-sm" onclick="eliminarFila(this)">Eliminar</button> <button type="button" class="btn btn-success btn-sm" onclick="editarFila(this)">Confirmar</button>'; // Agregar botones en la columna "Mensaje Adicional"

}
// Función para editar una fila
function editarFila(boton) {
    var fila = boton.parentNode.parentNode;
    var celdas = fila.getElementsByTagName("td");

    // Obtener los valores de las celdas
    var nombreCompleto = celdas[0].innerHTML;
    var nitEmpresa = celdas[1].innerHTML;
    var direccion = celdas[2].innerHTML;
    var nombreEmpresa = celdas[3].innerHTML;
    var ciudad = celdas[4].innerHTML;

    // Colocar los valores en el formulario para editar
    document.getElementById("nombreCompleto").value = nombreCompleto;
    document.getElementById("nitEmpresa").value = nitEmpresa;
    document.getElementById("direccion").value = direccion;
    document.getElementById("nombreEmpresa").value = nombreEmpresa;
    document.getElementById("ciudad").value = ciudad;

    var botonConfirmar = celdas[5].getElementsByTagName("button")[2]; // Obtener el botón de Confirmar
    botonConfirmar.addEventListener("click", function () {
        // Actualizar los valores de las celdas con los datos editados
        celdas[0].innerHTML = document.getElementById("nombreCompleto").value;
        celdas[1].innerHTML = document.getElementById("nitEmpresa").value;
        celdas[2].innerHTML = document.getElementById("direccion").value;
        celdas[3].innerHTML = document.getElementById("nombreEmpresa").value;
        celdas[4].innerHTML = document.getElementById("ciudad").value;


        // Eliminar los botones de editar, eliminar y confirmar
        celdas[5].innerHTML = "";
        alert("Se ha confirmado los cambios");
    });
}

// Función para mostrar u ocultar los datos de la tabla
function toggleDatosTabla() {
    var tabla = document.getElementById("tablaDatos");
    if (tabla.style.display === "none") {
        tabla.style.display = "table";
    } else {
        tabla.style.display = "none";
    }
}

// Evento para mostrar u ocultar los datos al hacer clic en el botón "Listar Datos Guardados"
document.getElementById("botonListar").addEventListener("click", function () {
    toggleDatosTabla();
});

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
$(document).ready(function () {
    // Función para agregar una nueva fila con los datos ingresados
    function agregarFila() {
        // Obtener los valores de los campos
        var nombreCompleto = $("#nombreCompleto").val();
        var nitEmpresa = $("#nitEmpresa").val();
        var direccion = $("#direccion").val();
        var nombreEmpresa = $("#nombreEmpresa").val();
        var ciudad = $("#ciudad").val();

        // Crear una nueva fila en la tabla con los datos ingresados
        var fila = "<tr>" +
            "<td>" + nombreCompleto + "</td>" +
            "<td>" + nitEmpresa + "</td>" +
            "<td>" + direccion + "</td>" +
            "<td>" + nombreEmpresa + "</td>" +
            "<td>" + ciudad + "</td>" +
            "<td><button type='button' class='btn btn-warning btn-sm editar'>Editar</button> <button type='button' class='btn btn-danger btn-sm eliminar'>Eliminar</button> <button type='button' class='btn btn-success btn-sm confirmar'>Confirmar</button></td>" +
            "</tr>";

        // Agregar la fila a la tabla
        $("#tablaDatos tbody").append(fila);

        // Limpiar los campos del formulario después de enviar
        $("#formulario")[0].reset();
    }

    // Evento para capturar el envío del formulario
    $("#formulario").submit(function (event) {
        event.preventDefault(); // Evitar que se envíe el formulario
        agregarFila(); // Agregar una nueva fila con los datos ingresados
    });

    // Evento para editar una fila
    $(document).on("click", ".editar", function () {
        var fila = $(this).closest("tr");
        var celdas = fila.find("td");

        // Colocar los valores en el formulario para editar
        $("#nombreCompleto").val(celdas.eq(0).text());
        $("#nitEmpresa").val(celdas.eq(1).text());
        $("#direccion").val(celdas.eq(2).text());
        $("#nombreEmpresa").val(celdas.eq(3).text());
        $("#ciudad").val(celdas.eq(4).text());
    });

    // Evento para eliminar una fila
    $(document).on("click", ".eliminar", function () {
        $(this).closest("tr").remove();
    });

    // Evento para confirmar la edición
    $(document).on("click", ".confirmar", function () {
        var fila = $(this).closest("tr");
        var celdas = fila.find("td");

        // Actualizar los valores de las celdas con los datos editados
        celdas.eq(0).text($("#nombreCompleto").val());
        celdas.eq(1).text($("#nitEmpresa").val());
        celdas.eq(2).text($("#direccion").val());
        celdas.eq(3).text($("#nombreEmpresa").val());
        celdas.eq(4).text($("#ciudad").val());

        // Eliminar los botones de editar, eliminar y confirmar
        celdas.eq(5).empty();
        alert("Se ha confirmado los cambios");
    });

    // Función para mostrar u ocultar los datos de la tabla
    $("#botonListar").click(function () {
        $("#tablaDatos").toggle();
    });
});
