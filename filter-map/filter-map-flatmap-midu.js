// https://youtu.be/em_Vh7ZGrnw?si=zCfkfR8aPD0MN-bO

let array1 = [1, 2, 3, 4, 5, 6]
  .filter((n) => n % 2 !== 0) // Filtra los impares
  .map((n) => n * 2);

console.log(array1);

let array2 = [1, 2, 3, 4, 5, 6];
array2 = array2
  .map((n) => (n % 2 === 0 ? false : n * 2))
  .filter((n) => n !== false);

console.log(array2);

let array3 = [1, 2, 3, 4, 5, 6];

array3 = array3.flatMap((n) => (n % 2 === 0 ? [] : [n * 2]));

console.log(array3);
