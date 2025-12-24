/*
               DataType has 2 type:
i.Primitive ;
ii.Non-Primitive.

DataType defines as how to store in memory ,and how to access data in memory.

i.primitive: call by Value
   7 types :
a.String,
b.Number,
c.Boolean,
d.Null,
e.Undefined,
f.Symbol,
g.BigInt

ii.Non-Primitive:call by reference
a.Arrays,
const heroes = ["Batman",'Superman',"Spiderman"]

b.Objects,
{
name:"Arafat",
age:22,
Location:Demra
}
or,
let myObj =
{
name:"Arafat",
age:22,
Location:Demra
}


c.Functions.
const myFunction = function (){
console.log("Hello World ");
}

Or,

async () => {
    console.log("Hello World ");
}


Js is a Dynamic Language,Not Static Languages.
*/
/*
const score = 100
const scoreValue = 100.3

//but, const score:number = 100 //TypeScript

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined   //same

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId); // False => are not same
const bigNumber = 3545344254236n
*/


const outsideTemp = null
const id = Symbol("123")
// const bigNumber = 3545344254236n
// console.table([outsideTemp,id,bigNumber]);
console.log(outsideTemp);
console.log(id);
// console.log(bigNumber); 

console.log(typeof outsideTemp);//object
console.log(typeof id);//symbol
console.log(typeof bigNumber);//bigint //undefined {sometimes} =>When "bigint or bigNumber" is 'commented' already.

// link:  https://262.ecma-international.org/5.1/#sec-11.4.3
