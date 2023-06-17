//Ejemplo 1

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  //No tiene porque llamarse callback sino que podria llamarse de cualquiera otra manera. Muchas veces usamos callback por la referencia de lo que estamos usando
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// Ejemplo 2

setTimeout(function () {
  //setTimeOut es parte de la API de JavaScript. Esto significa que set time Out es en si un callback
  console.log("Hola JavaScript");
}, 2000);

// Ejemplo 3

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, "Oscar");

//veramos que pasan los 2 segundos que hemos definido y que a los 2 segundos se imprime Hola Oscar. Basicamente callback es una funcion que recibe otra funcion para que sea ejecutado segun el caso
