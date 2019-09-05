//ejercicio para verificar si dos numeros son pares

const areOdd = (n, m) => { //establecemos la funcion areOdd utilizando dos paramtros, n y m que son nuestros numeros
 if (n % 2 == 0 && m % 2 == 0){ //colocamos la formula para verificar, si n es divisible entre dos entregando 0 de residual Y si m es divisible entre dos entregando 0 como residual
   return true;//de ser cierta esa condicion, entonces es true
 } else { //de no ser asi, solo queda un opcion
   return false; // asi que retornamos falso porque no son pares
 }
};

module.exports = areOdd;
