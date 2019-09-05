//ejercicio para verificar si alguien puede votar Y manejar
const canDriveAndVote = (edad) => { // se  establece la funcion canDriveCanVote usando el aprametro edad
  if (edad >= 16 && edad >= 18){ //establecer formula para saber si edad es menor o igual a 16 Y edad es mayor o igual a 18
    return true; //de ser cierta, entonces puede votar
  } else { //si no solo queda una opcion
    return false;//asi que se rertona falso porque no puede votar Y manejar
  }
};

module.exports = canDriveAndVote;
