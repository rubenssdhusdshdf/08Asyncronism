const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFn = async () => {
  const somethig = await fnAsync();
  console.log(somethig);
  console.log("Hello!");
};

console.log("Before");
anotherFn();
console.log("After");

// Al correr este codigo veremos Before, After, Async!! Hello! en este orden. Async y await no bloquean a la app y por tanto llega el before, luego llega another function que tarda dos segundos para ser ejecutada una vez que eso pasa continua a after y luego se tiene que esperar a que fnAsync devuelva un resolve o reject para que el hello pueda suceder. Por tanto estamos teniendo este orden que de alguna manera nos permite validar que nuestra aplicacion no se detiene por ningun problema con lo que vendria ser el llamado de AsyncFunction y continua la logica.
