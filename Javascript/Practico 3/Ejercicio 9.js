/* ingresar texto de un input a un p en tiempo real

const mensaje = document.getElementById("dialog");
mensaje.addEventListener("input", function mensaje() {
  cadena = document.getElementById("dialog").value;
  if (cadena == "hola"){
    cadena = "hola que tal"
  }
  document.getElementById("test").innerHTML = cadena;
});
*/

function mayus() {
  var cadena = document.getElementById("dialog").value.toUpperCase();
  document.getElementById("test").innerHTML = cadena;
}

function minus() {
  var cadena = document.getElementById("dialog").value.toLowerCase();
  document.getElementById("test").innerHTML = cadena;
}

function submensaje() {
  var cadena = document.getElementById("dialog").value.substring(4, 14);
  document.getElementById("test").innerHTML = cadena;
}

function hola() {
  var cadena = document.getElementById("dialog").value;
  if (cadena.includes("hola")) {
    cadena = "hola que tal";
  }
  document.getElementById("test").innerHTML = cadena;
}

function holaSinEspacios() {
  var cadena = document.getElementById("dialog").value;

  if (cadena.includes("hola")) {
    cadena = "hola que tal";
  }
  //se debería usar string.trim() pero por algún motivo no funciona
  cadena = cadena.replaceAll(" ", "");
  cadena = cadena.substring(4, 10);

  document.getElementById("test").innerHTML = cadena;
}

function traducir() {
  var cadena = document.getElementById("dialog").value;
  if (cadena.includes("hola")) {
    cadena = cadena.replaceAll("hola","hello");
  }
  if (cadena.includes("mi")) {
    cadena = cadena.replaceAll("mi","my");
  }
  if (cadena.includes("nombre")) {
    cadena = cadena.replaceAll("nombre","name");
  }

  document.getElementById("test").innerHTML = cadena;
}