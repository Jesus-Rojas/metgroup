const isArray = (value) => typeof value === 'object' && Array.isArray(value);

class Matriz {
  constructor (array) {
    if (!isArray(array)) throw new Error('Should be an array of numbers')
    this.validateMatrizRecursive(array)
    this.array = array
  }

  get dimension() {
    return this.getDimension(this.array)
  }

  get compute() {
    return this.getCompute(this.array)
  }

  validateMatrizRecursive(array) {
    if (typeof array === 'number') return;
    if (!isArray(array)) throw new Error('Should be a number')
    for (const value of array) {
      this.validateMatrizRecursive(value)
    }
  }

  getDimension(array) {
    if (!isArray(array)) return 0;
    if (array.length === 0) return 1;
    const profundidades = array.map(value => this.getDimension(value));
    const maxProfundidad = Math.max(...profundidades);
    return maxProfundidad + 1;
  }

  straight() {

  }

  getCompute(array) {
    return array.reduce(
      (suma, value) => suma + (isArray(value) ? this.getCompute(value) : value),
      0
    );
  }
}

const prueba = new Matriz([[[1,[],[],[[[[[[[]]]]]]]]],1,[1,[1,2,3,[5,4]]]])
console.log(prueba.dimension);
console.log(prueba.compute);

// a. o.dimension -> Devuelve el número entero que define la dimensión del arreglo o matriz en su mayor profundidad.
// b. o.straight -> Devuelve true o false según el siguiente criterio: -True: Si el arreglo o matriz contiene la misma cantidad de elementos en cada una de sus dimensiones (Matriz uniforme). -False: Caso contrario.
// c. o.compute -> Devuelve el número entero resultado de la suma de todos los números incluídos en la matriz sin importar el tamaño o dimensión.