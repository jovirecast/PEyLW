// selecciono el formulario
const formulario = document.getElementById("formulario_pago");
const inputsFormulario = document.querySelectorAll("#formulario_pago input");

//expresiones válidas
const expresiones = {
  nombre: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'´]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  numeros: /^\d+$/,
  direcciones: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'´\d]+$/u,
};

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

// carrito comprado
var carritoComprado = JSON.parse(localStorage.getItem("carrito_comprado"));

// selecciona el total de la compra
const totalCompra = document.querySelector("#total_final_compra");

// almacenador de la cantidad de items en el carrito
const cantidadCarrito = document.querySelector("#items_carrito");

// levanta si hay objetos de productos en el localstorage
const carritoAlmacenado = JSON.parse(localStorage.getItem("productos_carrito"));
const carritoParaComprar = JSON.parse(localStorage.getItem("carrito_para_comprar"));

//si hay carritos en localstorage
if (carritoAlmacenado) {
  carrito = carritoAlmacenado;
  actualizarCantidadCarrito();
} else {
  //si no hay empieza vacio
  carrito = [];
}

//actualiza numero de items agregados al carrito
function actualizarCantidadCarrito() {
  var numeroCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
  cantidadCarrito.innerHTML = numeroCarrito;
}

// selecciona el div cuando hay productos agregados al carrito
const productosCompra = document.querySelector("#resumen_compra");

// función para mostrar los productos en el carrito, o el carrito vacío si no hay productos
function mostrarProductosEnResumen() {
  // si el localstorage tiene valores cargados (si está vació devuelve null)
  if (carritoParaComprar && carritoParaComprar.length > 0) {
    productosCompra.innerHTML = "";

    //cargo cada producto al menu del carrito
    carritoParaComprar.forEach((producto) => {
      const div = document.createElement("div");
      div.innerHTML = `<div id="producto_resumen">
      <img id="imagen_resumen" src="${producto.imagen}" alt="${producto.descipcion}" />
      <div id="resumen_producto_descripcion">
      <span>${producto.categoria.id}</span>
      <h3>${producto.descripción}</h3>
      </div>
      <div id="resumen_producto_cantidad">
        <span>Unidades</span>
        <p>${producto.cantidad}</p>
      </div>
      <div id="resumen_producto_precio_unitario">
        <span>Precio</span>
        <p>${formatoNumero(producto.precio)}</p>
      </div>
      <div id="resumen_producto_precio_total">
        <span>Subtotal</span>
        <p>${formatoNumero(producto.precio * producto.cantidad)}</p>
      </div>
    </div>`;

      productosCompra.append(div);
    });

    calcularTotal();
  }
}

mostrarProductosEnResumen();

// calcula el importe total de la compra
function calcularTotal() {
  totalCompra.innerHTML = formatoNumero(carritoParaComprar.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0));
}

// Validación selección de tarjetas (crédito o débito)

// seleccionar elementos
const opcionesTarjeta = document.querySelectorAll(".opciones_tarjeta");
const botonTarjetaDebito = document.querySelectorAll(".tipo_pago");
const opcionesCuotas = document.querySelectorAll("#cantidad_cuotas");

// acción a realizar al seleccionar un boton (radio)
botonTarjetaDebito.forEach((boton) => {
  boton.addEventListener("click", () => {
    var seleccionTarjetaDebito = document.getElementById("tipo_pago_debito").checked;
    var seleccionTarjetaCredito = document.getElementById("tipo_pago_credito").checked;

    // si el radio de débito está activo
    if (seleccionTarjetaDebito == true) {
      inputsFormulario.forEach(() => {
        opcionesTarjeta.forEach((input) => {
          // crea las opciones de coutas
          document.getElementById("cantidad_cuotas").innerHTML = `<option value="1" selected>1</option>`;

          // muestra la información para seguir con el pago
          input.classList.remove("disabled");

          // cambia el mensaje en las condiciones de compra
          var mensajeCondición = document.getElementById("condiciones_compra");
          var mensajeTipoTarjeta = document.getElementById("tipo_pago_debito").value;
          mensajeCondición.innerHTML = mensajeTipoTarjeta + " en 1 pago";
        });
      });

      // si el radio de crédito está activo
    } else if (seleccionTarjetaCredito == true) {
      inputsFormulario.forEach(() => {
        opcionesTarjeta.forEach((input) => {
          // crea las opciones de coutas, la opción aparece vacía y luego el usuario puede seleccionarla
          document.getElementById("cantidad_cuotas").innerHTML = `<option value="1" selected hidden></option>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>`;

          // muestra la información para seguir con el pago
          input.classList.remove("disabled");

          opcionesCuotas.forEach((opcion) => {
            //captura la cuota seleccionada
            opcion.addEventListener("change", () => {
              // cambia el mensaje en las condiciones de compra cada vez que se selecciona una opción y muestra la cantidad e importe de cada cuota
              var mensajeCondición = document.getElementById("condiciones_compra");
              var mensajeTipoTarjeta = document.getElementById("tipo_pago_credito").value;
              var cuotas = document.getElementById("cantidad_cuotas");
              var cantidadCuotas = cuotas.value;
              var importeFinal = carritoParaComprar.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad, 0);
              var importeCuotas = formatoNumero(importeFinal / cantidadCuotas);

              mensajeCondición.innerHTML = mensajeTipoTarjeta + " en " + cantidadCuotas + " x " + importeCuotas;
            });
          });
        });
      });
    }
  });
});

