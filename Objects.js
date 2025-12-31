
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
