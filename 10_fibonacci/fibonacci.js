const fibonacci = function(num) {
    if(num<0){
        return "OOPS";
    }
    if(typeof(num)==="string"){
        num = parseInt(num);
    }
    let a = 0;
    let b = 1;
    let fib = 1;
    for(let i = 1;i<num;i++){
        fib=(a+b);
        a=b;
        b=fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
