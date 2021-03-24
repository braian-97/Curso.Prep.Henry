// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  function cambiar (nombre){
    return nombre.charAt(0).toUpperCase() + nombre.slice(1)
    }
  
  return cambiar(nombre)
  }

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  function invocar(cb){
    return cb(cb)
  }
  return invocar(cb)
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  function operacion (n1, n2, cb) {
    return cb(n1, n2);
}
  return operacion(n1, n2, cb)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumar = numeros.reduce(function(a,b,){ 
    return (a + b)
  });  
  function operacion (sumar, cb) {
    return cb(sumar);
  }
  return operacion(sumar, cb)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  return array.forEach(cb)
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var newArray = array.map(cb)
  return newArray
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var newArray = array.filter(array => array[0].charAt(0) === 'a')
  return newArray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
