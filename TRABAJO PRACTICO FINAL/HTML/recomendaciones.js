// arreglo con objetos conteniendo la información de cada producto
const arrayProductos = JSON.parse(localStorage.getItem("carrito_completo"));

// almacenadores
const contenedorProductos = document.querySelector("#grupo_productos_relacionados");
const cantidadCarrito = document.querySelector("#items_carrito");
const carritoCompleto = localStorage.setItem("carrito_completo", JSON.stringify(arrayProductos));

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
var filtroProductos = [];

// muestra los productos que coincidan con la función buscada
var tipoRecomendacion = document.getElementById("tipo_recomendacion").innerHTML;
if (tipoRecomendacion == "Mantenimiento") {
  // muestra todos los productos relacionados a la funcion Mantenimiento
  filtroProductos = arrayProductos.filter((producto) => producto.categoria.funcion == tipoRecomendacion);
  mostrarProductos(filtroProductos);
} else if (tipoRecomendacion == "Viaje") {
  // muestra todos los productos relacionados a la funcion Viaje
  filtroProductos = arrayProductos.filter((producto) => producto.categoria.funcion == tipoRecomendacion);
  mostrarProductos(filtroProductos);
} else if (tipoRecomendacion == "Modificaciones") {
  // muestra todos los productos relacionados a la funcion Modificaciones
  filtroProductos = arrayProductos.filter((producto) => producto.categoria.funcion == tipoRecomendacion);
  mostrarProductos(filtroProductos);
}

mostrarProductos(filtroProductos);

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

const recomendacionesTexto = document.querySelector("#consejos");

const botonesModificaciones = document.querySelectorAll(".interfaz_pregunta");
// captura el click de cada boton de la lista de categorias
botonesModificaciones.forEach((botones) => {
  botones.addEventListener("click", (evento) => {
    // muestra los productos que coincidan con el id y su categoria excepto todas las categorias
    if (evento.target.id == "Estetica") {
      mostrarRecomendacion(evento.target.id);
    } else if (evento.target.id == "Potenciación") {
      // muestra todos los productos
      mostrarRecomendacion(evento.target.id);
    } else if (evento.target.id == "Confort") {
      // muestra todos los productos
      mostrarRecomendacion(evento.target.id);
    } else if (evento.target.id == "largos") {
      // muestra todos los productos
      mostrarRecomendacion(evento.target.id);
    } else if (evento.target.id == "cortos") {
      // muestra todos los productos
      mostrarRecomendacion(evento.target.id);
    } else if (evento.target.id == "nieve") {
      // muestra todos los productos
      mostrarRecomendacion(evento.target.id);
    }
  });
});

//mensaje de inicio

const mensajeGenerico = document.getElementById("consejos_contenidos");

mensajeGenerico.innerHTML = `Las mejoras pueden transformar no solo la apariencia, sino también el rendimiento y la experiencia de conducción. Empecemos por las modificaciones estéticas. Desde nuevos juegos de ruedas y llantas hasta kits de carrocería personalizados, hay una variedad de opciones para darle a tu vehículo un aspecto único y llamativo. Además, las luces LED modernas no solo mejoran la visibilidad, sino que también añaden un toque contemporáneo a tu vehículo, destacándolo tanto de día como de noche.
<br><br>

Pero no se trata solo de apariencias. Las mejoras en el rendimiento también son clave. Desde la optimización del motor con ajustes de software hasta la instalación de sistemas de escape de alto rendimiento que mejoran la potencia y el sonido, hay muchas formas de hacer que tu vehículo no solo luzca mejor, sino que también conduzca mejor. Las suspensiones deportivas pueden mejorar la estabilidad y la maniobrabilidad, mientras que los frenos de alto rendimiento mejoran la capacidad de frenado, haciendo que cada curva y cada parada sean más seguras y emocionantes.
<br><br>
Además, las mejoras tecnológicas pueden llevar la comodidad y la conveniencia al siguiente nivel. Desde sistemas avanzados de entretenimiento y audio hasta características de seguridad mejoradas como cámaras de visión trasera y sensores de aparcamiento, estas adiciones pueden hacer que cada viaje sea más agradable y seguro. En resumen, personalizar tu vehículo con las mejoras adecuadas no solo permite que refleje tu estilo personal, sino que también mejora su rendimiento y funcionalidad en la carretera, garantizando una experiencia de conducción que supera todas las expectativas.`;

const mensajeMejoraEstetica = `<u>Estética</u> <br>
<br>
Personalizar el auto es una excelente manera de expresar el estilo único y hacer que el vehículo se destaque entre los demás. Una forma de lograrlo es a través de mejoras estéticas. Algunas son costosas mientras otras pueden ser ilegales por lo que se debe preguntar y saber las leyes antes de cualquier modificación.
<br><br>
En cuanto a la personalización hay varios elementos que son comunes en el cambio de imagen de un auto. Trabajo de pintura, polarizado en ventanas, llantas llamativas, kits de carrocerías y cambios en el interior del vehículo.`;

const mensajeMejoraPotenciación = `<u>Potenciación</u> <br>
<br>
Mejorar la potencia de tu auto, significa hacer ciertas modificaciones en el motor y esto se debe a que el motor es el corazón de nuestro vehículo y su función consiste en convertir el calor generado por la combustión en energía cinética.<br><br>

Asimismo, potenciar un motor es algo bastante habitual y se pueden conseguir valores muy positivos, pero es necesario realizarlas correctamente para evitar problemas graves como bloquear una unidad de control y dejarla inutilizable o incluso provocar averías en el motor. <br><br>

Sobre todo en los motores turboalimentados el margen de mejora es grande, pero debemos tener en cuenta todos los factores para evitar llevar al extremo a la mecánica y movernos siempre dentro de unos márgenes de seguridad apropiados para cada motor.`;

