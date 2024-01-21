// https://youtu.be/POfrSsYx8Lo

/** El operador de propagación (spread operator) ... permite expandir elementos * de un iterable (como un array) en lugares donde se esperan cero o
 * más argumentos (en llamadas a funciones) o elementos (en arrays), o 4
 * parejas de clave-valor (en objetos). */

// Crea 'numbers2' expandiendo 'numbers1' entre los valores 1 y 5
numbers1 = [2, 3, 4];
numbers2 = [1, ...numbers1, 5]; // [1, 2, 3, 4, 5]

console.log(numbers2);

// Convierte el array 'numbers2' en un objeto con índices como claves
ObjectNumbers = { ...numbers2 }; // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

console.log(ObjectNumbers);

// Calcula el producto de los elementos de 'numbers2' al pasarlos como argumentos
function multiplicar(a, b, c, d, e) {
  return a * b * c * d * e; // 1 * 2 * 3 * 4 * 5
}

console.log(multiplicar(...numbers2)); // 120

// Crea 'numbers3' como una copia de 'numbers2'
// De igual forma funciona para objetos
numbers3 = [...numbers2]; // [1, 2, 3, 4, 5]

console.log(numbers3);
