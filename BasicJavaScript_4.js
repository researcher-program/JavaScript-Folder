/*
            Array and Arrays Functions:
            */
                    // Array:
         /*
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
     JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
        JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
           JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
                JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
         */ 
                   /*
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
        A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.
                   */
/*
1. () ==> Parenthesis / Parentheses /Round Brackets ==> Used For Methods ;
2. {} ==> Curly Brackets ==> Used To Set Scope ;
3. [] ==> Square Brackets ==> Used For Arrays ;
*/ 
/*
const myArr = [0,1,2,3,4,5,true,'Arafat',"Arfan"]
console.log(myArr["one"]);
const myHeros = ["Arafat","Arfan"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);
 console.log(myArr2[0]);
console.log(myHeros[0]);
                    //Array's Methods:
myArr.push(6) // Add in Array[in last positions] 
myArr.pop() // remove in Array[in last positions]
myArr.unshift(9) // Add in Array[in first positions]
myArr.shift() // remove in Array[in first positions]
console.log(myArr);
console.log(myArr.includes(10)); //false
console.log(myArr.indexOf(10)); // -1{All time same}
console.log(myArr.indexOf(3)); // 3
const newArr = myArr.join() // convert into "array" to "string".
console.log(myArr);
console.log(newArr);
console.log( typeof newArr);

        // slice, splice
console.log("A = ",myArr);
const myn1 = myArr.slice(1,3) // [1,2]{not include 0 and 3}(starting point-1,end point-2).
console.log(myn1);
console.log('B = ', myArr);
const myn2 = myArr.splice(1,3) 
//     ==> splice :
// [1,2,3]  
// that means A=[0,1,2,3,4,5,true,'Arafat',"Arfan"]{Main}
// C = [0,4,5,true,'Arafat',"Arfan"]
// [1,2,3] ==>not includes in {main brance 'C'} 

console.log('C = ', myArr);
console.log(myn1);
console.log(myn2);

if you know more about array's then click on this :
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/
/*
        ----------------------------- X ---------------------------
 */           // Array's Function:

const { useReducer } = require("react")

 /*
 Browser --> inspect --> Then ...
 const Numbers = [1,2,3,4,5] =>undefined
=>Numbers (5) [1, 2, 3, 4, 5]
0: 11: 22: 33: 44: 5
length: 5
[[Prototype]]: 
Array(0)at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()

length: 
0map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()

values: 
ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}

[[Prototype]]: 
Objectconstructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()

__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter
__()__lookupGetter__: ƒ __lookupGetter
__()__lookupSetter__: ƒ __lookupSetter
__()__proto__: (...)get __proto__: ƒ __proto__()

length: 
0name: "get __proto__"arguments: (...)
caller: (...)

[[Prototype]]: 
ƒ ()[[Scopes]]: Scopes[0]set __proto__: ƒ __proto__()
length: 
1name: "set __proto__"arguments: (...)caller: (...)

[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)
bind: ƒ bind()
call: ƒ call()
caller: (...)
constructor: ƒ Function()
length: 
0name: ""toString: ƒ toString()
Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ arguments
()set arguments: ƒ arguments()
get caller: ƒ caller()
set caller: ƒ caller()

[[FunctionLocation]]: [[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]No properties
*/
const mc_heros = [ "Thor","Iron-man","SpiderMan"]
const dc_heros = [ "SuperMan","Flash","BatMan"]
mc_heros.push(dc_heros) 
// mc_heros.concat(dc_heros) 
// console.log(mc_heros);
// console.log(mc_heros[3][1]);
const allHeros = mc_heros.concat(dc_heros)  // Finally  2 Arrays marges...
// console.log(allHeros);
const all_new_heros = [...mc_heros,...dc_heros] // ... ==>spread/ spread out==>all arrays are marged.
// console.log(all_new_heros);// Finally  2 Arrays marges...{same}

const another_array = [1,2,3,[4,5,6],7,[8,9,10],[11,12,[13,14,15],16,17],18,19,20]
const real_another_array = another_array.flat(Infinity) // ALL Arrays are marged in 1 Array.
// console.log(real_another_array);
// console.log(Array.isArray("Arafat"));
// console.log(Array.from("Arafat"));
// console.log(Array.from({name:"Arafat"}));  //interesting;empty array given.

let score01 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score01,score2,score3)); //setup elements. ==>[100,200,300]==>given like array.
/*
         ++++++++++++++++++++++++++ X +++++++++++++++++++++++++ 
*/
//              Objects:
// singleton ==>Constructer

/*Syntax:
        Object.create
*/

// Object Literals:
/*    
   Syntax:
 let jsUser = {}
 */
const jsUser = {
   /* By Default :
    0:"Arafat"
    "name":"Arafat" */
name:"Arafat",
"full name":"Al-Arafat Yeash",
age:26,
location:"Demra",
email:"arafatgoogle.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"],
// mySymbol:"myKey1" //Given  as a String input ,not  symbol.
[mySymbol]:"myKey1"
}
const mySymbol = Symbol("key1")
console.log([mySymbol]); // For Access to Symbol 
/*
 Firstly,Define Object...
  Secondly,Define Symbol

let jsUserObj = {
==> mySymbol:"myKey1" //Given  as a String input ,not  symbol.
[mySymbol]:"myKey1"
const mySymbol = Symbol("key1")
console.log([mySymbol]);
}

    That's it to all the process...

Source for "Symbol": 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
 */


