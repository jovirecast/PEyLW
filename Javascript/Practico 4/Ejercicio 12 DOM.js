/*function recorrer() {
  /*
  // Obtener la lista principal
  var listaPrincipal = document.getElementById("lista");

  // Recorrer cada elemento <li> dentro de la lista principal
  for (var i = 0; i < listaPrincipal.childNodes.length; i++) {
    var elemento = listaPrincipal.childNodes[i];

    // Verificar si el nodo es un <li> y no un nodo de texto o espacio en blanco
    if (elemento.tagName === "LI") {
      // Obtener el texto del elemento
      var texto = elemento.textContent.trim();

      // Mostrar el texto en una alerta
      alert(texto);

      // Cambiar el color de fuente del elemento
      elemento.style.color = "red"; // Por ejemplo, cambiar a color rojo
    }


  var lista = document.getElementById("lista");
  var nodos = lista.childNodes.length;
  
  for (let index = 0; index < nodos; index++) {
    var valorNodoPadre = lista.childNodes[index]
    if (valorNodoPadre.tagName ==)
    alert(valorNodoPadre);
    cambiarColor(lista)
    //lista.childNodes.style.color="gray"
  }

  
  NO USAR For...in para recorrer nodos

  for (const nodo in lista.childNodes) {
    //valorNodo = nodo.innerHTML
    alert(nodo)
  }
}

function cambiarColor(nodo) {
  nodo.style.color = "gray";
} */

function recorrer() {
  // Obtener la lista principal
  var listaPrincipal = document.getElementById("lista");

  // Llamar a la función para recorrer el árbol empezando desde la lista principal
  recorrerArbol(listaPrincipal);
}

function recorrerArbol(nodo) {
  // Recorrer cada nodo hijo del nodo actual
  for (var i = 0; i < nodo.childNodes.length; i++) {
    var hijo = nodo.childNodes[i];

    // Verificar si el nodo es un elemento <li> y no un nodo de texto o espacio en blanco
    if (hijo.tagName === "LI") {
      // Obtener el texto del elemento
      var texto = hijo.textContent.trim();

      // Mostrar el texto en una alerta
      alert(texto);

      // Cambiar el color de fuente del elemento a gris
      hijo.style.color = "gray";
    }

    // Llamar recursivamente a la función para los hijos del nodo actual
    if (hijo.childNodes.length > 0) {
      recorrerArbol(hijo);
    }
  }
}