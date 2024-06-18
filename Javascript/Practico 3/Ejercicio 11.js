function fechaActual() {
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth();
  var meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  var año = fechaActual.getFullYear();
  var fechaCompleta = fechaActual.toLocaleDateString();
  var hora = fechaActual.getHours();
  var minutos = fechaActual.getMinutes();
  var segundos = fechaActual.getSeconds();
  var tiempoCompleto = fechaActual.toLocaleTimeString();

  var mensaje;

  //mensaje = fechaCompleta + ", " + tiempoCompleto;
  mensaje =
    dia +
    " de " +
    meses[mes] +
    " del " +
    año +
    ", " +
    hora +
    " horas, " +
    minutos +
    " minutos, " +
    segundos +
    " segundos";
  document.getElementById("fechaActual").innerHTML = mensaje;
}

function tiempoRestante() {
  var fechaActual = new Date().valueOf();
  var fechaParcial = new Date("2024/06/18").valueOf();
  var diferencia = fechaParcial - fechaActual;
  var fechaDiferencia = new Date(diferencia);
  var dias = fechaDiferencia.getDate();
  var horas = fechaDiferencia.getHours();
  var minutos = fechaDiferencia.getMinutes();
  var segundos = fechaDiferencia.getSeconds();
  var mensaje;
  mensaje =
    "Faltan " +
    dias +
    " días, " +
    horas +
    " horas, " +
    minutos +
    " minutos y " +
    segundos +
    " segundos";

  document.getElementById("tiempoRestante").innerHTML = mensaje;
}

function calcularEdad(){
    var birthDate = prompt("Ingrese su año de nacimiento");

    var fechaActual = new Date().getFullYear();
    var fechaParcial = new Date(birthDate).getFullYear();
    var diferencia =  fechaActual - fechaParcial;
    var mensaje;
    mensaje =
      "Su edad es " +
      diferencia + " años"
    document.getElementById("mensajeEdad").innerHTML = mensaje
}