let array=[3,24,12,58,10,67,40,43]
let biggest = 0;
 
for(i = 0; i < array.length; i++){
    if (array[i] > biggest)
    {
        biggest = array[i];
    }
}
 
console.log(biggest);