profile = (name, last) => name + " " + last;
console.log("Name: "+profile('Kulsoom','Khurshid'));

ThisIsANumber = num => num * 45;
console.log("The answer= "+ThisIsANumber(2));

retrieveAnEven = (myarray) => {
    let num = [];
    for (let j of myarray) {
        if (j % 2 === 0) {
            num.push(j);
        }
    }
    return num;
}
console.log("Even numbers: "+retrieveAnEven([2,3,4,5,6]));
