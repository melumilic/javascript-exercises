const ftoc = function(number) {
  celsius = (number-32)*5.0/9;
  return Math.round(celsius*10)/10;
};

const ctof = function(number) {
  fahrenheit=(number*9.0/5)+32;
  return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
