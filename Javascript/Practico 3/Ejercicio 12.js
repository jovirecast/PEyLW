function enviar() {
  var nombre = document.getElementById("nombre").value;
  var textarea = document.getElementById("textarea").value;

  var parrafo = document.createElement("div");
  parrafo.innerHTML = fecha() + " por " + nombre + "<br/>" + textarea;

  document.getElementById("test").appendChild(parrafo);
}

function fecha() {
  var fecha = new Date();
  var cadena = fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString();

  return cadena;
}

function borrar() {
  document
    .getElementById("test")
    .removeChild(document.getElementById("test").lastChild);
}
