// https://youtu.be/NhKPRW3NptI?si=SdZPyUx-TwVgUISl

// Sumar todos los números de un array
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reductora = (sum, valorActual) => sum + valorActual;

const total = arr1.reduce(reductora, 0);
console.log(total); // 45

// Sumar los números enteros de un array
const arr2 = [200, 100, 0.2, 0.4, 0.5, 0.4, 0.1, 0.1];

const checkIntegers = (sum, valorActual) => {
  let int1 = 0;
  if (Number.isInteger(valorActual)) {
    int1 = valorActual;
  }
  return sum + int1;
};

const suma = arr2.reduce(checkIntegers, 0);
console.log(suma); // 300

// Sumar solamente los números
const arr3 = [6, 10, 20, "otro", "x", "gato"];

const checkNumbers = (sum, value) => {
  if (typeof value == "number") {
    sum = sum + value;
  }
  return sum;
};

const sumaNum = arr3.reduce(checkNumbers, 0);
console.log(sumaNum); // 36
