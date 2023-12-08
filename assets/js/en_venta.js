 export const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: "4 Habitaciones",
        baños: "4 baños",
        costo: 5000,
        smoke: false,
        pets: false
     },

     {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
        habitaciones: "2 Habitaciones",
        baños: "1 baños",
        costo: 1200,
        smoke: true,
        pets: true
     },

     {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: "3 Habitaciones",
        baños: "3 baños",
        costo: 4500,
        smoke: false,
        pets: true
     },

     {
        nombre: "Hermosa casa en los suburbios",
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Esta hermosa casa esta ubicada en un gran barrio, muy tranquilo y seguro",
        ubicacion: "867 Green Avenue, Springfield City, CA 85789",
        habitaciones: "4 Habitaciones",
        baños: "3 baños",
        costo: 8500,
        smoke: true,
        pets: true
     },

     {
      nombre: "Condominio privado",
      src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Hermoso y moderna casa ubicada en exclusivo condominio.",
      ubicacion: "666 Black Mountain,  Los Angeles, CA 85789",
      habitaciones: "5 Habitaciones",
      baños: "4 baños",
      costo: 10500,
      smoke: true,
      pets: false
   }


]

let html = ""
for(let propiedades of propiedades_venta){
   
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