console.log(jsUser.email);
// console.log(jsUser[eamil]); //Syntax Error.
console.log(jsUser["eamil"]);
// console.log(jsUser.full name); //Got Error...
console.log(jsUser["full name"]);
console.log(jsUser["full name"]);

// Change inside the object values/properties.
jsUser.email = "arfangooglejsUser.com"
// Object.freeze(jsUser)
jsUser.email = "arfathfjffhufg.com"
console.log(jsUser);

//Object Inside of Function:
jsUser.greeting = function(){
    console.log("Hello Js User.");
}
// console.log(jsUser.greeting); //BecauseOf -->Undefined / [Function( anonymous)]
// console.log(jsUser.greeting()); // Not a Functions
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

/*
Some Unnecessary things:
// myArray = ["H","i"]
// myArray[0]
// () $
*/


const tinderUser = new Object() //Empty Objects ==> This is a "Singleton~Objects."
/*
Or,
const tinderUser = {} //Empty Objects  ==> This is a "Non-Singleton~Objects."

Same Things ,no changes
*/
// console.log(tinderUser);

const tinderUser1 = {} // ==>This is a " Non-Singleton~Objects."

tinderUser1.id = " 45374dfjghd"
tinderUser1.name = "Arafat"
tinderUser1.isLoggedIn = false
// console.log(tinderUser1);

console.log(Object.keys(tinderUser1)); //This given Output as an "[] ==>Array."
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1)); //This given Output as an "[] ==>Array in array,each an every single data define as an array,,,like: [[],[],[],[]...]"
console.log(tinderUser1.hasOwnProperty('isLoggedIn'));
console.log(tinderUser1.hasOwnProperty('isLogged'));

/*
Now,
Objects in Objects: Below...
*/
const regularUser = {
    email:"arafatabc59.com",
    fullname:{ // objects inside an objects...
        userfullname:{
            firstname: " Arafat ",
            lastname: " Yeash"
        }
    }
}
/*
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);
*/

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"f",4:"k"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) // ==>"{}" It is better to use in assign().
const obj3 = {...obj1,...obj2} //This is use to best...
// console.log(obj3);

/*
Object Documentation Source:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/

const users = [ // [] ==> This an Array.
    { // {} ==> This an Objects.
        id:1,
        email:"sb1fdsbdf.com"
    },
    {
        id:2,
        email:"sb2fdsbdf.com"
    },
    {
        id:3,
        email:"sb3fdsbdf.com"
    },
]
console.log(users);
console.log(users[1].email);
// users[1].email

/*
Browser --> Inspect --> Console :
const obj1 = {1:"a",2:"b"}
==> undefined
==> obj1
{1: 'a', 2: 'b'}
1: "a"
2: "b"
[[Prototype]]: 
Objectconstructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()

__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()

__proto__: 
(...)get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

*/

/*
            Advanced Object(JSON): Object de-structure and JSON API Intro :
*/
/*
     de-structure /De-Structuring occurs 2 Things : i. Array ; ii. Objects
*/
/*
            // Object De-Structure : Same Basic Of React.js ...
const course = {
    coursename:"Js in Bangla",
    price:"999Tk",
    courseTeacher:"Arafat",
    courseInstructor:"Yeash"

}

// course.courseTeacher ==> Please don't use,becauseof repeating " course.courseTeacher " writing again and again.

const {courseTeacher} = course  ==> please use this,
// console.log(courseTeacher);

Or,
const {courseTeacher:instructor} = course ==>use this.
// console.log(instructor);

*/


/*
// Some React.js Basic:

const navbar = (props.company) => {
}

Or,

const navbar = ({company}) => {
}
navbar(company = "Arafat")

*/

/*
Now,
Some Basic Of " API or JSON " :
*/

/*
        // This is an Syntaxical Error,becauseof "Inverted Comas("")" :

{
    name:"arafat",
    coursename:"Js Bangla",
    price:"free"
}

    // This is an Syntaxically Right,becauseof "Inverted Comas("")" :
{
    "name":"arafat",
    "coursename":"Js Bangla",
    "price":"free"
}

*/
/*
For API Resource : https://randomuser.me/   
For API Formate : https://jsonformatter.org/
*/
/*
        // Some API Formate : Get Arrays in Objects,like this : -
[ // Arrays
    {},  //objects
    {},  //objects
    {}  //objects

]
*/

/*
    //  A Example/Model of API/JSON Formate :

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

*/
/*
                ++++++++++++++++++++++++ X ++++++++++++++++++++++++++
*/

/*
                            FUNCTION :
*/

/*
        // This is not a Function Definition or Syntax/Structure:

console.log("A");
console.log("R");
console.log("A");
console.log("F");
console.log("A");
console.log("T");
console.log("H");
console.log("E");
*/

/*
                        Basic Of Functions:
            //Function's Definitions:
            Type :- 01
function sayMyName() 
{
 console.log("A");
 console.log("R");
 console.log("A");
 console.log("F");
 console.log("A");
 console.log("T");
 console.log("H");
 console.log("E");
}
// sayMyName ==> //This is function's reference,

sayMyName() // when "()" this function sign means execute.
*/
// Now,Real Function's Basics Structure : 
                // Type :- 02
