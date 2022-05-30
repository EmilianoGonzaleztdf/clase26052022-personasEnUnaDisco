let nArray: number = 5;
let array: number[] = new Array(nArray);
let i: number;
let menor21: number = 0;
let mayor21: number = 0;
let edadMaxima: number = 40;
let edadMinima: number = 18;

function generarPersonasRandom(num: number): number {
  return Math.floor(Math.random() * (edadMaxima - edadMinima) + edadMinima);
}
// fuente https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
for (i = 0; i < nArray; i++) {
  array[i] = generarPersonasRandom(edadMinima);
  console.log("ingreso la persona nº" + (i + 1), "su edad es: " + array[i]);
}

for (i = 0; i < nArray; i++) {
  if (array[i] <= 21) {
    menor21++;
  } else {
    mayor21++;
  }
}
console.log("la cantidad de personas menores de 21 años es: " + menor21);
console.log("la cantidad de personas mayores de 21 años es: " + mayor21);
