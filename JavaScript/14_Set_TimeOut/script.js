// setTimeout("console.log('Vishal Kumar Shaw')", 2000)

//using backticks we can write on differnet lines without semicolon
// we can cancel the set timeout with its id and clear timeout
//set timeout is for browser not for node.js runtime
setTimeout(`
console.log('hi')
`, 200)

const timer1 = setTimeout(`console.log('hello inside timer')`
, 2000)
// clearTimeout(timer1) this is best and used
//clearInterval(timer1) this can also be used
function a() {
    console.log("game is on A");
}
const timeer2 = setTimeout(
a()
, 100,123,"asdf",[1,2,3,4], {name:vishal, age: 24});

// console.log(arguments);
setInterval(`console.log("hi setinterval")`,1000)
