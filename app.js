
function diasDeTurno(farmacia) {
    if(farmacia  == "7 lagos") {
      return [1,2,3];
    }
  
    if(farmacia == "8 lagos") {
      return [4,5,6];
    }
  }
  

  function estaDeTurno(farmacia, dia) {
    const dias = diasDeTurno(farmacia);
    return dias.includes(dia);
  }
  
  
  const result7Lagos = estaDeTurno("7 lagos", 1);
  console.log(result7Lagos); // standard output
  
  const result8Lagos = estaDeTurno("8 lagos", 5);
  console.log(result8Lagos);
  