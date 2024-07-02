//recupera el arreglo de objetos de productos agregados al carrito de localstorage
const carrito = JSON.parse(localStorage.getItem("productos_carrito"));

// almacenador de la cantidad de items en el carrito
const cantidadCarrito = document.querySelector("#items_carrito");

// selecciona el total de la compra
const totalCompra = document.querySelector("#total_final_compra");

// selecciona el div para cuando no hay ningún producto agregado al carrito
const carritoVacio = document.querySelector("#mensaje_carrito");

// selecciona el div cuando hay productos agregados al carrito
const productosCarrito = document.querySelector("#productos_carrito");
const funcionesCarrito = document.querySelector("#carrito_funciones");
const botonVaciarCarrito = document.querySelector("#vaciar_carrito");

// selecciona los botones para eliminar un producto del carrito
var botonEliminar = document.querySelectorAll(".carrito_producto_eliminar");

// formato de números
function formatoNumero(num) {
  const formato = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(num);
  return formato;
}

// función para mostrar los productos en el carrito, o el carrito vacío si no hay productos
function mostrarProductosEnCarrito() {
  // si el localstorage tiene valores cargados (si está vació devuelve null)
  if (carrito && carrito.length > 0) {
    // esconde el mensaje de carrito vacío
    carritoVacio.classList.add("disabled");
    // muestra el menu del carrito
    productosCarrito.classList.remove("disabled");
    funcionesCarrito.classList.remove("disabled");
    botonVaciarCarrito.classList.remove("disabled");

    productosCarrito.innerHTML = "";

    //cargo cada producto al menu del carrito
    carrito.forEach((producto) => {
      const div = document.createElement("div");
      div.innerHTML = `<div id="producto_carrito">
        <img id="imagen_carrito" src="${producto.imagen}" alt="${producto.descipcion}" />
        <div id="carrito_producto_descripcion">
            <span>${producto.categoria.id}</span>
            <h3>${producto.descripción}</h3>
        </div>
        <div id="carrito_producto_cantidad">
            <span>Unidades</span>
            <p>${producto.cantidad}</p>
        </div>
        <div id="carrito_producto_precio_unitario">
            <span>Precio</span>
            <p>${formatoNumero(producto.precio)}</p>
        </div>
        <div id="carrito_producto_precio_total">
            <span>Subtotal</span>
            <p>${formatoNumero(producto.precio * producto.cantidad)}</p>
        </div>
        <button class="carrito_producto_eliminar" id="${producto.id}">
            <img src="../CSS/images/icons/x-lg.svg" alt="borrar" />
        </button>
     </div>`;

      productosCarrito.append(div);
    });
  } else {
    // muestra el mensaje de carrito vacío
    carritoVacio.classList.remove("disabled");
    // esconde el menu del carrito
    productosCarrito.classList.add("disabled");
    funcionesCarrito.classList.add("disabled");
    botonVaciarCarrito.classList.add("disabled");
  }
  //actualiza el estado de los botones para eliminar productos
  actualizarEliminar();
  //actualiza el total de compra
  calcularTotal();
}

mostrarProductosEnCarrito();
actualizarCantidadCarrito();

// captura el click del boton eliminar
function actualizarEliminar() {
  botonEliminar = document.querySelectorAll(".carrito_producto_eliminar");

  botonEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarProducto);
  });
}

// función para eliminar un producto del carrito
function eliminarProducto(evento) {
  const idEnBoton = evento.currentTarget.id;
  const indice = carrito.findIndex((producto) => producto.id == idEnBoton);

  // para borrar items de manera unitaria, a veces funciona correctamente y otras produce errores sin funcionar
  // let cantidades = carrito[indice].cantidad

  // if (cantidades > 1) {
  //   carrito[indice].cantidad--;
  //   mostrarProductosEnCarrito();

  // } else if (cantidades = 1) {
  //   carrito.splice(indice, 1);
  //   mostrarProductosEnCarrito();
  // }

  carrito.splice(indice, 1);
  mostrarProductosEnCarrito();

  localStorage.setItem("productos_carrito", JSON.stringify(carrito));

  actualizarCantidadCarrito();
}

//actualiza numero de items agregados al carrito

function actualizarCantidadCarrito() {
  var numeroCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
  cantidadCarrito.innerHTML = numeroCarrito;
}

botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
  carrito.length = 0;
  localStorage.setItem("productos_carrito", JSON.stringify(carrito));
  mostrarProductosEnCarrito();
  actualizarCantidadCarrito();
}

// calcula el importe total del carrito

function calcularTotal() {
  totalCompra.innerHTML = formatoNumero(carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0));
}

const botonFinalizarCompra = document.querySelector("#carrito_comprar");
botonFinalizarCompra.addEventListener("click", finalizarCompra);
function finalizarCompra() {
  const carritoParaComprar = carrito;
  localStorage.setItem("carrito_para_comprar", JSON.stringify(carritoParaComprar));
  location.href = "./Pago.html";
}
