const myName = "vishal"

const username = "shaw"
const username2 = "shaw"

const user = {
  firstname: "vishal",
  lastname: "shaw",
  pata: {
    city: "asansol",
    pinCode: 343434,
    state: "west bengal",
    moreDetails: {
      population: 247989237,
      area: "432 sq km",
    },
  },
}
Object.seal(user)// seals the object
Object.freeze(user)// cannot delete and add elements
'mobileNumber' in user // false  key is present or not
'firstname' in user // true
// const user2 = {
//   name : 'curious'
//   }
//user and user2 has different address

const user2 = user// this doesn't copy it only passes the reference
// how to exactly copy the object 
const user3 ={}
Object.assign(user3, user)// this will create a new address
const user4 = {...user}//spread operator


//copy array
const fruits =  ['apple', 'mango', 'orange', 'grapes']
const myfruits = []
Object.assign(myfruits, fruits)
console.log(myfruits);

const myfruits2 = [].concat(fruits)

