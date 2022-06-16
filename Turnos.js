
function diasDeTurno(farmacia) {
    if(farmacia  == "7 lagos") {
      return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
    } else if(farmacia == "8 lagos") {
      return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    } else {
      return []
    }
  }
  //holaaaaaaaaaaaaaaaa
  //messi
  function estaDeTurno(farmacia, dia) {
    const dias = diasDeTurno(farmacia);
    if (diasDeTurno(farmacia) == false) {
      return false
    } else {
      return dias.includes(dia);
    }
    
  }
  
  
  const result7Lagos = estaDeTurno("7 lagos", 1);
  console.log(result7Lagos); // standard output
  
  const result8Lagos = estaDeTurno("8 lagos", 5);
  console.log(result8Lagos);
  