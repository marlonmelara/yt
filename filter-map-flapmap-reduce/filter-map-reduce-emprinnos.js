// https://youtu.be/zRuSVDLx8kE?si=LfYApmxhPnWmvSN_

const autos = [
  {
    modelo: "Ford Mustang",
    millaje: 25000,
    motor: 5.0,
    produccion: 2017,
    precio: 25000,
  },
  {
    modelo: "Honda Accord",
    millaje: 10000,
    produccion: 2021,
    precio: 20000,
  },
  {
    modelo: "Mini Cooper",
    millaje: 15000,
    produccion: 2005,
    precio: 5000,
  },
];

// 1. Método Map
/** El método ejecuta una función para cada elemento
 * del array creando un nuevo array con los resultados */

const modelos = autos.map((autos) => autos.modelo);
console.log(modelos);

const precioEuro = autos.map((autos) => autos.precio * 0.85);
console.log(precioEuro);

// No se debe usar map en los siguientes casos:

// A. Cuando no hace falta crear un nuevo array
// B. La callback no retorna nada

// 2. Método filter
/** El método filter al igual que map crea un nuevo array
 * colocando los elementos que pasa algún criterio */

const autosNuevos = autos.filter(
  (autos) => autos.produccion > 2010 && autos.millaje < 30000
);

console.log(autosNuevos);

// 3. Método reduce
/** El método reduce ejecuta una función (reducer) sobre
 * cada elemento del array devolviendo un solo valor */

const num = [0, 1, 2, 3, 4];

const suma = num.reduce((total, valorCorriente) => {
  console.log(`Total: ${total}`);
  console.log(`Valor Corriente: ${valorCorriente}`);
  return total + valorCorriente;
}, 0);

console.log(suma);

const funcionReductora = (millajeInicial, valorCorriente) =>
  millajeInicial + valorCorriente.millaje;

let x = autos.reduce(funcionReductora, 0);
console.log(x);
