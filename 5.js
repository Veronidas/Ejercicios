//array a trabajar
let array=[3,24,12,58,10,67,40,43]
//establecemos nuestro numero mayor comenzando con 0
let biggest = 0;
 //hacemos la iteracion del array
for(i = 0; i < array.length; i++){
 //establecemos nuestra condicion, si el numero iterado es mayor que biggest, que es nuestro numero mayor entonces:
    if (array[i] > biggest)
    {
     //entonces ahora biggest seria ese numero superior al valor que estaba anteriormente, y al estar iterando recorre todo el arreglo hasta revisar cual es el mayor sustituyendolo en la variable biggest
     biggest = array[i];
    }
}
 //se imoprime
console.log(biggest);