function addTwoNum(num1,num2) {
    // console.log(num1+num2);
}
// addTwoNum() //Output: NaN
addTwoNum(3,4) // OutPut: 7
// addTwoNum(3,"4") // What if? ==>34,because "4" is a string that's why js think 3 is also string,that how become =>34


// addTwoNum(3,"a") // What if? ==>3a,because "a" is a string that's why js think 3 is also string,that how become =>3a


// addTwoNum(3,null) // What if? ==>3
/*
Difference about "Parameters" and "Arguments" : 

function addTwoNum2(num1,num2) ==> (num1,num2)--> Parameters
addTwoNum2(3,4) ==>(3,4)--> Arguments
*/

/*
                            //  Type :- 03
function addTwoNum2(num1,num2) {
    console.log(num1+num2);
}
addTwoNum2(3,4)

function addTwoNum3(num1,num2) {
    console.log(num1+num2);
}
addTwoNum3(3,"4","a")

function addTwoNum4(num1,num2) {
    console.log(num1+num2);
}
addTwoNum4(3,null)

function addTwoNum5(num1,num2) {
    console.log(num1+num2);
}
*/
        //Store In Variables:
                   //  Type :- 04
const result1 = addTwoNum5(3,45)
console.log("Result: ",result1); //undefined
                    
                        //  Type :- 05
function addTwoNum6(num1,num2) {
    // Not print anythings because not execute "console.log"
    // but,if i do "console.log" then what?
    let result2 = num1+num2
    console.log("Arafat");
    return result2
    // console.log("Arafat");
    
    // console.log("Arafat"); //The answar is :not print/execute this "console.log", because,"return" পরে কিছু লিখলে তা কখনোই "print" হয় না,"return"এর উপরে  "console.log" থাকলে "print" হয় না।
    
}
const result2 = addTwoNum5(3,5)
console.log("Result: ",result2);
/*
// Extra : copy on "result2"
                        //  Type :- 06
function addTwoNum6(num1,num2) {
    
    let result3 = num1+num2
    console.log("Arafat");
    return result3
    // console.log("Arafat");   
}
const result3 = addTwoNum5(3,5)
console.log("Result: ",result3);
*/

                //  Type :- 07
function addTwoNum7(num1,num2) {
    let result4 = num1+num2
    return result4
    // console.log("arafat"); 
} 
                        // Type :- 08
const result5 = addTwoNum7(3,45)
console.log("Result: ",result5);

                //  Type :- 09
function addTwoNum8(num1,num2) {
    let result6 = num1+num2
    console.log("arafat");
    return result6
    
    
}
            //  Type :- 10
const result7 = addTwoNum8(3,45)
console.log("Result: ",result7);

                //  Type :- 11
function addTwoNum9(num1,num2) {
    // let result8 = num1+num2
    // console.log("arafat");
    // return result8
    return num1+num2
}
const result8 = addTwoNum9(3,45)
console.log("Result: ",result8);
/*
                //  Type :- 12
function loginUserMessage(username) {
    return ` ${username} Just Logged In.`
    
}

// loginUserMessage()
// loginUserMessage("Arafat")
// console.log(loginUserMessage("")); //no change
// console.log(loginUserMessage()); //undefined
// console.log(loginUserMessage("Arafat"));
*/

/*
                //  Type :- 13
function loginUserMessage1(username1) {
    if (username1===undefined) {
        console.log("Please Enter Your UserName");
        return
    return ` ${username1} Just Logged In.`
    }
    return ` ${username1} Just Logged In.`
    
}
// loginUserMessage1()
// loginUserMessage1("Arafat")
// console.log(loginUserMessage1("Arafat"));
// console.log(loginUserMessage1(""));
console.log(loginUserMessage1());
*/
/*
                //  Type :- 14 : Same Output:Type :-13
function loginUserMessage1(username1) {
    if (!username1) {
        console.log("Please Enter Your UserName");
        return
        
    }
    return ` ${username1} Just Logged In.`
    
}
// loginUserMessage1()
// loginUserMessage1("Arafat")
// console.log(loginUserMessage1("Arafat"));
// console.log(loginUserMessage1(""));
console.log(loginUserMessage1());

//  ("") ==> Empty String /(undefined)==> False Value.
*/
                         //  Type :- 15
function loginUserMessage2(username2="Samy") {
     if (!username2) {
        console.log("Please Enter Your UserName");
        return
     }
    return ` ${username2} Just Logged In.`
    
}
// loginUserMessage()
// loginUserMessage("Arafat")
// console.log(loginUserMessage2());

/*
                            //  Type :- 16
function loginUserMessage2(username2="Samy") {
     if (!username2) {
        console.log("Please Enter Your UserName");
        return
     }
    return ` ${username2} Just Logged In.`
    
}
// loginUserMessage()
// loginUserMessage("Arafat")
// console.log(loginUserMessage2());
console.log(loginUserMessage2("Arafat")); // override "Samy"

*/
                    //  Type :- 17

function calculateCartPrice(num1) {
    return num1 
}
console.log(calculateCartPrice(2));
/*
                Type :- 18
If ,
console.log(calculateCartPrice(200,400,53545,453,2425));
Then What ?
The Answar Is:
restOperator{...} / spreadOperator.
*/
function calculateCartPrice(...num2) {
    return num2 
}
console.log(calculateCartPrice(200,400,53545,453,2425));

            //  Type :- 19
