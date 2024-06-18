function mesesCalendario() {
  var meses;
  meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octube",
    "Noviembre",
    "Diciembre",
  ];

  return meses;
}

function mesesFor() {
  var meses = mesesCalendario();
  var listado;
  listado = "";
  for (let index = 0; index < meses.length; index++) {
    listado += "<li>" + meses[index] + "</li>";
  }
  document.getElementById("mesesFor").innerHTML = listado;
}

function mesesWhile() {
  var meses = mesesCalendario();
  var listado;
  listado = "";
  index = 0;
  while (index < 12) {
    listado += "<li>" + meses[index] + "</li>";
    index++;
  }
  document.getElementById("mesesWhile").innerHTML = listado;
}

function mesesDoWhile() {
  var meses = mesesCalendario();
  var listado;
  listado = "";
  index = 0;
  do {
    listado += "<li>" + meses[index] + "</li>";
    index++;
  } while (index < 12);
  document.getElementById("mesesDoWhile").innerHTML = listado;
}

function mesesForIn() {
  var meses = mesesCalendario();
  var listado;
  listado = "";

  for (mes in meses) {
    listado += "<li>" + meses[mes] + "</li>";
  }

  document.getElementById("mesesForIn").innerHTML = listado;
}

function numerosPares() {
  var arrayNumerosPares;
  var numeroInicial;
  var numeros;
  arrayNumerosPares = [];
  numeroInicial = 0;
  numeros = "";
  do {
    arrayNumerosPares.push(numeroInicial);
    numeroInicial = numeroInicial + 2;
  } while (numeroInicial < 500);

  for (num in arrayNumerosPares) {
    numeros += arrayNumerosPares[num] + " ";
  }
  document.getElementById("numerosPares").innerHTML = numeros;
}

function formula() {
  var arrayFormula;
  var funcion;
  var x;
  var resForm;
  resForm = "";
  arrayFormula = [];

  for (let x = 0; x < 100; x++) {
    funcion = 3 * x + (5 - Math.pow(x, 2));

    arrayFormula.push(funcion);
  }

  for (numForm in arrayFormula) {
    resForm += arrayFormula[numForm] + " ";
  }
  document.getElementById("formula").innerHTML = resForm;
}

function factorial() {
  var numFact;
  numFact = document.getElementById("factor").value;

  if (numFact === 0 || numFact === 1) {
    numFact = 1;
  } else {
    for (var i = numFact - 1; i >= 1; i--) {
      numFact *= i;
    }
  }
  document.getElementById("factorial").innerHTML = numFact;
}

function numerosPrimos() {
  var arrayNumerosPrimos;
  var esPrimo;
  var numPrimo;
  arrayNumerosPrimos = [];
  numPrimoInicio = 2;
  numPrimo = "";
  esPrimo = true;

  for (let p = numPrimoInicio; p <= 100; p++) {
    for (let m = 2; m < p; m++) {
      if (p % m == 0) {
        esPrimo = false;
      }
    }
    if (esPrimo == true) {
      arrayNumerosPrimos.push(p);
    }
    esPrimo = true;
  }

  for (numP in arrayNumerosPrimos) {
    numPrimo += arrayNumerosPrimos[numP] + " ";
  }
  document.getElementById("numerosPrimos").innerHTML = numPrimo;
}
