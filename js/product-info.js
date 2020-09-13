//Realizar una petición web a una URL con un identificador del producto donde se encuentra toda la información
// detallada del mismo. Toda la información se deberá desplegar en HTML.

//Realizar una petición web a una URL donde ya se encuentran los comentarios y puntuación precargados del
//producto del punto anterior. Mostrar en HTML la información. ¿Quieres aplicar la puntuación en formato de
//estrellas?, entra aquí.

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  var product_info = {};
  getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      //console.log(resultObj.data);
      //IGUALO resultObj.data a una Variable
      product_info = resultObj.data;
      //console.log(product_info_object);
      document.getElementById("prod-info-name").innerHTML = product_info.name;
    }
    
  });
  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {



  });

  
});
