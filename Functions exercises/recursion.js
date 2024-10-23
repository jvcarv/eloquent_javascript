console.log("Recursion");

function isEven(x){
    if(x === 0) return "Even"
    else if (x === 1) return "Odd"
    else if (x > 0) return isEven(x-2) 
    else if (x < 0) return isEven(x+2) 
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));