function calculateCartPrice(val1,val2,...num3) {
    return num3 
}
console.log(calculateCartPrice(200,400,53545,453,2425));
/*
            Type :- 20
                         //Objects:

const user = {
    userName: "Arafat",
    price:164
}
*/
function handleObject(anyobject) {
console.log(`UserName is ${anyoject.userName} and price is ${anyoject.price}`);
}
handleObject(user)


/*
            Type :- 21

const user = {
    userName: "Arafat",
    prices:164 //if I replaces as "price" in "prices".....",handleObject(user) " // undefined
}
*/
function handleObject(anyobject) {
console.log(`UserName is ${anyoject.userName} and price is ${anyoject.price}`);
}
handleObject(user) // undefined

        //  Type :- 22 :Same OutPut:Type:-21
handleObject({
    userName:"sam",
    price:356
})
            //  Type :- 23
                        //   Arrays:
const myNewArray = [200,400,100,544]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// Or,
console.log(returnSecondValue([
    200,400,100,544 //same output
])); // Override "myNewArray"

//           ---------------------x-----------------------
 /*
                    Scope ==> 
                        {

                        } :
 */
      let a = 10
      const b =20
      var c = 30
      d = 40   
/*
console.log(a);
console.log(b);  
console.log(c);
console.log(d);
*/ 
if (true)
{
    let a = 10
    const b =20
    var c = 30
    d = 40 
}
/*
console.log(a);
console.log(b);  
console.log(c);
console.log(d);
*/
/*
            // Block Scope:

        if (true) {
    let a = 10
      const b =20
      var c = 30
      d = 40 
        }
*/
 /*
             // Global Scope:
 //var c = 300 //don't use var
    let f = 300
    if (true) {
        let f = 10
        console.log("Inner: ",f);
    }
    console.log("Outer:",f);
 */  
/*
            For Loop Syntax:

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
*/
                // Scope level and mini hoisting in javascript:

        //This is some Kind of "Closure" :
    function one() {
        const username = "Arafat"
        function two() {
            const website = "Youtube"
            console.log(username);
        }
        // console.log(website); // This is Getting "Error",because This "console.log(website)" inside the "function two(){}".
        two(); // But if I comment Out Of "two()" function then not execute of "console.log(username)".
    }
    one();
    /*
Or,
    Same Things of "if-else":
*/
    if (true) {
        const username = "Arafat"
        if (username==="Arafat") {
            const website = " youtube"
            console.log(username+website);
            
            
        }
        // console.log(website); // This is Getting "Error",because This "console.log(website)" inside the "second scope{}".
    }
    // console.log(username); // This is Getting "Error",because This "console.log(username)" inside the "first scope{}".

    // Interesting Example :
        //Type :- 01
    function addOne(num) {
        return num + 1
    }
    addOne(5)

/*
    Same Thing Different Type:
*/
        //Type :- 02
const addTwo = function (num) {
        return num + 2
    }
    addTwo(5)
        //Type :- 03
addThree(5)
    console.log(addThree(5));
function addThree(num) {
        return num + 1
    }
     //Type :- 04

    addFour(5) // Now given to the error... Because This Problem seems to "Hoisting"
    const addFour = function(num) {
        return num + 2
    }

    // .......................... X ............................
   
                 // "This" and Arrow Function:
/*
        //Type :- 01
    const user = {
        username:"arafat",
        price: 999tk,
        welcomeMessage: function () {
               console.log(this);
            console.log(` ${this.username},Welcome To Website,This price is 
                ${this.price} `);
               console.log(this);
      
        }
    }
    user.welcomeMessage() //This "user.welcomeMessage()" for arafat
    user.username = "Sam"
     user.welcomeMessage() //This "user.welcomeMessage()" for sam
     console.log(this); // Refer  as empty objects,lile :- {}
     */
        //Type :- 02
function chai() {
    console.log(this);
}
chai()
        //Type :- 03
function chai1() {
    let username = "arafat"
    console.log(this);
    // console.log(this.username); // Given "Undefined"
}
chai1()
        //Type :- 04 {"This" Function Execute Through "Arrow" Function}
const chai1 =function () {
    let username = "arafat"
    console.log(this);
    // console.log(this.username); // Given "Undefined"
}
chai1()
        //Type :- 05 {"This" Function Execute Through "Arrow" Function}
    // Arrow Function:()=> {}
const chai1 = ()=> {
    let username = "arafat"
    console.log(this);
    // console.log(this.username); // Given "Undefined"
}
chai1()
     //Type :- 05 {Explicity}
/*
    const addTo = (num1,num2)=> {
        return num1 + num2
    }
console.log(addTo(3,4));
*/
        //Type :- 06 {Implicity}
/*
const addToo = (num1,num2)=>   num1 + num2
    
console.log(addToo(3,4));
*/
        //Type :- 07 {Implicity}
/*
const addTo = (num1,num2)=> (num1 + num2) // This Technique needs for React.js
console.log(addToo(3,4));
*/

        //Type :- 08 {Objects in "return"}
const addTo = (num1,num2)=> ({ username:"Arafat",username1:"Arfan",username2:"Yeash"})

        //Type :- 09 {Objects in "return"}
/*
const myArray = [2,3,4,6,7]
// myArray.forEach(function () {} )
// myArray.forEach( () => {} )
// myArray.forEach( () => () ) // This is incorrect
*/

