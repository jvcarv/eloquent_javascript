// console.log(Math.min(1,2,3,0.5))
console.log("Minimum");
function min(x, y){
    if(x > y) return y
    else if(x < y) return x
    else return "Equals"
}

console.log(min(2, 3));
console.log(min(2, 2));
console.log(min(3, 2));