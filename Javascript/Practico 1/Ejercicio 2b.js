var titulo = "Datos Personales";
var datos = ["Juan", "Perez", "Soltero", 44, "01/01/1980", 33333333];
var info = [
  "Nombre",
  "Apellido",
  "Estado civil",
  "Edad",
  "Fecha de nacimiento",
  "DNI",
];
var retorno = "";
const br = "<br/>";
function mensaje() {
  for (let index = 0; index < info.length; index++) {
    retorno += info[index] + ": " + datos[index] + br;
  }
  return retorno;
}
document.write(titulo + br, mensaje());