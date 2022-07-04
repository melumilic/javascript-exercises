const palindromes = function (string) {
    let regex = /\p{P}/gu;
    let cleanString = string.replace(/[^\p{L}\p{N}\s]/gu, '');
    cleanString = cleanString.toLowerCase().replace(/ /g,"");
    let center = Math.floor(cleanString.length/2);
    if(cleanString.length%2===0){
        return cleanString.substr(0,center)===cleanString.substr(center).split("").reverse().join("");
    }else{
        return cleanString.substr(0,center)===cleanString.substr(center+1).split("").reverse().join("");
    }
    
};

// Do not edit below this line
module.exports = palindromes;
