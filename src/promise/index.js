const promise = new Promise(function (resolve, reject) {
  resolve("Hey!");
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Finally"));

/* 
Qué son las proemsas

El objeto Promise (Promesa) es usado para computaciones asíncronas.
Una promesa representa un valor que puede esta disponible ahora, 
en el futuro o nunca.

Promise: 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

Las promesas son una forma de obtener diferentes valores de diferentes 
peticiones pero con una forma mas amigable con código mas facil de 
comprender y controlar.

Una promesa puede estar en uno de los siguientes estados:
- Pendiente (pending) // cuando se esta ejecutando
- Cumplida (fulfilled) // regresando la información deseada
- Rechazada (rejected)
*/
