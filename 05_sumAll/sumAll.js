const sumAll = function (numStart, numEnd) {
    if(typeof(numStart)!=="number"||typeof(numEnd)!=="number"||numStart<0||numEnd<0){
        return "ERROR";
    }
  return Math.abs(
    (numEnd * (numEnd + 1)) / 2 - (numStart * (numStart + 1)) / 2 
  )+1;
};

// Do not edit below this line
module.exports = sumAll;
