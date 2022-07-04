const removeFromArray = function (arr, ...args) {
  let temp = [...arr];
  let things = [...args];
  for (let i = 0; i < args.length; i++) {
    let testVar = temp.indexOf(things[i]);
    if(testVar===-1){
        continue;
    }
    temp.splice(testVar, 1);
  }
  return temp;
};

// Do not edit below this line
module.exports = removeFromArray;
