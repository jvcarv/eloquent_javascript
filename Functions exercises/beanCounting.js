console.log("Bean Counting");

const countBs = x => {
    return countChar(x, "B");
}

function countChar(string, char){
    let amountChar = 0;

    for(i = 0; i <= string.length - 1; i++){
        if(string[i] == char){
            amountChar ++;
        }
    }

    return amountChar;
}

console.log(countBs("BBBasfsabBSAB"));