/*
This is inside Node.js : console.log(this); // Refer  as empty objects,lile :- {}

This is inside Browser : console.log(this);
      Window {
        0: global, 
        window: Window, 
        self: Window, 
        document: document, 
        name: '', 
        location: Location,
         …}
        0: global {
            window: global, 
            self: global, 
            location: Location, 
            closed: false, 
            frames: global,
             …}

            blur: ƒ blur()

            length: 
            0name: "blur"arguments: (...)
            caller: (...)
            [[Prototype]]: ƒ ()
            [[Scopes]]: Scopes[0]
            close: ƒ close()closed: 
            falsefocus: ƒ focus()
            frames: global 
            {
                window: global, 
                self: global, 
                location: Location, 
                closed: false, 
                frames: global,
                 …}
                length: 
                0location: Location
                 {
                    Symbol(Symbol.toStringTag): undefined, 
                    Symbol(Symbol.hasInstance): undefined, 
                    Symbol(Symbol.isConcatSpreadable): undefined, 
                    replace: ƒ
                }
                opener: nullparent: Window 
                {
                    0: global,
                     window: Window, 
                     self: Window, 
                     document: document, 
                     name: '', 
                     location: Location,
                      …}
            ...................{Many More}....................
                     [[Prototype]]: Window
undefined
*/
/*
            ++++++++++++++++++++++++ X ++++++++++++++++++++++++++
*/
        // IIFE: Immediately Invoked Function Expressions{IIFE}:
 /*   
 যখন GLOBAL SCOPE POLUTION হয় অনেকবার, ঐ GLOBAL SCOPE POLUTION/DECLARATION সরানোর জন্যই IIFE ব্যবহার করা হয়।
 */
    //Basic IIFE Syntax :
        function chai2() {
            console.log(`DB Connected`);
        }
        chai2();
/*
   // Same Thing:

        function chai2() {
            console.log(`Db Connected`);
        }()
*/

/*

( function chai2() {
        //named IIFE
            console.log(`Db Connected-1`);
        })()

        // IIFE:()() ===>function,execution
//Arrow function :
        (
          () => {
            //Un-named IIFE
            console.log(`Db Connected-2`);
          } 
        )()

    //Acctually, ২ টাই  ঠিক আছে,কিন্তু (;) না দিলে ফাংশন টা বুঝতে পারে না যে কোথায় থামতে হবে।
    First Code ==>End(;),Second Code ==>Run;Through (;)

    এখানে ২টা IIFE একসাথে চলছে ...তাই (;) প্রয়োজন।
*/

    // Named IIFE :
       ( function chai2() {
        
            console.log(`Db Connected-1`);
        })();


        //Un-Named IIFE :
//Arrow function :
        (
          () => {
           
            console.log(`Db Connected-2`);
          } 
        )();  // IIFE:()() ===> function,execution.
         // Parameter IIFE :
        (
          (name) => {
           
            console.log(`Db Connected-2  ${name}`);
          } 
        )("Arafat");
     //  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ X ~~~~~~~~~~~~~~~~~~~~~~~
/*
       ~ Execute Code{Execution Context} and Call Stack : ~

    * Execution Context :
    1. Global Execution {This} ,
      2. Function / Functional Execution ,
        3.Eval Execution.
    * Phrase : 
        1. Memory / Creation Phase ,
            2. Execution Phase .
*/

/*
    * Code : 
 let val1 = 10
 let val2 = 5
 function addNum(num1,num2) {
    let total = num1 + num2
    return total
}
 let result1 = addNum(val1,val2)
 let result2 = addNum(11,2)
    ++++++++++++++++++ 
     Now, 
        This Code Is Processing / Execution Process Step In Below:
    +++++++++++++ 

   *Process / Execution :
        Step-1 : Global Execution { This },
    Step-2 : 
        Memory / Creation Phase :- 
         1. val1 = undefined,
          2. val2 = undefined,
           3. addNum = defination 
            {
             ( num1 , num2 ) --> let total = num1 + num2 --> return total
            },
              4. result1 = undefined,
                5. result2 = undefined.
    Step-3 : 
        Execution Phase:-
        1. val1 = 10,
          2. val2 = 5,
           3.addNum = 
           {
           i. New Variable Environment 
            + 
            ii. Execution Thread
           } 
            ==>
                {
                1. Memory / Creation Phase:
                 {
                1. val1 = undefined,
                2. val2 = undefined,
                3. total = undefined
                }
                + 
                2. Execution Context{
                num1 = 10, 
                num2 = 5,
                total = 15
                } +
                3. Delete
                }
                4. total = 15 -->return-->Global Execution 
                5. result1 = 15 
                6. result2 = Same{Step-3} // result1 and result2 ==> Same.

*/

/*
    * Call Stack :
    one() ,
        two() ,
            three()
                ... ... ...
    ** Process in (DSA (LIFO)) :
        Global Execution -->
            {
                one() ,
                    two() ,
                        three()
            }
*/

function one() {
    // console.log("one");
      two()
}
function two() {
    // console.log("two");  
    three()
}
function three() {
    // console.log("three");
}
one()
two()
three()

/*
            ------------------------ X ------------------------------
*/
    // Logic Control/Control Flow :

    // If:
/*
if (condition) {
    
    if (condition){
    // This is it ,:firstple, if then "(condition ==>True / False)" then "scope => {}"
    }
    
}
*/
if (true) {
    // Internal Code are executed if condition "True"
}
if (false) {
    // Internal Code are not executed if condition "false"
}

