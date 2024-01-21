// https://youtu.be/em_Vh7ZGrnw?si=zCfkfR8aPD0MN-bO

/* Este enfoque evita la mutación directa de los arrays originales y es más alineado con los principios de la programación funcional. */

// Utiliza const para definir arrays inmutables
const originalArray = [1, 2, 3, 4, 5, 6];

// Crea un nuevo array con los números impares duplicados
const doubledOddsArray1 = originalArray
  .filter((n) => n % 2 !== 0) // Filtra los impares
  .map((n) => n * 2); // Duplica los valores

console.log(doubledOddsArray1);

// Crea un nuevo array con los números impares duplicados
const doubledOddsArray2 = originalArray
  .map((n) => (n % 2 === 0 ? false : n * 2)) // Mapea a falso los pares y duplica los impares
  .filter((n) => n); // Filtra los falsos, equivalente a n !== false

console.log(doubledOddsArray2);

// Crea un nuevo array con los números impares duplicados
const doubledOddsArray3 = originalArray.flatMap((n) =>
  n % 2 === 0 ? [] : [n * 2]
); // Usa flatMap para mapear y aplanar en un solo paso

console.log(doubledOddsArray3);
