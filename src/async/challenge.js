import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// Sintaxis función asíncrona
async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// Sintaxis arrow function async
const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );
    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction(API);

/* 
Try and catch

La declaración try...catch señala un bloque de instrucciones a intentar (try), 
y especifica una respuesta si se produce una excepción (catch).

Con el uso de async y await se tiene una sintaxis más clara de código comparado a 
las promesas o callback, a la vez que se trabaja con funciones asíncronas.

Try...catch: 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch
*/