//Validación formulario
var fechaActual = new Date();
var anioActual = (fechaActual.getFullYear() + "").slice(-2);
var mesActual = fechaActual.getMonth();
var validaciones = {
  nombre: false,
  apellido: false,
  documento: false,
  email: false,
  numero_tarjeta: false,
  vencimiento_mes: false,
  vencimiento_anio: false,
  codigo_seguridad: false,
  direccion_provincia: false,
  direccion_localidad: false,
  direccion_calle_numero: false,
  telefono_contacto: false,
};

var validacionFormulario = (evento) => {
  switch (evento.currentTarget.name) {
    case "nombre":
      validacionInput(expresiones.nombre, evento, "nombre");
      break;
    case "apellido":
      validacionInput(expresiones.nombre, evento, "apellido");
      break;
    case "documento":
      validacionInput(expresiones.numeros, evento, "documento");
      break;
    case "email":
      validacionInput(expresiones.email, evento, "email");
      break;
    case "numero_tarjeta":
      validacionInput(expresiones.numeros, evento, "numero_tarjeta");
      break;
    // case "cantidad_cuotas":
    //   break;
    case "Mes":
      if (evento.currentTarget.value <= 12 && evento.currentTarget.value > 0) {
        validacionInput(expresiones.numeros, evento, "vencimiento_mes");
        if (evento.currentTarget.value <= mesActual && document.getElementById("vencimiento_anio").value == anioActual) {
          document.getElementById("vencimiento_mes").classList.remove("dato_correcto");
          document.getElementById("vencimiento_mes").classList.add("dato_error");
        }
      } else {
        document.getElementById("vencimiento_mes").classList.remove("dato_correcto");
        document.getElementById("vencimiento_mes").classList.add("dato_error");
      }
      break;
    case "Anio":
      if (evento.currentTarget.value >= anioActual) {
        validacionInput(expresiones.numeros, evento, "vencimiento_anio");
        if (document.getElementById("vencimiento_mes").value <= mesActual && evento.currentTarget.value == anioActual) {
          document.getElementById("vencimiento_mes").classList.remove("dato_correcto");
          document.getElementById("vencimiento_mes").classList.add("dato_error");
        }
      } else {
        document.getElementById("vencimiento_anio").classList.remove("dato_correcto");
        document.getElementById("vencimiento_anio").classList.add("dato_error");
      }

      break;
    case "codigo_seguridad":
      validacionInput(expresiones.numeros, evento, "codigo_seguridad");
      break;
    case "provincia":
      validacionInput(expresiones.nombre, evento, "direccion_provincia");
      break;
    case "localidad":
      validacionInput(expresiones.nombre, evento, "direccion_localidad");
      break;
    case "calle":
      validacionInput(expresiones.direcciones, evento, "direccion_calle_numero");
      break;
    case "telefono":
      validacionInput(expresiones.numeros, evento, "telefono_contacto");
      break;
  }
};

var validacionInput = (expresion, input, idElemento) => {
  if (expresion.test(input.currentTarget.value)) {
    document.getElementById(idElemento).classList.remove("dato_error");
    document.getElementById(idElemento).classList.add("dato_correcto");
    validaciones[idElemento] = true;
  } else {
    document.getElementById(idElemento).classList.remove("dato_correcto");
    document.getElementById(idElemento).classList.add("dato_error");
    validaciones[idElemento] = false;
  }
};

inputsFormulario.forEach((input) => {
  input.addEventListener("keyup", validacionFormulario);
  input.addEventListener("blur", validacionFormulario);
});

// acción al hacer click al boton confirmar pago
const botonFinalizarCompra = document.querySelector("#boton_confirmar_pago");
botonFinalizarCompra.addEventListener("click", finalizarCompra);
function finalizarCompra(evento) {
  const confirmacionCompra = confirm("¿Desea confirmar su compra?");
  if (confirmacionCompra == true) {
    var verificadorDeCompra = false;

    Object.keys(validaciones).forEach((clave) => {
    
      if (validaciones[clave] == false) {
        verificadorDeCompra = false;
      } else {
        verificadorDeCompra = true;
      }
    });

    if (verificadorDeCompra == false) {
      alert("Ha ingresado datos incorrectos");
      evento.preventDefault();
    } else if (verificadorDeCompra == true) {
      if (carritoComprado && carritoComprado.length > 0) {
        carritoComprado.push(carritoParaComprar);
      } else {
        carritoComprado = [carritoParaComprar];
      }
      localStorage.setItem("carrito_comprado", JSON.stringify(carritoComprado));
      alert("Muchas gracias por su compra");
      location.href = "./Homepage.html";
      localStorage.setItem("productos_carrito", JSON.stringify([]));
      localStorage.setItem("carrito_para_comprar", JSON.stringify([]));
    }
  } else {
    alert("No se ha confirmado su compra");
    evento.preventDefault();
  }
}
