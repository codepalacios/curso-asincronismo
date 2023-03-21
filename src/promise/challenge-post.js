import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors", // Permiso, por defecto siempre va cors
    credentials: "same-origin",
    headers: { // Necesario indicar que se envia un tipo json
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    /* el método JSON.stringify() convierte un objeto o valor 
    de JavaScript en una cadena de texto JSON */
  });
  return response;
}

/* En https://fakeapi.platzi.com/doc/products se consigue la 
estructura de como debe ser el objeto que se quiere crear 
con POST */
const data = {
  title: "218",
  price: 218,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
  .then(reponse => reponse.json())
  .then(data => console.log(data));

/* 
Fetch POST

Fetch POST guarda (enviar a la api) información.

Hay permisos que se deben tomar en cuenta para que el 
intercambio sea seguro, hay que especificar el modo 
(mode), aquí se indica si se permite solicitudes de 
origen cruzada.

¿Qué es un origen cruzado?
Un origen tiene dominio/protocolo/puerto, un origen 
cruzado demoninado "Cross Origin" es la palabra que 
se utiliza para denomiar el tipo de peticiones que 
se realizan a un dominio diferente del dominio de 
origien de donde se realiza la petición.

Así que si se coloca cors, indica que se permiten 
ciertas solicitudes predeterminadas de origen 
cruzado como GET y POST para salvaguardar y evitar 
manipulaciones maliciosas.

Fetch: Cross-Origin Requests:
https://javascript.info/fetch-crossorigin

CORS:
https://developer.mozilla.org/en-US/docs/Glossary/CORS

Platzi Fake Store API Products: 
https://fakeapi.platzi.com/doc/products
*/


/* Contribuciones de código por: Maria Rodriguez */

//Con PUT para actualizar un objeto
function putData(urlApi, dataUpdate) {
  const response = fetch(urlApi, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataUpdate)
  });
  return response;
}

const dataUpdate = {
  "title": "Se puede cambiar tambien otras caracteristicas",
  "price": 10 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
  .then(response => response.json())
  .then(dataUpdate => console.log(dataUpdate));

//Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) { //no es necesario pasar la data
  const response = fetch(urlApi, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'same-origin',
      headers:{
          'Content-Type': 'application/json'
      } //no es necesario especificar el body
  });
  return response;
}

const idNumber = 271; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
  .then(() => {
      console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
  });
  