// Getter ,Setter and Stack Overflow :

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
}
const arafat = new User('arafat.ai',"145");
console.log(arafat);
console.log(arafat.email);
console.log(arafat.password);
console.log();

// Type-2:
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email(){
    return this._email.toUpperCase()
    // return ` ${this._email}arafat`
    }
    get password(){
        // return this._password.toUpperCase()
        return ` ${this._password}arafat`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
     set email(value){
     this._email = value
     }
}
const arafath = new User('arafat.ai',"kjhsdj");
console.log(arafath);
console.log(arafath.email);
console.log(arafath.password);

// Define Properties { properties_get_set } :

function User(email, password) {
    this._email = email;
    this._password = password
    Object.defineProperty(this, 'email', {
        get:function () {
            return this._email.toUpperCase()
        },
        set:function (value) {
            this._email = value
        }
    })


    Object.defineProperty(this, "password" , {
         get:function () {
            return this._password.toUpperCase()
        },
        set:function (value) {
            this.password = value
        }
    })
}
const logIn = new User("rafatjfhg.com", "Login :");
console.log(logIn.email);
console.log(logIn.password);


// Object_get_set :

const User = {
    _email:"sdjgfsd.com",
    _password: 'ghdfhg12',
    
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

// Factory Function :
const User = {
    _email:"sdjgfsd.com", // ' _  ' => underscore --> means private property/not access normal users
    _password: 'ghdfhg12',
    
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const loggedIn = Object.create(User)
console.log(loggedIn);
console.log(loggedIn.email);
console.log(loggedIn.password);





// Lexical Scoping and Closure :

// Lexical Scope :
/*
// Copying Code : MDN Website

function init() {
  let name = "Mozilla"; 
  function displayName() {
    
    console.log(name); 
  }
  displayName();
}
init();

*/

// Now, Our theory :
function outer() {
    let username = "arafat"
    function inner() {
        console.log("Inner ", username);
        
    }
    inner()
}
outer()
// console.log("Too Outer", username); // Getting Error

// Or,

function outer() {
    let username = "arafat"
    function inner() {
        console.log("Inner ", username);   
    }
    inner()
    function inner2() {
        console.log('InnerTwo', username);   
    }
    inner2()
}
outer()
// console.log("Too Outer", username); // Getting Error

// Or,

function outer() {
    let username = "arafat"
    function inner() {
        let secretCode = "my153"
        console.log("Inner ", username);   
    }
    inner()
    function inner2() {
        console.log('InnerTwo', username); 
        // console.log('My Secret Code :',secretCode); // getting error
    }
    inner2()
}
outer()
// console.log("Too Outer", username); // Getting Error

// Or,

function outer() {
    let username = "arafat"
    // console.log("Outer Code Reference By Inner Function",secretCode); // getting error.
    
    function inner() {
        let secretCode = "my153"
        console.log("Inner ", username);   
    }
    inner()
    function inner2() {
        console.log('InnerTwo', username); 
        // console.log('My Secret Code :',secretCode); // getting error
    }
    inner2()
}
outer()
// console.log("Too Outer", username); // Getting Error


        // Closure :
/*
  // Copyed MDN:
    function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
*/

 // Now, Our theory :
 /*
 <button id ="orange"> Orange </button>
 <button id ="green">Green</button>
*/

document.getElementById("orange").onclick = function() {
    document.body.style.backgroundColor = `orange`
    }
    document.getElementById("green").onclick = function() {
    document.body.style.backgroundColor = `green`
}
// It's quiet so simple for few "button's ", but if anybody give you 500 " button's " then what will you do ? Have you copied 500 times and pasted it ?

// But , don't be worried ,wait and see :

function clickHandler(color) {
//   document.body.style.backgroundColor = `${color}`  // Here is a problem,because I give you function but ,you get it execution.
    return function() {
   document.body.style.backgroundColor = `${color} `   
}  
}
document.getElementById("orange").onclick = clickHandler("orange")  
document.getElementById("green").onclick = clickHandler("green")  





// Array in Advanced :

const myArray = []
%DebugPrint(myArray)

/*
// PACKED_SMI_ELEMENTS and HOLEY_SMI_ELEMENTS: {JSVU and V8 vs V8-debug}

// Continious vs Holey :
>SMI { Small Integer}
>Packed Element
>Double {Float32Array, string, function}

Arrays inside [elements]

*/
const Array2 = [1,2,3,4,5] // PACKED_SMI_ELEMENTS
But,
// const Array3 = [1,2,3,,4,5] //HOLEY =>hole 
// const Array3 = [1,2,3,4,5,6];
Array3.push(0.6) // now, PACKED_DOUBLE_ELEMENTS
Array3.push("0.6") //PACKED_ELEMENTS
Array3[10] = 11 // HOLEY_ELEMENTS

console.log(Array3);
console.log(Array3.length);
console.log(Array3[9]); // undefined
console.log(Array3[19]); // undefined
/*
    //Bound Check :
hasOwnProperty(Array3,9)
hasOwnProperty(Array3.prototype,10)
hasOwnProperty(Object.prototype,10)

// Holes are veryexpensive in Js
*/
const arr4 = [1,2,3,5,6]
console.log(arr4[2]);

// Highest Optimization : SMI > DOUBLE > PACKED
// H_SMI > H_ DOUBLE >H_ PACKED

 const arr5 = new Array(3)
 // just 3 holes...HOLEY_SMI_ELEMENTS
 arr5[0] = "1" // HOLEY_ELEMENTS
 arr5[1] = "2" // HOLEY_ELEMENTS
 arr5[2] = "3" // HOLEY_ELEMENTS
 const arr6 = []
 arr6.push("1") // PACKED_ELEMENTS
 arr6.push("2") // PACKED_ELEMENTS
 arr6.push("3") // PACKED_ELEMENTS

 const arr7 = [1,2,3,4]
 arr7.push(NaN) // PACKED_DOUBLE
  arr7.push(Infinity) // PACKED_DOUBLE

//   MODERN Optimization: for, for-of, for-in, forEach, map,filter,reduce,find,findIndex,some,every.

     //   ``````````````````````````` The End Of JS ``````````````````````