/*
        Comparison:
    comparison oparetor:<,>,<=,>=,==,!=, ===,!==
*/
/*
if (2==2) {
    
}
*/
const isUserloggedIn = true
if (isUserloggedIn ) {
    
}

if (2=="2") {
    console.log("executed");
    
} 
if (2==="2") {
    console.log("executed");
    
}
if (2!=3) {
    console.log("executed");
    
} 

const temperature = 41
if (temperature<50) {
    console.log("less than 50");
}
console.log("Temperature is greater than 50");

        // Same
if (temperature===41) {
    console.log("less than 50");
}else{
console.log("Temperature is greater than 50");
}
console.log("Execute");

const score00 = 200
if (score00>100) {
//    var power = "Fly"
   const power = "Fly"
    console.log(`user power: ${power}`);
}
    // console.log(`user power: ${power}`);  // here is : "power is not defined" because of "Scope {}"

const score001 = 200
if (score001>100) {
  let power = "Fly"
    console.log(`user power: ${power}`);
}
    // console.log(`user power: ${power}`); 
/*
const balance = 1000
    //This is Implicity Scope:That means ,I Assume here is a scope{} ; 
        // Unreadable code:
if (balance>500) console.log("tst1"),console.log("tst2"),console.log("tst3");

    // Dont code like that, because although it is right but it's immature coding like this.
*/

const balance = 1000
if (balance>500) {
    console.log("Less than 500");  
} 
else if (balance<750) {
    console.log("Less than 750");   
}
else if (balance<9000) {
    console.log("Less than 900");   
}
else {
 console.log(" Greater ? Less than 1200");
}

const isUserloggedIn1 = true
const debiCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (isUserloggedIn1  && debiCard && 2==2) {
   console.log("Allow to buy Course");
}
/*
if (isUserloggedIn1  && debiCard && 2==3) {
   console.log("Allow to buy Course");
   }
//  Code is Not Execute for false condition ,like 2=3.
*/

/*
else if (loggedInFromEmail|| loggedInFromEmail || guesUser) {
    console.log("User Logged in");
}
*/
else if (loggedInFromEmail|| loggedInFromEmail ) {
    console.log("User Logged in");
}
else{
    console.log("Create account");
}
/*
    ```````````` Switch ```````````````````
*/
/*
//This is Basic Syntax :

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
        const month1 = 3
        switch (month1) {
        case 1:
                console.log("January");
                break;
        case 2:
                console.log("February");
                break;
        case 3:
                console.log("March");
                break;
        case 4:
                console.log("April");
                break;
        
       default:
        console.log("By default case Match");
        
               break;
}
 //If month is string like this:
const month = "March"
        switch (month) {
            case "January":
                console.log("January");
                break;
            case "February":
                console.log("February");
                break;
            case "March":
                console.log("March");
                break;
            case "April":
                console.log("April");
                break;
        
            default:
        console.log("By default case Match");
                break;
}

// Truthy Or Falsey Value :
const userEmail = "hdfdfvgh.ai"
if (userEmail) {
    console.log("Got user email."); // Turthy Value {Assume}
} else {
    console.log("Don't have user email.");
}
const userEmail1 = ""
if (userEmail1) {
    console.log("Got user email.");
} else {
    console.log("Don't have user email."); // Falsey Value {Assume}
}
const userEmail2 = []
if (userEmail2) {
    console.log("Got user email."); // Turthy Value {Assume}
} else {
    console.log("Don't have user email.");
}
const userEmail3 = [""]
if (userEmail3) {
    console.log("Got user email.");
} else {
    console.log("Don't have user email.");
}

/*
        Falsey Value:
  false , 0 , -0 , BigInt{0n} ,''/""{empty string} , null , undefined , NaN .
*/
/*
        Everything is Truthy Value Except Those Falsey Values ...

        Some Interesting Truthy Value:
  "0",'false'/"false", 
  "  "<space>,
  [],{},
  function (){}=>[empty function],
  //Compare This Value :
  false == 0 , false == " "  ,0 == " "
*/
    //How to detect this array is empty or not? These process is in this  below:
if (userEmail.length===0) {
    console.log("Array is empty");    
}
    //How to detect this object is empty or not? These process is in this  below:
const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty.");
}

/*
    Nullish Coalescing Operator{??}:
                Null , and undefined ; //This 2 operators
*/
/*
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 5 ?? 10
console.log(val1);
*/
/*
Terniary Operator :
    condition ? true :false
*/
const iceTeaPrice = 100
/*
// Single Line:
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
*/
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80");
    // ****************************** X *************************
/*
         Loops or Iterations :
*/
/*
// For Loop Basics :
for (let index = 0; index < array.length; index++) {
    const element = array[index]; 

    //Initialization ==> {let index = 0;}; Condition ==> {index < array.length;}; Increament/Decreament ==> {index++ or,++index or, index+1,index+2, 1+index ,2+index / index-- or,--index}
}
*/

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}
// console.log(element); get an Error because of block scope ==>{}
    
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is the best number."); 
    }
    console.log(element);
}

    // Loops in Loops
for (let i = 0; i <=3; i++) {
    // const element = array[index];
    console.log(`Outer loop value : ${i}`);
    
for (let j = 0; i <=3; j++) {
        // const element = array[index];
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        
for (let k = 0; k <=3; k++) {
            // const element = array[index];
            console.log(`Inner loop value ${k} and inner loop ${j} and ${i}`);
            
        }
        
    }
    
}



