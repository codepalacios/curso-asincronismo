import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
};

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log("hola");
//   })
//   .catch(error => console.log(error));

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));

/*
Fetch 

Para poder trabajar con fetch dentro de lo que es node debemos 
instalar el recurso node-fetch. Para ello instalamos 
en la terminal npm i node-fetch y ya podremos hacer 
llamados a la api. Luego se debe importar en el archivo 
mediante import fetch from "node-fetch".

Lo que se realiza es una función que recibe como argumento la 
url de la api que queremos llamar, y esto retornara el llamado 
consecuente de fetch que no es más que una promesa, por tanto, 
vamos a poder utilizar las palabras reservadas .then(), .catch() 
y finally(); según sea el caso y con esto hacer múltiples 
elementos para el llamado a la api.

fetch por defecto es una promesa, por lo tanto, no es necesario 
agregar new Promise(). El recurso de fetch tiene que ser 
reconocido como un module para que pueda ser ejecutado por node, 
por tanto, se tiene que agregar a packaje.json la descripción 
"type": "module". En el navegador no sería necesario, ya que 
viene incluido por defecto.

Se puede hacer uso de .then() múltiples veces para hacer 
múltiples peticiones. También la respuesta que regresa fetch 
de la data solicitada es HTTP, por tanto, para transformar la
información se utiliza .jason().
*/
