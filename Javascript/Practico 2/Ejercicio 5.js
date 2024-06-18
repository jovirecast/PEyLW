function calculadora(operacion) {
  var X = prompt("Ingrese un primer número");
  var Y = prompt("Ingrese un segundo número");
  var impresion;
  switch (operacion) {
    case "suma":
      resultado = parseInt(X) + parseInt(Y);
      break;
    case "resta":
      //resta
      resultado = X - Y;
      break;
    case "divi":
      //división
      if (Y != 0) {
        resultado = (X / Y).toFixed(2);
      } else {
        resultado = "No es posible la división";
      }
      break;
    case "multi":
      //multiplicación
      resultado = X * Y;
      break;
  }

  impresion = document.getElementById("resultado");
  impresion.value +=
    "Resultado de " +
    document.getElementById(operacion).innerHTML +
    " " +
    X +
    " con " +
    " " +
    Y +
    " : " +
    resultado +
    "\n";
}

function limpiar() {
  document.getElementById("resultado").value = "";
}

function convertir() {
  var cambio;
  var peso = 1;
  var dolar = document.getElementById("cotUSD").innerText;
  var real = document.getElementById("cotBRL").innerText;
  var eur = document.getElementById("cotEUR").innerText;

  var importe = document.getElementById("importe").value;
  var monedaOrigen = document.getElementById("currency").value;
  var monedaDestino = document.getElementById("rate").value;

  switch (monedaOrigen) {
    case "ARS":
      if (monedaDestino == monedaOrigen) {
        cambio = importe;
      } else if (monedaDestino == "USD") {
        cambio = importe * (peso / dolar);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "BRL") {
        cambio = importe * (peso / real);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "EUR") {
        cambio = importe * (peso / eur);
        cambio = cambio.toFixed(2);
      }
      break;
    case "USD":
      if (monedaDestino == monedaOrigen) {
        cambio = importe;
      } else if (monedaDestino == "ARS") {
        cambio = importe * (dolar / peso);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "BRL") {
        cambio = importe * (dolar / real);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "EUR") {
        cambio = importe * (dolar / eur);
        cambio = cambio.toFixed(2);
      }
      break;
    case "BRL":
      if (monedaDestino == monedaOrigen) {
        cambio = importe;
      } else if (monedaDestino == "ARS") {
        cambio = importe * (real / peso);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "USD") {
        cambio = importe * (real / dolar);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "EUR") {
        cambio = importe * (real / eur);
        cambio = cambio.toFixed(2);
      }
      break;
    case "EUR":
      if (monedaDestino == monedaOrigen) {
        cambio = importe;
      } else if (monedaDestino == "ARS") {
        cambio = importe * (eur / peso);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "BRL") {
        cambio = importe * (eur / real);
        cambio = cambio.toFixed(2);
      } else if (monedaDestino == "USD") {
        cambio = importe * (eur / dolar);
        cambio = cambio.toFixed(2);
      }
      break;
  }

  document.getElementById("resultado").innerHTML = cambio;
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
