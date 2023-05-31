(() => {
  class MyArray {
    constructor(private string: string) {}

    operation() {
      const pattern = /^[\d\s()+\-*/]+$/;
      const parenthesesRegex = /(\(|\))/g;
      const parenthesesCount = (this.string.match(parenthesesRegex) || [])
        .length;

      if (parenthesesCount % 2 !== 0) return false;

      const stack = [];

      for (let i = 0; i < this.string.length; i++) {
        if (this.string[i] === '(') {
          stack.push('(');
        } else if (this.string[i] === ')') {
          stack.pop();
        }
      }

      return stack.length === 0 && pattern.test(this.string);
    }

    compute() {
      if (!this.operation()) {
        return false;
      }

      try {
        return eval(this.string)
      } catch {
        return false;
      }
    }
  }

  const a = 'Hello world',
    b = '2 + 10 / 2 - 20',
    c = '(2 + 10) / 2 - 20',
    d = '(2 + 10 /2 - 20';

  const showLogs = (type = '') => {
    console.log(`=======  Start ${type}  =======`);
    [a, b, c, d].forEach((value) => {
      console.log((new MyArray(value) as any)[type.toLowerCase()]());
    });
    console.log(`=======  End ${type}  =======\n`);
  };

  showLogs('Operation');
  showLogs('Compute');
})();
