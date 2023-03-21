function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log('Hola JavaScript');
}, 5000);

function gretting(name) {
    console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, 'Oscar'); // funcion, tiempo, parametros.

/*
Callbacks

Una función callback es una función que se pasa a otra función 
como un argumento, que luego se invoca  dentro de la función 
externa para completar algún tipo de rutina o acción.

No es necesario colcoar los paréntesis para llamar a la 
función a hacer callback, ya que sería un error, puesto 
que invocaría la función inmediatamente y no cuando la
necesitemos ejecutar.

console.log(calc(2, 2, sum())); // Forma incorrecta

La función a hacer que se llamara dentro de la función 
externa puede tener como nombre callback o cualquier 
otro nombre que se le quiera asignar.

setTimeout permite ejecutar código en un tiempo determinado 
que vamos a definir. setTimeout utiliza el concepto 
de callbacks.

Dentro del lenguaje de programación tenemos una serie de 
elementos que utilizan el concepto de callbacks.
*/
