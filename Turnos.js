const farmacias = {
  "7 lagos" : [1, 3, 5, 7, 11, 13, 15, 19, 21, 23, 25, 27, 29, 31],
  "Montaña" : [2, 4, 8, 10, 12, 16, 18, 20, 22, 24, 28, 30],
  "Rios" : [6, 9, 14, 17, 26],
}

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


  