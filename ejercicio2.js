//ejercicio para verificar si un numero es par o impar
const evenOrOdd = (n) => { //se establece la funcion
  if (n % 2 == 0){ // creamos un If para poder indicar que en el caso de que el numero sea divisible entre dos sin residual, es un numero par
    return 0; //al ser par, retorna 0
  }
  return 1; //si no es par, continua la funcion para determinar que es impar al no haber mas opciones y retorna 1
};

module.exports = evenOrOdd;