for (let i = 0; i <=10; i++) {
    // const element = array[i];
    console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <=10; j++) {
        // const element = array[j];
        console.log( i + '*' + j + ' = ' + i * j );
        
    }
}
    //Arrays :
let myArray = ["Flash","Batman","Superman"]
for (let index = 0; index < myArray.length; index++) 
// for (let index = 0; index <=myArray.length; index++)
{
    console.log(myArray.length);
    const element = myArray[index];
    console.log(element);
}

// break and continue:
for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log(`Detected 5`);
        break //when loop are detected any object / point then it become close the loop for/through "break" key words.
    }
    // const element = array[i];
 console.log(` Value of i is ${i}`);   
}

for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log(`Detected 5`);
    
       continue //when loop are detected any object / point then it cannot  become close the loop like for/through "break" key words,its become continue for/through "continue" key words
    }
    // const element = array[i];
 console.log(` Value of i is ${i}`);   
}

        // While and do-while loop:
/*
    // While Loop's Syntax : 
while (condition) {
    
}
*/

let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}
let myArray1 = ['flash','batman',"superman"]
let arr = 0
while (arr < myArray1.length) {
    // console.log(`Value of index is ${myArray1[arr]}`);
    arr = arr +1
}

/*
        //  Syntax Of "do-while" Loop :
do {
    
} while (condition);
*/
let score = 1
do {
    // console.log(`Score is ${score}`);
    score++
} while (score <=10);

let score1 = 11
do {
    console.log(`Score is ${score1}`);
    score1++
} while (score1 <=10);
/*
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ X -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
*/

    // Higher Order Array Loop:
    // ForOf,ForIn,ForEach,Map,filter-map and Reduce
/*
['',"",''] // ==> String in Array ==> [ 'string',"String" ];==>[] == Array , '' / "" == String .
[{},{},{}] // ==> Object in Array ==> [ {Object},{obj} ]; ==>[] == Array , {} == Object .
[{' '," "},{" ",' '}] ==> ? উত্তর কি হবে ?
*/

/*
            // ForOf:
    //   Basic syntax of " Forof " :
for (const iterator/element of object) {
    
}

for (const element of object) {
    
}
*/
const numbers_arr1 = [1,2,3,4,5]
for (const num of numbers_arr1) { // iterator / element ==> num ; object ==> arr1.
  console.log(num);   
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
// Map:Like an Array,Map is an Object.
const map = new Map()
map.set('In',"India") // 'IN' => "India"
map.set('In',"India") // Dublicate / Same Type Double Values Not Allow...
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('BD',"Bangladesh")
map.set('PK',"Pakistan")
console.log(map);

/*
    // Syntax : ForOf
for (const key of map) {
    console.log(key);  
}
    Output: Outcome is an Array Formate
    ['IN' , 'India]


for (const [key,value] of map) {
    console.log(key,':-',value);   
}
*/
/*

//Object in ForOf Loop :
const myObj = {
   " game1": 'NFS',
   "game2": 'Spiderman'
} // Here is "myObj" not  iterable .
const myObj = {
   game1: 'NFS',
   game2: 'Spiderman'
} // Here is "myObj" not  iterable .
for (const [key,value] of myObj) {
console.log(key,':-',value);   
} // Not Work this Methods. 

// Not Executeable this loop {forof},because of Error,so please don't do this mistake .
*/

/*
                // ForIn:
        // Object in ForIn Loop :
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
     
    //  if (Object.hasOwnProperty.call(object, key)){
    //     const element = object[key];
    //  }

    const element = object[key];    
}
*/
const myObj = {
    js: 'javascript',
    cpp:"C++",
    rb:"Ruby",
    swift:'swift by apple'
}
for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
   console.log(`${key} is shortcut for :-  ${myObj[key]}`);    
}

        //Arrays in ForIn Loop :
const programmingLanguage = ["js",'rb',"py",'java',"cpp"]
for (const key in programmingLanguage) {
//    console.log(key); // Giving Values :[0,1,2,3,4]
console.log(programmingLanguage[key]);
}
/*
    // Map in ForIn Loop :
const map = new Map()
map.set('In',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('In',"India")

for (const key in map) {
    console.log(key);  
} // map's is not iteration ForIn loop
*/
/*
        // ForEach Loop :
        // Type:01
coding.forEach(function (val1) {
console.log(val1);    
});

    // Basic Syntax  of " ForEach Loop " : This is a callback-function / given function .
array.forEach(element => {
    
});
*/
const coding = ["js",'rb',"py",'java',"cpp"]
    // Type:02
coding.forEach(function (val1) {
console.log(val1);    
});
    // Type:03
//  " Arrow Function : '=>' " in ForEach Loop :
 coding.forEach(
    (item) => 
        {
    console.log(item);
   
}
)
console.log(values);
    // Type:04
// Reference in ForEach Loop{not Executable Here} :
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe) // Here a 'reference'.
    //Type : 05 : Different Type
 coding.forEach(
    (item,index,array) => 
        {
    console.log(item,index,array);
    
}
)
    // Object in Array{Higher Oder Arrays} :
    //Type : 06
