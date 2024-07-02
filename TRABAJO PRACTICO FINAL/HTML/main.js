// arreglo con objetos conteniendo la información de cada producto
const arrayProductos = [
  {
    id: "Lubricante_5W40_SHELL",
    marca: "Shell",
    descripción: "Aceite HELIX HX8 5W40 4L Sintético",
    imagen: "../CSS/images/products/Lubricantes/Shell/hx8_5w40.jpg",
    categoria: {
      id: "Lubricantes",
      nombre: "Shell",
      tipo: "Sintetico",
      viscosidad: "5W40",
      capacidad: "4L",
      funcion: "Mantenimiento",
    },
    precio: 55000,
  },
  {
    id: "Lubricante_10W40_SHELL",
    marca: "Shell",
    descripción: "Aceite HELIX HX7 10W40 4L Semi-sintético",
    imagen: "../CSS/images/products/Lubricantes/Shell/hx7_10w40.jpg",
    categoria: {
      id: "Lubricantes",
      nombre: "Shell",
      tipo: "Semisintetico",
      viscosidad: "10W40",
      capacidad: "4L",
      funcion: "Mantenimiento",
    },
    precio: 40000,
  },
  {
    id: "Lubricante_15W40_SHELL",
    marca: "Shell",
    descripción: "Aceite HELIX HX5 15W40 4L Mineral",
    imagen: "../CSS/images/products/Lubricantes/Shell/hx5_15w40.jpg",
    categoria: {
      id: "Lubricantes",
      nombre: "Shell",
      tipo: "Mineral",
      viscosidad: "15W40",
      capacidad: "4L",
      funcion: "Mantenimiento",
    },
    precio: 35000,
  },
  {
    id: "Lubricante_0W20_SHELL",
    marca: "Shell",
    descripción: "Aceite HELIX ULTRA 0W20 4L Sintético",
    imagen: "../CSS/images/products/Lubricantes/Shell/ultra_0w20.jpg",
    categoria: {
      id: "Lubricantes",
      nombre: "Shell",
      tipo: "Sintetico",
      viscosidad: "0W20",
      capacidad: "4L",
      funcion: "Mantenimiento",
    },
    precio: 70000,
  },
  {
    id: "Lubricante_10W40_CASTROL",
    marca: "Castrol",
    descripción: "Aceite Magnatec 10W40 4L Semi-sintético",
    imagen: "../CSS/images/products/Lubricantes/Castrol/Magnatec_10w40.jpg",
    categoria: {
      id: "Lubricantes",
      nombre: "Castrol",
      tipo: "Semisintetico",
      viscosidad: "10W40",
      capacidad: "4L",
      funcion: "Mantenimiento",
    },
    precio: 43000,
  },
  {
    id: "Lubricante_5W30_CASTROL",
    marca: "Castrol",
    descripción: "Aceite Magnatec 5W30 4L Sintético",
    imagen: "../CSS/images/products/Lubricantes/Castrol/Magnatec_5w30.jpg",
    categoria: {
      id: "Lubricantes",
      nombre: "Castrol",
      tipo: "Sintetico",
      viscosidad: "5W30",
      capacidad: "4L",
      funcion: "Mantenimiento",
    },
    precio: 60000,
  },
  {
    id: "Filtro_aire_biconico_competicion_76mm",
    marca: "Max Tuning",
    descripción: "Filtro de aire biconico grande con un diámetro de entrada 76 mm",
    imagen: "../CSS/images/products/Filtros/filtro_76mm.jpg",
    categoria: {
      id: "Filtros",
      nombre: "Max Tuning",
      tipo: "Bicónico competicion",
      viscosidad: "no aplica",
      capacidad: "76mm",
      funcion: "Modificaciones",
    },
    precio: 14000,
  },
  {
    id: "Kit_service_clio_1200",
    marca: "Kit service Renault",
    descripción: "Kit para cambio de aceite y filtros Renault Clio Mio 1.2 16v. Contiene aceite 10w40 4L, filtro de aceite, aire, habitáculo y nafta",
    imagen: "../CSS/images/products/Kits/kit_service_clio.jpg",
    categoria: {
      id: "Kits",
      nombre: "Kit renault clio",
      tipo: "Kit",
      viscosidad: "10w40",
      capacidad: "4L",
      funcion: "Mantenimiento",
    },
    precio: 63000,
  },
  {
    id: "Kit_service_cronos_1300",
    marca: "Kit service",
    descripción: "Kit para cambio de aceite y filtros de Fiat Cronos y Argo motor 1.3",
    imagen: "../CSS/images/products/Kits/kit_service_cronos.jpg",
    categoria: {
      id: "Kits",
      nombre: "Kit fiat cronos argo",
      tipo: "Kit",
      viscosidad: "0w20",
      capacidad: "4l",
      funcion: "Mantenimiento",
    },
    precio: 74000,
  },
  {
    id: "Lamparas_H7_x2",
    marca: "Durer",
    descripción: "Pack x 2 Lamparas 12v H7 de 55w",
    imagen: "../CSS/images/products/Iluminacion/lampara_h7.jpg",
    categoria: {
      id: "Iluminación",
      nombre: "Kit x2 lampara H7",
      tipo: "Kit x2 J7",
      viscosidad: "no aplica",
      capacidad: "55w",
      funcion: "Modificaciones",
    },
    precio: 5000,
  },
  {
    id: "Lampara_led",
    marca: "S6 Heavy Duty",
    descripción: "Lamparas Led 24v apto H4, H7 y H3",
    imagen: "../CSS/images/products/Iluminacion/lampara_led.jpg",
    categoria: {
      id: "Kits",
      nombre: "Kit fiat cronos argo",
      tipo: "Kit",
      viscosidad: "0w20",
      capacidad: "4l",
      funcion: "Modificaciones",
    },
    precio: 26000,
  },
  {
    id: "Kit_service_cronos_1300",
    marca: "Generico",
    descripción: "Kit Seguridad Auto 6 En 1 Matafuego Baliza Reforzado apto Vtv",
    imagen: "../CSS/images/products/Accesorios/kit_vtv.jpg",
    categoria: {
      id: "Accesorios",
      nombre: "Kit seguridad",
      tipo: "Kit seguridad",
      viscosidad: "no aplica",
      capacidad: "no aplica",
      funcion: "Viaje",
    },
    precio: 29000,
  },
  {
    id: "Herramientas",
    marca: "Generico",
    descripción: "Kit Cricket Auto, llave Tubo y Cable Puente Rescate",
    imagen: "../CSS/images/products/Accesorios/herramientas.jpg",
    categoria: {
      id: "Accesorios",
      nombre: "Kit fiat cronos argo",
      tipo: "Herramientas",
      viscosidad: "no aplica",
      capacidad: "no aplica",
      funcion: "Viaje",
    },
    precio: 62000,
  },
  {
    id: "Neumatico_bridgestone_195_55_15",
    marca: "Bridgestone",
    descripción: "Neumático Bridgestone Turanza ER30 P 195/55R15 85 H",
    imagen: "../CSS/images/products/Neumáticos/bridgestone_195.jpg",
    categoria: {
      id: "Neumáticos",
      nombre: "Bridgestone Turanza ER30 P 195/55R15 85 H",
      tipo: "Neumático",
      viscosidad: "no aplica",
      capacidad: "195/55 r15 88H",
      funcion: "Viaje",
    },
    precio: 150000,
  },
  {
    id: "Neumatico_fate_175_65_14",
    marca: "Bridgestone",
    descripción: "Neumático Fate 175/65 R14 82t Prestiva",
    imagen: "../CSS/images/products/Neumáticos/fate_175.jpg",
    categoria: {
      id: "Neumáticos",
      nombre: "Fate 175/65 R14 82t Prestiva",
      tipo: "Neumático",
      viscosidad: "no aplica",
      capacidad: "175/65 r14 82T",
      funcion: "Viaje",
    },
    precio: 120000,
  },
  {
    id: "Cadenas_195_55_15",
    marca: "Generico",
    descripción: "Juego Cadenas Para Nieve cubierta 195/55/15",
    imagen: "../CSS/images/products/Accesorios/cadenas_nieve.jpg",
    categoria: {
      id: "Accesorios",
      nombre: "Cadenas Para Nieve cubierta 195/55/15",
      tipo: "cadenas",
      viscosidad: "no aplica",
      capacidad: "195/55 r15",
      funcion: "Viaje",
    },
    precio: 120000,
  },



];

