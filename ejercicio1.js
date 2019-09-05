//ejercicio para contar las vocales en un string
const countVowels = (str) => { //establecemos la funcion con el parametro str
  const vowels =["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] //establecemos cuales son las vocales, coloque tambien las mayusculas por si acaso
  let counter = 0; //declaramos nuestro contador como variable local comenzando en 0 para el conteo
for (let i = 0; i < str.length; i++){ //con el bucle for buscamos establecer la variable local i en 0 para inicializar, luego queremos que mientras que i sea menor al largo de letras del string entonces la vuelva a recorrer para poder tomar en cuenta todos los valores del string, y de ser asi entonces suma un  nuevo numero a la variable i con cada recorrido para confrontar con el largo del string
if (vowels.indexOf(str[i]) !== -1) // condicionamos: que se devuelva el indice dentro del string segun el valor especificado (en este caso las vocales) entregandfo -1 si no se encuentra el valor 
    {
      counter += 1; //le sumamos un numero al conteo
  }
  return counter; //regresamos el resultado del conteo de las vocales
};

module.exports = countVowels;