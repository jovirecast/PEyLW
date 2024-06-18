function datosPersonales() {
  var mensaje;

  mensaje =
    "Datos Personales <br>Nombre: Juan <br>Apellido: Perez <br>Estado civil: Soltero <br>Edad: 44 <br>Fecha de nacimiento: 01/01/1980 <br>DNI: 33333333";

  document.getElementById("datosPersonales").innerHTML = mensaje;
}

function contraseña() {
  var password = "minombre";
  var reject = "Contraseña incorrecta";
  var input;
  input = document.getElementById("pass").value;
  if (input != password) {
    document.getElementById("datosPersonales").innerHTML = reject;
  } else {
    datosPersonales();
  }
}

function valorSeleccionado(Valor) {
  var val;
  val = Valor;
  
  if (val < 0) {
    document.getElementById("datosPersonales").innerHTML = -1;
  } else if ((val >= 0) & (val < 10)) {
    document.getElementById("datosPersonales").innerHTML = 0;
  } else if ((val >= 10) & (val < 50)) {
    document.getElementById("datosPersonales").innerHTML = 1;
  } else if ((val >= 50) & (val < 100)) {
    document.getElementById("datosPersonales").innerHTML = 2;
  } else if (val >= 100) {
    document.getElementById("datosPersonales").innerHTML = 3;
  }
}
