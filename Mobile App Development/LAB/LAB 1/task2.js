let prime = [2,3,5,7,11,13];
var a;
for(var i = 0; i < prime.length; i++)
    a = prime[i];
    
a++;
for(var j = 2; j < a; j++){
    if(a % j == 0){
        a++;
        j=2;
    }
    
}
console.log(a+' is the next prime number');
prime.push(a);
console.log(prime);
