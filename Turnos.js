const farmacias = {
  "7 lagos" : {
    diasDeTurno: [1, 3, 5, 7, 11, 13, 15, 19, 21, 23, 25, 27, 29, 31],
    ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.110951733997!2d-71.67215979218749!3d-40.7559157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bfd9b632ebcd%3A0x938fa8392d2c1ac5!2sPharmacy%207%20Lagos!5e0!3m2!1ses-419!2sar!4v1660079448537!5m2!1ses-419!2sar",
  },
  "La Botica" : {
  diasDeTurno: [2, 4, 8, 10, 12, 16, 18, 20, 22, 24, 28, 30],
  ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.110951733997!2d-71.67215979218749!3d-40.7559157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610bf4f91b48175%3A0x453dbec356243bc5!2sFarmacia%20La%20Botica!5e0!3m2!1ses-419!2sar!4v1660079908504!5m2!1ses-419!2sar",
},
  "Manzano" : {
    diasDeTurno: [6, 9, 14, 17, 26],
    ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12081.99934327782!2d-71.6091654921875!3d-40.7950088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610be391a7c666d%3A0x5fb57b3b4d49817c!2sFarmacia%20Puerto%20Manzano!5e0!3m2!1ses-419!2sar!4v1660079985486!5m2!1ses-419!2sar",
  }
}
//hay que hacer que se vea lindo
//centrar
//google fonts (tipografia "piola")
//separar color "consultar"
//cambiar paleta colores
//<link rel="preconnect" href="https://fonts.googleapis.com">
//<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap" rel="stylesheet"></link>
//font-family: 'Playfair Display', serif;
function farmaciasDeTurno(dia) {
  let infoFarmacia = {};
  for (const farmacia in farmacias) {
    var info = farmacias[farmacia];
    if (info.diasDeTurno.includes(dia)){
      infoFarmacia.nombre = farmacia
      infoFarmacia.ubicacion = info.ubicacion
    }
  }
  return infoFarmacia
}


  