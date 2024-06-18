function colorFondo(color) {
  var colorObjetivo;

  colorObjetivo = color;

  switch (colorObjetivo) {
    case "Blanco":
      colorObjetivo = document.getElementById(color).style.backgroundColor =
        "white";
      break;
    case "Negro":
      colorObjetivo = document.getElementById(color).style.backgroundColor =
        "black";
      break;
    case "Azul":
      colorObjetivo = document.getElementById(color).style.backgroundColor =
        "blue";
      break;
    case "Rojo":
      colorObjetivo = document.getElementById(color).style.backgroundColor =
        "red";
      break;
    case "Amarillo":
      colorObjetivo = document.getElementById(color).style.backgroundColor =
        "yellow";
      break;
  }
}

function colorSalida(color) {
  var colorSalida;

  colorSalida = color;

  switch (colorSalida) {
    case "Blanco":
      colorSalida = document.getElementById(color).style.backgroundColor =
        "gainsboro";
      break;
    case "Negro":
      colorSalida = document.getElementById(color).style.backgroundColor =
        "gainsboro";
      break;
    case "Azul":
      colorSalida = document.getElementById(color).style.backgroundColor =
        "gainsboro";
      break;
    case "Rojo":
      colorSalida = document.getElementById(color).style.backgroundColor =
        "gainsboro";
      break;
    case "Amarillo":
      colorSalida = document.getElementById(color).style.backgroundColor =
        "gainsboro";
      break;
  }
}

//Punto 8b

document.getElementById("nqn").addEventListener("click", function () {
  var myList = document.getElementById("liNqn");
  var myTitle = document.getElementById("tiNqn");
  if (myList.style.display === "block") {
    myList.style.display = "none"; // Muestra la lista si está oculta
    myTitle.style.textDecoration = "underline"; // Subraya el titulo
  } else {
    myList.style.display = "block"; // Oculta la lista si está visible
    myTitle.style.textDecoration = "none"; // Saca subrayado el titulo
  }
});

document.getElementById("rn").addEventListener("click", function () {
  var myList = document.getElementById("liRN");
  var myTitle = document.getElementById("tiRN");
  if (myList.style.display === "block") {
    myList.style.display = "none"; // Muestra la lista si está oculta
    myTitle.style.textDecoration = "underline"; // Subraya el titulo
  } else {
    myList.style.display = "block"; // Oculta la lista si está visible
    myTitle.style.textDecoration = "none"; // Saca subrayado el titulo
  }
});

document.getElementById("bs").addEventListener("click", function () {
  var myList = document.getElementById("liBS");
  var myTitle = document.getElementById("tiBS");
  if (myList.style.display === "block") {
    myList.style.display = "none"; // Muestra la lista si está oculta
    myTitle.style.textDecoration = "underline"; // Subraya el titulo
  } else {
    myList.style.display = "block"; // Oculta la lista si está visible
    myTitle.style.textDecoration = "none"; // Saca subrayado el titulo
  }
});

// Punto 8c

function browser() {
  var mensaje = "";
  var browserVersion = navigator.userAgent;

  if (browserVersion.includes("Konkeror")) {
    mensaje = "<a" + "href=" + "http://konqueror.org>" + "Konkeror</a>";
  } else if (browserVersion.includes("Firefox")) {
    mensaje =
      "<a" + "href=" + "http://www.mozilla.com/firefox/>" + "Firefox</a>";
  } else if (browserVersion.includes("IE")) {
    mensaje = "<a" + "href=" + "http://www.microsoft.com/ie >" + "Firefox</a>";
  } else {
    mensaje = "browser desconocido";
  }

  document.getElementById("browser").innerHTML = mensaje;
}
