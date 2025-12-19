            // Data Type :
// "use strict";
let name = " Al - Arafat " // string
console.log(typeof "Arafat");//string
console.log(typeof name);//string


let age = 18 // number {2 to power 53 or something}
let time = " 18 hour " // string
let isLoggedIn = true // boolean = true / false
let bigint =154874576444444449648444444471616944444 // bigint //SyntaxError: Octal literals are not allowed in strict mode.যদি "use strict " ব্যবহার করা হয় তবে bigint কাজ করে না,তাই "use strict " comment  করে রাখতে হল...।

console.log(typeof null); // Object
console.log(typeof undefined); //undefine

console.table([bigint, isLoggedIn,time,age,name]);

                // Data Type Conversion
let score = 33
console.log(typeof score);
console.log(typeof ( score));
let scores = " 33 "
console.log(typeof scores);
console.log(typeof ( scores));

  // but, now it's time to conversion of Data type :
 let valueInNumber = " 1534 "
  let valueOfNumber = Number( valueInNumber) // Note That : " 1534" was a string but " Number( valueInNumber)" this method is convert into number ,like : string ==> number.
console.log(typeof ( valueOfNumber ));

let subject = 14345
let subjects = String( subject )
console.log(subjects);
console.log(typeof ( subjects ));

// But, The Problem is :
let core = "33abc"
console.log(typeof core);
let cores = Number( core )
console.log(cores); // NaN =>Not a Number

// let null = null // SyntaxError: Unexpected token 'null'
let nulls = null
let nullism = Number( nulls )
console.log(nullism); // 0

// let undefined = undefined // ReferenceError: Cannot access 'undefined' before initialization
let undefine = undefined
let Unexpected = Number( undefine )
console.log(Unexpected); // NaN

// let boolean = true // 1
let boolean = false // 0
let booleans = Number( boolean )
console.log(booleans); 

let Name = " Arafat"
let names = Number( Name )
console.log(names); // NaN

let empty = " "
let empties = Number( empty )
console.log(empties); // 0

// let log = 1 // true
//  let log = 2 // true
// let log = 0 // false
// let log = "" // false ...But,
// let log = " " // True { " <spaces>"}
let log = " arafat" //true
let logs = Boolean(log )
console.log(logs);




