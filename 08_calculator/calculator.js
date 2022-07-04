const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
	arr = numbers;
  var sum = 0;
  // for (let index = 0; index < nums.length; index++) {
  //   sum = sum +nums[index];
  // }
  // return sum;
  return arr.reduce((a, b) => a+b,0)
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let factorial = 1;
	for(let i = 1; i<=a;i++){
    factorial*=i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
