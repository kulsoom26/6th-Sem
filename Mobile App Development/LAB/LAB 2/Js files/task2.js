console.log("The sum = "+add(2,3));
console.log("The difference = "+sub(5,6,8,4));
console.log("The product = "+multiply(3,5,4,6));
console.log("The answer = "+divide(6,4,3,6));

function add(a,b,c){
    a = typeof a !== 'undefined' ? a : 0;
    b = typeof b !== 'undefined' ? b : 1;
    c = typeof c !== 'undefined' ? c : 2;
    return a + b + c;
}

function sub(a=3,b=5,c=6,d=1){
    return a-b-c-d;
}

function multiply(...num){
    let ans=1;
    for(let i=0; i<num.length; i++)
        ans *= num[i];
    return ans;
}

function divide(){
    var result = arguments[0];
    for(let i = 1; i < arguments.length; i++)
        result /= arguments[i] ;
    return result;
}