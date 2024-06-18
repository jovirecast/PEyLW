function validar() {
  var dia = document.getElementById("dia").value;
  var mes = document.getElementById("mes").value;
  var anio = document.getElementById("anio").value;
  var validacionFecha = comprobarFecha(dia, mes, anio);
  var nombre = document.getElementById("nombre").value;
  var validacionNombre = comprobarNombre(nombre);
  var apellido = document.getElementById("apellido").value;
  var validacionApellido = comprobarApellido(apellido);
  var email = document.getElementById("email").value;
  var validacionEmail = comprobarEmail(email);
  var obraSocial = document.getElementById("obras_sociales");
  var validacionObraSocial = comprobarObraSocial(obraSocial);
  var validacionFinal = false;

  if (
    validacionFecha &&
    validacionNombre &&
    validacionApellido &&
    validacionEmail &&
    validacionObraSocial
  ) {
    //alert("Ha ingresado todos los datos correctamente");
    validacionFinal = true;
  }
  return validacionFinal;
  // Elimine estas lineas de codigo cuando empiece a trabajar
  //alert("Funciona");
}

/*
modificación para que solamente proceda el submit si todos los datos 
fueron cargados correctamente, de no comentar la linea 92 del HTML no se 
enviaría el formulario
*/
document.addEventListener("DOMContentLoaded", function () {
  // Captura el formulario por su ID
  var form = document.getElementById("miFormulario");
  
  // Agrega un controlador de eventos para el evento 'submit'
  form.addEventListener("submit", function (event) {
    // Evita que el formulario se envíe
    if (!validar()) {
      event.preventDefault();
    } else {
      alert("Ha ingresado todos los datos correctamente");
    }
  });
});

//Validación nombre
function comprobarNombre(nombre) {
  let caracteresValidos = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'´]+$/;
  let nombreValido = caracteresValidos.test(nombre);
  let elemento = document.getElementById("nombre");
  if (nombreValido) {
    elemento.style.backgroundColor = "darkseagreen";
  } else {
    elemento.style.backgroundColor = "lightcoral";
  }

  return nombreValido;
}

//Validación apellido
function comprobarApellido(apellido) {
  let caracteresValidos = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'´]+$/;
  let apellidoValido = caracteresValidos.test(apellido);
  let elemento = document.getElementById("apellido");
  if (apellidoValido) {
    elemento.style.backgroundColor = "darkseagreen";
  } else {
    elemento.style.backgroundColor = "lightcoral";
  }

  return apellidoValido;
}

//Validación email
function comprobarEmail(email) {
  let caracteresValidos = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValido = caracteresValidos.test(email);
  let elemento = document.getElementById("email");
  if (emailValido) {
    elemento.style.backgroundColor = "darkseagreen";
  } else {
    elemento.style.backgroundColor = "lightcoral";
  }

  return emailValido;
}

//Validación obras sociales
function comprobarObraSocial(obraSocial) {
  var obraSocialValida = false;
  var valorOS = obraSocial.value;
  if (valorOS != "") {
    obraSocial.style.backgroundColor = "darkseagreen";
    obraSocialValida = true;
  } else {
    obraSocial.style.backgroundColor = "lightcoral";
  }

  return obraSocialValida;
}

//Validación fecha
function comprobarFecha(dia, mes, anio) {
  let fechaValida = false;
  let valDia = dia;
  let valMes = mes;
  let valAnio = anio;
  let anioActual = new Date().getFullYear();
  let anioBase = anioActual - 120; //edad máxima de 120 años
  let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let diasMesBisiesto = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let anioBisiesto = false;

  if (valAnio % 4 === 0) {
    anioBisiesto = true;
  }

  if (valAnio % 100 === 0 && valAnio % 400 !== 0) {
    anioBisiesto = false;
  }

  if (anioBisiesto) {
    mesCalendario = diasMesBisiesto;
  } else if (!anioBisiesto) {
    mesCalendario = diasMes;
  }

  if (
    valDia > 0 &&
    valMes > 0 &&
    valAnio <= anioActual &&
    valAnio >= anioBase
  ) {
    if (!isNaN(valDia) && !isNaN(valMes) && !isNaN(valAnio)) {
      if (valDia !== "" && valMes !== "" && valAnio !== "") {
        if (valDia <= mesCalendario[valMes - 1]) {
          fechaValida = true;
        }
      }
    }
  }

  estiloDia(fechaValida);
  estiloMes(fechaValida);
  estiloAnio(fechaValida);

  return fechaValida;
}

function estiloDia(validacion) {
  let elemento = document.getElementById("dia");

  if (validacion) {
    elemento.style.backgroundColor = "darkseagreen";
  } else {
    elemento.style.backgroundColor = "lightcoral";
  }
}

function estiloMes(validacion) {
  let elemento = document.getElementById("mes");

  if (validacion) {
    elemento.style.backgroundColor = "darkseagreen";
  } else {
    elemento.style.backgroundColor = "lightcoral";
  }
}

function estiloAnio(validacion) {
  let elemento = document.getElementById("anio");

  if (validacion) {
    elemento.style.backgroundColor = "darkseagreen";
  } else {
    elemento.style.backgroundColor = "lightcoral";
  }
}
