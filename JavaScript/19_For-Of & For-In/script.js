const fruits =['banana', 'apple', 'mango', 'orange']
//simple
for(let i =0;i<fruits.length; i++){
    // console.log(fruits[i]);
}
//for-of  singular convention
for(let fruit of fruits){
    console.log(fruit);
}
// for of can use in for-of loop
const user = 'vishal'
for(let letter of user){
    console.log(letter);
}
// object is not iterable  cannot use for of , use for IN
const person = {
    firstName: 'vishal',
    lastName: 'shaw'
}
for(const key in person){
    console.log(key + " : " + person[key])
}

//better and faster 
const presonValues = Object.values(person)
const personKeys = Object.keys(person)
const personEntries = Object.entries(person)

// we can use now after converting in array
for(const key of personKeys){
    console.log(person[key]);
}

// For Each


fruits.forEach(function(fruit){
    // console.log(fruit);
})

fruits.forEach((fruit)=>{
    console.log(fruit);
})
