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

  get straight() {
    return this.getStraight(this.array)
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

  getStraight(array) {
    const containSubArrays = array.some(value => 'object' === typeof value);
    if (!containSubArrays) return true;
    const isEqualToLength = array.map(value => value.length)
    const allIsEqual = isEqualToLength.every(value => value === isEqualToLength[0])
    if (!allIsEqual) return false;
    for (const value of array) {
      if (isArray(value)) {
        const res = this.getStraight(value)
        if (!res) return false
      }
      return true
    }
  }

  getCompute(array) {
    return array.reduce(
      (suma, value) => suma + (isArray(value) ? this.getCompute(value) : value),
      0
    );
  }
}

const a = [1,2], 
  b = [[1,2],[2,4]], 
  c = [[1,2],[2,4],[2,4]], 
  d = [[[3,4],[6,5]]], 
  e = [[[1, 2, 3]], [[5, 6, 7], [5, 4, 3]], [[3, 5, 6], [4, 8, 3], [2, 3]]], 
  f = [[[1, 2, 3], [2, 3, 4]], [[5, 6, 7], [5, 4, 3]], [[3, 5, 6], [4, 8, 3]]];

const showLogs = (type = '') => {
  console.log(`=======  Start ${type}  =======`);
  [a, b, c, d, e, f].forEach(value => {
    console.log(new Matriz(value)[type.toLowerCase()]);
  })
  console.log(`=======  End ${type}  =======\n`);
}

showLogs('Dimension')
showLogs('Compute')
showLogs('Straight')