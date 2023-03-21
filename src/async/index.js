const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Async!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFn = async () => {
  // La palabra await estara dentro de la lógica a implementar
  const somethig = await fnAsync();
  console.log(somethig); // Se imprime mientras se espera
  console.log("Hello!"); // Espera ejecución de await
};

console.log("Before");
anotherFn();
console.log("After");

/*
Funciones asíncronas.

La declaración de función async define una función asíncrona que devuelve un objeto, lo 
cual permite a un programa correr una función sin congelar toda la compilación. Dada que 
la finalidad de las funciones async/await es simplificar el comportamineto del uso 
asíncrono de promesas, se hace más fácil escribir promesas.

La palabra async antes de la función, hace que la función devuelve una promesa. La 
palabra await se utiliza dentro de la funciones async, lo que hace que el programa 
espere hasta que la variable (promesa) se resuelva para continuar.

Función Async:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
*/
