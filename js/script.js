// DOM
//Modificar elementos por nodos
document.body.children[0].innerHTML = "Tienda <b>Balboa Fitness</b>"
document.body.children[0].className= "ms-3 fs-1" //Modificamos el contenido de la equiqueta <p>

let pagina = document.getElementById("pagina")
pagina.innerHTML= "Hola! Les presento nuestros productos"
pagina.className= "ms-3 mt-4 fs-5"

const ropa = [
    {id:1, nombre:"Remera Rocky", precio:5500, talle:"L", imagen:"https://acdn.mitiendanube.com/stores/064/882/products/remera_certified_estampados_mockup_111-b1387fef97ddd49a1715742651392720-1024-1024.webp"},
    {id:2, nombre:"Remera Mick", precio:5500, talle:"M", imagen:"https://http2.mlstatic.com/D_NQ_NP_905232-MLA53567042964_022023-O.webp"},
    {id:3, nombre:"Musculosa", precio:4500, talle:"M", imagen:"https://grafimax.cl/cdn/shop/products/D_755868-MLC45830332869_052021-B_dd2bcd80-788a-467e-9a2b-54bfd4a93e67.jpg?v=1691159966"},
    {id:4, nombre:"Short", precio:5500, talle:"M", imagen:"https://images.squarespace-cdn.com/content/v1/56a44a68cbced66ef85f1331/1458800014665-OBP4ZWTO3A4KQLUDAP58/Rocky+Italian+Stallion+Shorts+1.jpg?format=1000w"},
    {id:5, nombre:"Gorra", precio:2500, talle:"12", imagen:"https://acdn.mitiendanube.com/stores/001/473/111/products/gorra-de-rocky-balboa-series-peliculas1-1d94280c53086c038b16642175535939-640-0.jpg"},
    {id:6, nombre:"Guantes Recortados", precio:15500, talle:"12 Oz.", imagen:"https://i.pinimg.com/736x/47/ca/b1/47cab106c0a9ebb95da4925e951f135d.jpg"},
  ];

  const guardarRopa = (ropa) => {
    localStorage.setItem("ropa",JSON.stringify(ropa))
  };

  const obtenerRopa = () => {
    return JSON.parse(localStorage.getItem("ropa")) || []
  };

  guardarRopa(ropa);
  
  let productosRopa= document.getElementById("productosRopa");

  for (const pilcha of ropa) {
    let prenda = document.createElement("div");
    prenda.className= "col-md-3 pt-5";
    prenda.innerHTML = `<div class="card">
    <img src="${pilcha.imagen}" class="card-img-top" alt="${pilcha.nombre}">
    <div class="card-body">
      <h5 class="card-title"><b>${pilcha.nombre}</b></h5>
      <p class="card-text fs-5">Talle: ${pilcha.talle} <br> Precio: <b>$${pilcha.precio}</b></p>
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
  </div>`

  productosRopa.appendChild(prenda);
    
  }

 
  function cartelAlerta() {
    document.getElementById("devuelve").innerHTML = `<div class="alert alert-primary" role="alert">Producto agregado correctamente!</div>`;
}

productosRopa.onclick = cartelAlerta;

document.getElementById("tituloFormulario").innerHTML= `¿Tenés alguna duda de nuestros productos? Contactate con nosotros`
document.getElementById("tituloFormulario").className= "py-4 mt-5"

let inputNombre = document.getElementById("nombre");
let inputEmail = document.getElementById("email");

inputEmail.onkeyup=() => {
    let chequeoEmail = document.getElementById("chequeoEmail");

    if (correccionEmail(inputEmail.value)){
        chequeoEmail.innerHTML= `<div class="alert alert-success" role="alert">Email agregado correctamente!</div>`
    }
    else{ 
        chequeoEmail.innerHTML= `<div class="alert alert-danger" role="alert">EMAIL INVÁLIDO!</div>`
    }
    }

function correccionEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        return false
    }
}


