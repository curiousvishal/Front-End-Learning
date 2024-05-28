Math.floor(2.9999)// 2   makes smaller 
Math.floor(-2.9999)// -3  removes decimal

Math.ceil(2.1111) // 3 makes bigger 

Math.round(2.49) // 2
Math.round(2.51) //3

// console.log(Math.ceil(Math.random()*10));// 1 - 10
let min = 10
let max = 20

console.log(Math.floor(Math.random()* (max - min + 1) + min));
