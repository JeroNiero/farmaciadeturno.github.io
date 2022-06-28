const farmacias = {
  "7 lagos" : [1, 3, 5, 7, 11, 13, 15, 19, 21, 23, 25, 27, 29, 31],
  "Montaña" : [2, 4, 8, 10, 12, 16, 18, 20, 22, 24, 28, 30],
  "Rios" : [6, 9, 14, 17, 26],
}
function diasDeTurno(farmacia) {
    if(farmacia  == "7 lagos") {
      return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
    } else if(farmacia == "8 lagos") {
      return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    } else {
      return []
    }
  }
  
  //messi
  function estaDeTurno(farmacia, dia) {
    const dias = diasDeTurno(farmacia);
    if (diasDeTurno(farmacia) == false) {
      return false
    } else {
      return dias.includes(dia);
    }
    
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
  
  const result7Lagos = estaDeTurno("7 lagos", 1);
  console.log(result7Lagos); // standard output
  
  const result8Lagos = estaDeTurno("8 lagos", 5);
  console.log(result8Lagos);
  