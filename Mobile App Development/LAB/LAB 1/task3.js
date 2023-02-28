var x = prompt('Enter value of x: ');
var y = prompt('Enter value of y: ');
var z = prompt('Enter value of z(should be greater than x and y): ');
var num=[];
for(var i = 2; i < z; i++){
    if(i%x == 0 || i%y == 0)
        num.push(i);
}
var sum =0;
for(var i = 0; i < num.length; i++){
    sum += num[i];
}
console.log('Sum of '+x+' and '+y+' multiples = '+sum);
