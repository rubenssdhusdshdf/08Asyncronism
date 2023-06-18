//Llamada del método next en el objeto del Generador
console.log(g.next().value); //Imprime el primer yield: 1
console.log(g.next().value); //Imprime el segundo yield: 2
console.log(g.next().value);
console.log(g.next().value); //Si se coloca un cuarto console, la consola indica "Undefined"

//Declaración de la función del Generador pasando un argumento
function* iterate(array) {
  for (let value of array) {
    //El loop del for revisa cada elemento del array
    yield value; //value es asignado en cada ciclo
  }
}

const it = iterate(["Oscar", "Omar", "Ana", "Lucia", "Juan"]);

//la diferencia con el ejemplo anterior es que el iterador se le pasa un argumento
console.log(it.next().value); //Imprime el primer elemento del array: Oscar
console.log(it.next().value); //Imprime el segundo elemento del array: Omar
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); //Si se coloca un sexto console, la consola indica "Undefined"

// Comportamiento de var

var age = 28;

{
  console.log("Valor dentro del bloque", age); //28
  var age = 29;
}

console.log("Valor fuera del bloque", age); //29
age = age * 2;
console.log("Valor cambiado", age); // 58

// comportamiento de let

let age = 28;

{
  console.log("Valor dentro del bloque", age); // error
  var age = 29;
}

console.log("Valor fuera del bloque", age); //28
age = age * 2;
console.log("Valor cambiado", age); // 56
