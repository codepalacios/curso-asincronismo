const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1"; // Llamado al API

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest(); // referencia

  xhttp.open("GET", urlApi, true); // abrir conexion al api (tipo petición, url, habilitar conexión)
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) { // validar el tipo de estado en el que se encuentra solicitud
      if (xhttp.status === 200) { // validando el status sobre valor y tipo
        callback(null, JSON.parse(xhttp.responseText)); // null, transformación de los datos de texto a objetos
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null); // error, null (por que no estoy regresando ningún dato)
      }
    }
  };
  xhttp.send(); // ejecutando o enviando la petición (logica previamente creada)
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});

/* 
XMLHTTPRequest

XMLHTTPRequest nos permite realizar peticiones a recuros XML o JSON.

Como se trabaja todo a nivel de consola o terminal es necersario 
agregar unos elementos que nos permitan trabajar con el método de 
XMLHTTPRequest, para ello instalamos el recurso en la terminal 
npm i xmlhttprequest. Cuando se trabaja con el navegador no es 
necesiario instalarlo, pero para ser entendido en la ejecución 
interna de nuestro editor de código o a nivel de los script que 
vamos a contruir es necesario agregar el paquete para trabajar.

La función fetchData() recibe la url (en este caso del API) y el
callback que va a ser una función anónima para recibir la 
solicitud que nos esta entregando el llamado al API (información 
que nos va ha retornar los elementos ya sea la data que estemos 
recibiendo o el error que nos pueda entregar la llamada).

El elemento xhttp.onreadystatechange permite escuchar diferentes 
estados que tiene la solicitud y con esto saber cuando esta 
disponible la información.

Existen 5 estados en una llamado XMLHttpRequest:
- 0 --> Se ha inicializado.
- 1 --> Loading (cargando)
- 2 --> Se ha cargado
- 3 --> Procesamiento si existe alguna descarga
- 4 --> Completado

El elemento xhttp.status retorna el estado de la respuesta de la 
petición (200,400,500). Respuesta del servicior.

XMLHTTPRequest tiene soporte en todos los navegadores y permite 
tener un control de las peticiones que queramos realizar.

xmlhttprequest:
https://www.npmjs.com/package/xmlhttprequest

Platzi Fake Store API: 
https://fakeapi.platzi.com/

Códigos de estado de respuesta HTTP:
https://developer.mozilla.org/es/docs/Web/HTTP/Status
*/

/* 
Fetch Data 

El método fetchData() nos ayuda a hacer solicitudes a la api de 
la información deseada, se invoca pasándole como argumentos la 
variable url de la API deseada (concatenado) y una función 
anónima que recibe 2 parámetros (un objeto de error y un arreglo 
que almacena todos los objetos traidos por la API).

fetchData(url-a-hacer-peticion, callback);
// callback es una función anónima que regresara o un error en su
// primer valor o la información del resultado del llamado al api

Al momento de utilizar fetchData() es importante tener cuidado 
para no anidar muchas peticiones, ya que se podría crear un 
código espagueti que dificulte la lectura y compresión 
del programa por la dificultad de la lógica a emplear.
*/

/* 
Callback Hell

Callback Hell consisten en múltiples callbacks anidados que 
provocan que el código se vuelva difícil de leer y "debuggear" 
y por eso se debe evitar.

Mediante callback hell pudimos realizar varias peticiones al 
api, es importante analizar cada api, ya que sus estructuras 
pueden variar y por ende existen infinidad de posibilidades 
para hacer solucitudes. En el caso de la fake api de platzi 
se realizaron solicitudes mediante su id, ya que de esa forma
pudimos hacer uso de la estructura para obtener la data deseada.

Para realizar la solicitud en la terminal podemos usar el comando 
node src/callback/challenge.js, o modificar el script en el 
archivo package.json de la siguiente manera 
"callback": "node src/callback/challenge.js", y luego ejecutar el
comando en terminal npm run callback para hacer la solicitud.
*/
