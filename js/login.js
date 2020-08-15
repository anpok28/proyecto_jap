//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e){

//});
var correoElectronico = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("ingresar");
var error = document.getElementById("error");
error.style.color = "red";

form.addEventListener("submit", function (event) {
  //console.log("enviando formulario.....");
  event.preventDefault();

  if (correoElectronico.value.length != 0 && password.value.length != 0) {
    return (location.href = "index.html");
  } else var mensajeError = [];

  if (correoElectronico.value === null || correoElectronico.value === "") {
    mensajeError.push("Ingrese un Correo Electrónico");
  }
  if (password.value === null || password.value === "") {
    mensajeError.push("Ingrese una Contraseña");
  }
  error.innerHTML = mensajeError.join(", ");
});
