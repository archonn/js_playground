function sum(num1 = 0, num2 = 0) {
  const sum = num1 + num2;
  return sum;
}

const sumFunc = function (n1, n2) {
  return n1 + n2
}

const sumFunc2 = (n1, n2) => {
  return n1 + n2
}

const sumFunc3 = (n1, n2) => n1 + n2

console.log(sum())
console.log(sum(30, 100));

function runThis(fn) {
  fn();
}

runThis(function () {
  console.log('this is running')
})

/**
 * add(n1, n2) -> adds two values
 * sub(n1, n2) -> subtracts n2 from n1
 * multiply(n1, n2) -> multiplies n1 and n2
 * divide(n1, n2) -> divides n1 and n2 
 */
