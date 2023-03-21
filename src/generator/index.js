function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["oscar", "omar", "ana", "lucia", "juan"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

/*
Generators 

El objeto Generator es retornado por una función generator y es conformado 
tanto el protocolo iterable como el protocolo iterador.

Un generador en JavaScript consta de una función generadora que muestra un 
objeto iterable Generator. La palabra reservada yield se usa para retorna, 
pausar y reanudar una función generadora.

Entre las propiedades del iterador está next() que permite acceder a la 
función del generador y obtener con yield dos valores: value y el estado 
done. 

{ value: 'oscar', done: false }
// Done es false mientras existan elementos por iterar
// Done es true si no existen elementos por iterar

Generador:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
*/
