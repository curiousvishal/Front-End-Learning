function a(b){
    console.log(b);
}
// a('Hiiii')

a("hello")
// console.log(typeof a);\
const num = 34
function sayhi(){
    console.log("hiiiiiiiiii")
}
a(sayhi)
//behind the scene function is a type of object
console.dir(num);
console.dir(a)