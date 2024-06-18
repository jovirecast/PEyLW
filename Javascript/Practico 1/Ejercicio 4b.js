var primerNum = 0;
var segundoNum = 0;
primerNum = prompt("Ingrese un número");
segundoNum = prompt("Ahora ingrese otro número");

resultados = [];

//suma
resultados[0] = parseInt(primerNum) + parseInt(segundoNum);

//resta
resultados[1] = primerNum - segundoNum;

//división
if (segundoNum != 0) {
  resultados[2] = (primerNum / segundoNum).toFixed(2);
} else {
  resultados[2] = "No es posible la división";
}

//multiplicación
resultados[3] = primerNum * segundoNum;

const br = "<br/>";
var mensaje = "";
var calc = ["suma", "resta", "división", "multiplicación"];

for (let index = 0; index < resultados.length; index++) {
  mensaje += calc[index] + ": " + resultados[index] + br;
}

document.write(mensaje);
