min(4,8,1,3);
max(4,6,5,3,2);

function min(){
    var small = arguments[0];
    for(var i = 1; i < arguments.length; i++){
        if(small > arguments[i]){
            small = arguments[i]
        }
    }
    console.log("The minimum = "+small)
    
} 

function max(){
    var temp = arguments[0];
    for(var i = 1; i < arguments.length; i++){
        if(temp < arguments[i]){
            temp = arguments[i]
        }
    }
    console.log("The maximum = "+temp)
    
} 