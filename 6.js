//array a utilizar
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//iteracion al array desde 0 para que pueda imprimir 1 y se coloca <= para que pueda imprimir el 15 tambien que es el ultimo numero, si no iprimiria hasta el 14
for (i=0; i<= arr.length; i++) { 
	//definimos nuestra condicion, si i es divisible por 2 dando como residuo 1 entonces es impar.
	if (i % 2 === 1){
	//si cumple esa condicion imprime el numero
	console.log(i);
	}
}