const myCoding = [
{
    languageName:"JavaScript",
    languageFileName:"js"
},
{
    languageName:"Java",
    languageFileName:"java"
},
{
    languageName:"Python",
    languageFileName:"py"
}
]
myCoding.forEach((item,index,array) => {
    console.log(item.languageName,item.languageFileName,index.languageName,index.languageFileName,array.languageName,array.languageFileName); 
});
//Type : 07
const mycoding = ["js",'rb',"py",'java',"cpp"]
  const values = mycoding.forEach(
    (item) => 
        {
    console.log(item); // সব কিছু আসার পরেও 'undefined' আসছে । কারন,
    // return item // forEach can't  "return" item{X}
    //This "undefined" cases or prblems are solved out by "Filter-map".
}
)

    //Filter Map and Reduce :
    // Filter :
/*
    // Basic Syntax of Filter :
    array.filter((Condition) => Values)
*/
const myNum = [1,2,3,4,5,6,7,8,9,10]
// myNum.filter((num) => 4) // No Output comes because we can't define a variable ,like : "const newNums".
const newNums = myNum.filter((num) => 4) // This means, I want values about greater than 4.
console.log(newNums); // output : [5,6,7,8,9,10]
// filter's are "return" of values.

    // 'Scope { }' within filter :
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNums.filter((num) =>{
    // num > 4 // output: empty scope ==> {}
    // if you start "scope{}",then need to "return" keyword .
    //This is Very big Mistake in filter;
    return num > 4 
     
} )
console.log(newNum);
// 'Scope { }' without in filter :
const newNum1 = myNums.filter((num) =>
    num > 4    
 )
console.log(newNum1);
    // ForEach in Filter :
const myNumb = [1,2,3,4,5,6,7,8,9,10]
const newNumb = []
myNumb.forEach( (num) => {
    if (num > 4) {
        newNumb.push(num)
    }
})
console.log(newNumb);
    // Same Output...

    // 'Object in Array [{},{},{}]' in Filter :
const books = [
    {
        title: 'Book One',genre: "Fiction",publish:1981,edition:2004
    },
    {
        title: 'Book Two',genre: "Non-Fiction",publish:1992,edition:2008
    },
    {
        title: 'Book Three',genre: "History",publish:1999,edition:2007
    },
    {
        title: 'Book Four',genre: "Non-Fiction",publish:1989,edition:2010
    },
    {
        title: 'Book Five',genre: "Science",publish:2009,edition:2010
    },
    {
        title: 'Book Six',genre: "Fiction",publish:1987,edition:2010
    },
    {
        title: 'Book Seven',genre: "History",publish:1986,edition:1996
    },
    {
        title: 'Book Eight',genre: "Science",publish:2011,edition:2016
    },
    {
        title: 'Book Nine',genre: "Non-Fiction",publish:1981,edition:1989
    },
    {
        title: 'Book Ten',genre: "Fiction",publish:1997,edition:2012
    },
];
let userBooks = books.filter((bk) =>bk.genre === 'History')

//  userBooks = books.filter((bk) =>bk.publish>= 2000) // Without 'scope{}' and 'return'.
//  or,
//  userBooks = books.filter((bk) =>{return bk.publish>= 2000})   // Within 'scope{}' and 'return'.
userBooks = books.filter((bk) =>{
    return bk.publish>= 1995 
    && 
    bk.genre === 'History'
})
// console.log(userBooks);

    // Use in Map function : Map is a callback-function
const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const newNumber = myNumber.map((num) => num + 10) // Within 'scope{}' and 'return'.

// const newNumber = myNumber.map((num) => {return num + 10}) // Within 'scope{}' and 'return'.

    // Chainning Methods in Map and filter :
const newNumber = myNumber
        .map((num) => num * 10) //"num" here is entering first value.Like : 1 * 10 = 10.
        .map((num) => num + 1) //"num" here is entering second value.Like : 10 + 1 = 11.
        .filter((num) => num >= 40) //"num" here is entering third value.It is meaning that 2nd values are greater than 40,Like : [41,51,...,101].
console.log(newNumber);
/*
        // Reduce :
  Reduce Documentation Web Link:  
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
/*
    // Reduce {rxreducer} Syntex :
const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}
*/

/*
    User suply reducer :{useReducer
*/
/*
    // Reduce { Basic Syntax } :
array.reduce((accumulator ,currentValue) => accumulator + currentValue , initialValue
);
*/
        const numy = [1,2,3]
/*
        const myTotal = numy.reduce(function(accu,currval){
            return accu + currval
            console.log(`Accumulator:${accu} and CurrentValue:${currval}`);
            return accu + currval
        },0) // ==>"0" ==>Initial Value .
*/
                    //  OutPut : Same ...
/*
    // Now Outcomes/Outputs in Array :
        const myTotal = numy.reduce((accu,currval) => accu+currval,0) // ==>"0" ==>Initial Value .
*/
        console.log(myTotal);
/*
        Return:
         If you want to know more about " Return " Keyword :
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
        
*/

    //  An Example For " Shopping Card " : Total Bill Payment.
const shoppingCart = [
    {
        itemName: " Js Course",
        price:2999
    },
    {
        itemName: " Py Course",
        price:999
    },
    {
        itemName: " Mobile Dev Course",
        price:2990
    },
    {
        itemName: " Data Science Course",
        price:12999
    },

]
const priceTopay = shoppingCart.reduce((accu,item) => item.price,0)
console.log(`Your bill is : ${priceTopay}`);
/*
    ------------------------------ End -----------------------------------
*/
