const farmacias = {
  "7 lagos" : [1, 3, 5, 7, 11, 13, 15, 19, 21, 23, 25, 27, 29, 31],
  "Montaña" : [2, 4, 8, 10, 12, 16, 18, 20, 22, 24, 28, 30],
  "Rios" : [6, 9, 14, 17, 26],
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
  let nombreFarmacia = "";
  for (const farmacia in farmacias) {
    var diasPorFarmacia = farmacias[farmacia];
    if (diasPorFarmacia.includes(dia)){
      nombreFarmacia = farmacia
    }
  }
  return nombreFarmacia
}


  