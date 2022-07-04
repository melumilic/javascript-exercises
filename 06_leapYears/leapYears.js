const leapYears = function(number) {
    leapTest = number%4===0&&(number%100!==0||number%400===0);
    return leapTest;
};

// Do not edit below this line
module.exports = leapYears;
