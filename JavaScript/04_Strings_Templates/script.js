const message = "hello"
const letter = 'hello my name is vishal'[7]
console.log(letter);
const message2 = "world"
// console.log(message.length);
// console.log(message.concat(", " , message2));
let accNo = '1234567890'// should be string
let hiddenNo = accNo.padStart(16,'*')
// let hiddenNo = accNo.padEnd(16,'*')

console.log(hiddenNo);
console.log(message.charCodeAt(2));


message.split(' ')// splits  on basis of space and makes an array