// almacenadores
const contenedorProductos = document.querySelector("#grupo_productos");
const cantidadCarrito = document.querySelector("#items_carrito");
const carritoCompleto = localStorage.setItem("carrito_completo", JSON.stringify(arrayProductos))

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

// recorre el arreglo de objetos productos y crea el html para mostrar cada uno
function mostrarProductos(tipo) {
  contenedorProductos.innerHTML = "";

  tipo.forEach((producto) => {
    let div = document.createElement("div");
    div.id = "producto";
    div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.descripción}">
    <div id="detalle_producto">
      <span>${producto.marca}</span>
      <p>${producto.descripción}</p>
      <h4>${formatoNumero(producto.precio)}</h4>
      <button class="boton_agregar" id=${producto.id}>Agregar</button>
    </div>
    `;
    contenedorProductos.append(div);
  });

  agregarProductoCarrito();
}

mostrarProductos(arrayProductos);

const botonesCategorias = document.querySelectorAll(".boton_categorias");
// captura el click de cada boton de la lista de categorias
botonesCategorias.forEach((botones) => {
  botones.addEventListener("click", (evento) => {
    botonesCategorias.forEach((botones) => botones.classList.remove("active"));
    evento.target.classList.add("active");

    // muestra los productos que coincidan con el id y su categoria excepto todas las categorias
    if (evento.target.id != "Todas") {
      const filtroProductos = arrayProductos.filter((producto) => producto.categoria.id == evento.target.id);
      mostrarProductos(filtroProductos);
    } else {
      // muestra todos los productos
      mostrarProductos(arrayProductos);
    }
  });
});

var botonAgregarProducto = document.querySelectorAll(".boton_agregar");
// captura el click del boton agregar
function agregarProductoCarrito() {
  botonAgregarProducto = document.querySelectorAll(".boton_agregar");

  botonAgregarProducto.forEach((boton) => {
    boton.addEventListener("click", agregarProducto);
  });
}

// armado del carrito de compras

// levanta si hay objetos de productos en el localstorage
const carritoAlmacenado = JSON.parse(localStorage.getItem("productos_carrito"));
//si hay carritos en localstorage
if (carritoAlmacenado) {
  carrito = carritoAlmacenado;
  actualizarCantidadCarrito();
} else {
  //si no hay empieza vacio
  carrito = [];
}

//agregando productos al carrito

function agregarProducto(evento) {
  const idProducto = evento.target.id;
  const productoAgregado = arrayProductos.find((producto) => producto.id == idProducto);
  // busca si el producto está repetido para no repetir el objeto producto
  if (carrito.some((producto) => producto.id == idProducto)) {
    const indice = carrito.findIndex((producto) => producto.id == idProducto);
    carrito[indice].cantidad++;
    // agrega objeto producto
  } else {
    productoAgregado.cantidad = 1;
    carrito.push(productoAgregado);
  }

  actualizarCantidadCarrito();

  //guardar en localstorage el objeto producto con su cantidad

  localStorage.setItem("productos_carrito", JSON.stringify(carrito));
}

//actualiza numero de items agregados al carrito

function actualizarCantidadCarrito() {
  var numeroCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);
  cantidadCarrito.innerHTML = numeroCarrito;
}

const busquedaMenu = document.querySelector("#buscador");
const botonBusqueda = document.querySelector("#boton_buscar");

botonBusqueda.addEventListener("click", function buscar() {
  const busquedaFiltrada = arrayProductos.filter((producto) => producto.descripción.toLowerCase().includes(busquedaMenu.value.toLowerCase()));

  mostrarProductos(busquedaFiltrada);
});
