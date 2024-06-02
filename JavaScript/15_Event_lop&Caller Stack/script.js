console.log('hi');
//synchronous
function hello() {
    console.log('hello world');
}
//synchronous
for(let i = 0; i<5; i++){
console.log(i);
}

// Asynchronous Function
setTimeout(() => {
    console.log('hi-3');
},0);
// js keeps set timeout at another place not in call stack 
// setTimeout journey -- web apis => callback Queue => call stack
console.log('hi-2');

// Event Loupe 