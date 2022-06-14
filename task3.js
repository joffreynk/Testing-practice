class Calculator {
  add(a,b) {
    return a+b;
  }

  substruct(a,b) {
    return a-b;
  }

  multiply(a,b) {
    return a*b;
  }

  devide(a,b) {
    // if(b===0) throw new Error('cannot devide by 0');
    return a/b;
  }
}

const calculator = new Calculator();
module.exports = {
  add:calculator.add,
  substruct:calculator.substruct,
  multiply:calculator.multiply,
  devide:calculator.devide
}