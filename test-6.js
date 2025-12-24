/*
              Memory:
==> 2 types:
1. Stack{Primitive}[Copies Value],
2. Heap{Non-Primitive}[Reference Value]
*/
// Stack{Primitive}[Copies Value] :
/*
let myYoutubename = "Arafatdotcom"
let anotherChannel = myYoutubename
anotherChannel = "Arfandotcom"
// console.log(anotherChannel);
// console.log(myYoutubename);

// Heap{Non-Primitive}[Reference Value] :

let userOne = {
    email: "usergoogle.com",
    upi: 'userbl'
}
let userTwo = userOne
userTwo.email = "arafaatdotcom"
// console.log(userOne.email);
// console.log(userTwo.email);
*/

let myYoutubeName = "Arafatdotcom"
let anotherChannel = myYoutubeName // " ReferenceError: myYoutubeName is not defined "  ==>If I commented {" let myYoutubeName = "Arafatdotcom" "}
anotherChannel = "Arfandotcom"
console.log(anotherChannel);
console.log(myYoutubeName);
console.table([myYoutubeName,anotherChannel]);

let myObjectOne = {
    email: "usergoogle.com",
    upi: 'userbl'
}
let myObjectTwo = myObjectOne
myObjectTwo.email = "bakibullahdotcom"

myObjectTwo.upi = "hyapi.BL"
console.log(myObjectOne.email);
console.log(myObjectTwo.email);

console.log(myObjectOne.upi);
console.log(myObjectTwo.upi);

console.table([myObjectOne,myObjectTwo]);

console.table([myYoutubeName,anotherChannel,myObjectOne,myObjectTwo]);
