const max = (A = 10, B=30, C=5) => { //establecemos las constantes a verificar

if (A < B && C < B) { //creamos un if para verificar si A es menor que B Y si C es menor que B
  return B; // retorna B siendo este el mayor
}else if (A > B && A > C) { //si no es mayor B, entonces corre esta otra formula para ver si A es mayor que B y C
  return A; //de ser cierta la condicion anterior, retorna A al ser el mayor
} else { 
  return C; //Si ni B ni A son mayores, solo queda una opcion que marcamos por defaul entonces.
}

};

module.exports = max;