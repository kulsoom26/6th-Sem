var bio = 'My name is Kulsoom Khurshid. I am a student of Comsats University Islamabad. I\'m 21 years old.';
var bioObject = {firstName:'Kulsoom', lastName:'Khurshid', University:'Comsats University Islamabad', age:21};
var bioMultiple =[
    {firstName:'Sabah', lastName:'Khurshid', University:'Comsats University Islamabad', age:24},
    {firstName:'Kulsoom', lastName:'Khurshid', University:'Comsats University Islamabad', age:21},
    {firstName:'Labeeka', lastName:'Hameed', University:'Comsats University Islamabad', age:22}
]
console.log(bio);
console.log(bioObject.firstName);
console.log(bioObject.lastName);
console.log(bioObject.University);
console.log(bioObject.age);
console.log(Object.keys(bioObject).length);
if(bioObject.age > 20)
    console.log('Mature');
else
    console.log('Teenager');

for(var i = 0; i < Object.keys(bioMultiple).length; i++){
    console.log(bioMultiple[i]);
}