const mensajeMejoraConfort = `<u>Confort</u> <br>
<br>
El confort de conducción juega un papel fundamental en nuestra experiencia al volante. No solo se trata de disfrutar de un viaje agradable, sino que también afecta nuestra comodidad y niveles de fatiga. <br><br>

Un vehículo con un buen confort de conducción nos permite enfrentar largos trayectos sin agotarnos, ya que reduce los impactos y vibraciones que se transmiten al chasis y, por lo tanto, a nuestro cuerpo. Además, una conducción cómoda nos permite estar más concentrados en la carretera, lo que aumenta la seguridad durante el trayecto.`;

const mensajeViajeLargo = `<u>Viajes de largas distancias</u> <br>
<br>
Antes de partir, asegúrate de que tu vehículo esté en óptimas condiciones. Revisa el nivel de aceite y líquidos, la presión de los neumáticos y el funcionamiento de las luces y frenos. Llevar herramientas básicas, una llanta y un neumático de repuesto es esencial para cualquier imprevisto en el camino.
<br><br>
Es importante planificar el recorrido con antelación. Considera el tiempo estimado de viaje y las paradas necesarias para descansar y reabastecer combustible. Evita las horas pico de tráfico si es posible y revisa las condiciones climáticas antes de salir para estar preparado.`;

const mensajeViajeCorto = `<u>Viajes de cortas distancias</u> <br>
<br>
Aunque sea un viaje corto, verifica que el vehículo esté en buenas condiciones. Revisa el nivel de aceite, la presión de los neumáticos y el estado de los frenos. Asegúrate de tener suficiente combustible para el trayecto y lleva contigo herramientas básicas por precaución.<br><br>

Es importante calcular el tiempo necesario para evitar prisas y estrés. Considera posibles congestiones de tráfico y elige una ruta que te permita llegar cómodamente a tu destino. Revisa las condiciones del tráfico antes de partir para tomar decisiones informadas.<br><br>

Siempre sigue las normas de tránsito y usa siempre el cinturón de seguridad. Mantén la concentración en la conducción y evita distracciones como el uso del celular. Respeta los límites de velocidad y las señales de tráfico para garantizar un viaje seguro para ti y los demás.`;

const mensajeViajeNieve = `<u>Viajes con rutas afectadas por nieve</u> <br><br>

El viajar con condiciones clímaticas adversas es una tarea compleja, asegúrate de que tu vehículo esté completamente preparado para conducir en condiciones de nieve. Verifica que los neumáticos tengan buen dibujo y estén inflados correctamente. Considera el uso de neumáticos de invierno si las condiciones son severas. Asegúrate de tener líquido anticongelante adecuado y un raspador de hielo a mano.<br><br>

En condiciones de nieve, la planificación del viaje es crucial. Revisa el pronóstico del tiempo y las condiciones de la carretera antes de salir. Es posible que necesites ajustar tu ruta para evitar áreas muy afectadas por la nieve o elegir caminos principales que estén mejor mantenidos. Calcula más tiempo del habitual para el viaje debido a posibles retrasos por las condiciones climáticas. <br><br>

Siempre prioriza una conducción segura y toma precauciones adicionales durante el viaje, reduce la velocidad y aumenta la distancia entre vehículos para tener mayor tiempo de reacción en caso de deslizamientos o frenadas repentinas. Usa luces de niebla si es necesario y mantén una velocidad constante y controlada. Evita maniobras bruscas y mantén la calma en situaciones de baja visibilidad o superficies resbaladizas. <br><br>

Es muy importante que ante cualquier imprevisto cuentes con un equipo de emergencia y precauciones personales, como un kit de emergencia que incluya mantas, alimentos no perecederos, agua y una linterna. Asegúrate de tener un teléfono cargado y los números de emergencia a mano. Viste ropa abrigada y lleva calzado adecuado en caso de necesitar salir del vehículo en condiciones de frío extremo.`;

function mostrarRecomendacion(tipo) {
  let span = "";
  switch (tipo) {
    case "Estetica":
      recomendacionesTexto.innerHTML = "";
      span = document.createElement("span");
      span.id = "consejos_contenidos";
      span.innerHTML = mensajeMejoraEstetica;
      recomendacionesTexto.append(span);
      break;
    case "Potenciación":
      recomendacionesTexto.innerHTML = "";
      span = document.createElement("span");
      span.id = "consejos_contenidos";
      span.innerHTML = mensajeMejoraPotenciación;
      recomendacionesTexto.append(span);
      break;
    case "Confort":
      recomendacionesTexto.innerHTML = "";
      span = document.createElement("span");
      span.id = "consejos_contenidos";
      span.innerHTML = mensajeMejoraConfort;
      recomendacionesTexto.append(span);
      break;
    case "largos":
      recomendacionesTexto.innerHTML = "";
      span = document.createElement("span");
      span.id = "consejos_contenidos";
      span.innerHTML = mensajeViajeLargo;
      recomendacionesTexto.append(span);
      break;
    case "cortos":
      recomendacionesTexto.innerHTML = "";
      span = document.createElement("span");
      span.id = "consejos_contenidos";
      span.innerHTML = mensajeViajeCorto;
      recomendacionesTexto.append(span);
      break;
    case "nieve":
      recomendacionesTexto.innerHTML = "";
      span = document.createElement("span");
      span.id = "consejos_contenidos";
      span.innerHTML = mensajeViajeNieve;
      recomendacionesTexto.append(span);
      break;
  }
}
