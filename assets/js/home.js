import { propiedades_venta } from "./en_venta.js"



let arreglos = propiedades_venta.slice(0, 3);

let html = ""
for(let propiedades of arreglos){
   
   html +=`
   <div class="col-md-4 mb-4">
   <div class="card">
   <img src="${propiedades.src}" class="card-img-top" alt="Imagen del departamento">
   <div class="card-body">
   <h5 class="card-title">${propiedades.nombre}</h5>
   <p class="card-text">${propiedades.descripcion}</p>
   <p> <i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion}</p>
   <p> <i class="fas fa-bed"></i> ${propiedades.habitaciones} |
   <i class="fas fa-bath"></i> ${propiedades.baños}</p>
   <p> <i class="fas fa-dollar-sign"></i> ${propiedades.costo}</p>
   `
   if(propiedades.smoke){
      html += `<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar</p>`
   } else {
      html += `<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
   }
   if(propiedades.pets){
      html += `<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>`
   } else {
      html += `<p class="text-danger"> <i class="fas fa-ban"></i> No se permiten mascotas</p>`
   }
   html += `</div></div></div>`


   const ele = document.getElementById("row")
   ele.innerHTML = html

}

