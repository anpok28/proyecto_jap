//Realizar una petición web a una URL con un identificador del producto donde se encuentra toda la información
// detallada del mismo. Toda la información se deberá desplegar en HTML.

//Realizar una petición web a una URL donde ya se encuentran los comentarios y puntuación precargados del
//producto del punto anterior. Mostrar en HTML la información. ¿Quieres aplicar la puntuación en formato de
//estrellas?, entra aquí.

// VARIABLES 
var currentImagesArray = [];
var product_info = {};
var comments = [];
var newComments = {};

       // MOSTRAR IMAGENES RELACIONADAS
       function showImagesGalery (array){
        let htmlContentToAppend = "";
        
        for (let i = 0; i < array.length; i++) {
          let imgSrc = array[i];    
  
              htmlContentToAppend += `
              <div class="col-lg-3 col-md-4 col-6">
              <div class="d-block mb-4 h-100">
                  <img class="img-fluid img-thumbnail" src="` + imgSrc + `" alt="">
              </div>
          </div>
                    
              `
              document.getElementById("prod-info-images").innerHTML = htmlContentToAppend;
          }
        }
  

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      //console.log(resultObj.data);
      //IGUALO resultObj.data a una Variable
      product_info = resultObj.data;
      //console.log(product_info_object);
      document.getElementById("prod-info-name").innerHTML = product_info.name;
      document.getElementById("prod-info-description").innerHTML = product_info.description;
      document.getElementById("prod-info-cost").innerHTML = product_info.cost;
      document.getElementById("prod-info-currency").innerHTML = product_info.currency;
      document.getElementById("prod-info-category").innerHTML = product_info.category;
      document.getElementById("prod-info-soldCount").innerHTML = product_info.soldCount;
    
      showImagesGalery( product_info.images);
    }
  });

  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
        comments = resultObj.data;
        showComments(comments);
        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i];
            let score = comment.score;
            for (j = 0; j < score; j++) {
                document.getElementsByTagName("em")[i].getElementsByTagName("span")[j].classList.add("checked");
            };
        };
    }
});   

  function showComments(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let comment = array[i];
        htmlContentToAppend += `
        <div class="container">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-2">
                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                <p class="text-secondary text-center">`+ comment.dateTime + `</p>
              </div>
              <div class="col-md-10">
                <p>
                  <a class="float-left"
                    href="#"><strong>` + comment.user + `</strong></a>
                    <em>
                        <span class="float-right fa fa-star"></span>
                        <span class="float-right fa fa-star"></span>
                        <span class="float-right fa fa-star"></span>
                        <span class="float-right fa fa-star"></span>
                        <span class="float-right fa fa-star"></span>
                    </em>
                </p>
                <div class="clearfix"></div>
                <p>`+ comment.description + `</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        `

        document.getElementById("productComments").innerHTML = htmlContentToAppend;
    }
}
  
});
