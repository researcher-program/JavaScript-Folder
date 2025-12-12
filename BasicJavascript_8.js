// Object Oriented and Classes {OOP}:
// What Is Object? => Collection of properties and methods.
// properties Means Variables ; methods means function. 
// > toLowerCase,promises,Etc.
// Why use OOP?
// parts of OOP {object literal}

// keyword:
// >Constructor function;Prototypes ; classes ; instances{new , this}

// Study on 4 Pillars : Abstraction ; Encapsulation ; Inheritance ; Polymorphism.

// Object Literal :
const user = {
    username: "Arafat",
    logInCount: 8,
    signedIn: true
}
console.log(user);
console.log(user.username);

const users = {
    username: "Arafat",
    logInCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`UserName :${username} `); // Got Error : username  is not defined but username is clearly defined,that's why need "this" keyword...
        // console.log(`UserName :${this.username} `);
        console.log(this); // all the values / properties shown on.
    }
}
console.log(users);
console.log(users.getUserDetails());
 // If I :
// console.log(this); // Get { } / Empty parentheses in node.js, but  not in browser .



// Constructor function: {new}=> new is the constructor functions
const promiseOne = new Promise()
const date = new Date()

function User( username ,logInCount , signedIn ) {
    this.username = username ; // this.username ==> variable {like,myusername,username1,etc} ; username ==> values of parameters /argument
    this.logInCount =  logInCount
    this.signedIn = signedIn
    return this
    // return this
    // If i comment "return this" ?however,code getting executed ,no effect  on "return this" keyword.
}
// const userOne = User("Arafat" , 12 , true)
// console.log(userOne);
/*
console.log(userOne.username);
console.log(userOne.logInCount);
console.log(userOne.signedIn);
*/

// But,actual problem is :
// const userTwo = User("Arfan" , 11 , false) 
// console.log(userOne);  // Not getting error but, values are " override " on {userOne and userTwo}.

// Now This problem has been solved :
const userOne = new User("Arafat" , 12 , true)
console.log(userOne);
const userTwo = new User("Arfan" , 11 , false) 
console.log(userTwo);


function User( username ,logInCount , signedIn ) {
    this.username = username ; 
    this.logInCount =  logInCount
    this.signedIn = signedIn
    this.greeting = function () {
        console.log(` Welcome ${this.username} `);   
    }
    return this
}

const userOne1 = new User("Arafat" , 12 , true)
console.log(userOne1);
console.log(userOne1.constructor);
const userTwo2 = new User("Arfan" , 11 , false) 
console.log(userTwo2.constructor);

// *** Study On : "instanceof"

        // Prototype{magic of prototype}:
    
        // Js Prototype Diagram :
        // [Array/String/function --> Object --> Null]


                                // " New " Keyword :
        function multipleBy5(num) {
            return num * 5 
        }
        // multipleBy5(5)
        multipleBy5.power = 2
        console.log( multipleBy5(5));
        console.log( multipleBy5.power);
        console.log( multipleBy5.prototype);
       
        
function createUser(username,score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
    
}
/*
const chai = createUser("chai",25)
const tea = createUser("tea",10)

chai.printMe() // error,because need " new" keyword
*/
const chai = new createUser("chai",25)
const tea = new createUser("tea",10)
chai.printMe()
tea.printMe()

/*
                " new " Keyword's Notes : behind the scene :-

 Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

        // prototype :
   let myName = " arafat     "
   console.log(myName.length);
   let myName1 = " arafat     "
//    console.log(myName1.trim().length); // but it's better to rare used for repeatingly typed code same syntax. That's Why :
//    console.log(myName1.trueLength);
    

// If you understand about "console.log(myName1.trueLength); => trueLength",then gether some history about This :

// Array :
let myHeros = ["thor","spiderman"]

// Object :
let heroPower = {
    thor : "Arafat",
    spiderman: "Arfan",
    getSpiderPower : function () {
        console.log(`spidy power is ${ this.spiderman}`); 
    }
}
Object.prototype.arafat = function () {
    console.log(`Arafat is present in all objects`);
    
}
// heroPower.arafat()
myHeros.arafat()

let myHeros2 = ["thor","spiderman"]

// Object :
let heroPower2 = {
    thor : "Arafat",
    spiderman: "Arfan",
    getSpiderPower : function () {
        console.log(`spidy power is ${ this.spiderman}`); 
    }
}
Object.prototype.arafat = function () {
    console.log(`Arafat is present in all objects`);
    
}
Array.prototype.heyArafat = function () {
    console.log(`Arafat says "hello"`);
    
}
// heroPower2.arafat()
myHeros2.arafat()
myHeros2.heyArafat()
heroPower2.heyArafat() // not access to this function.


        // Inheritance :

        const User = {
            name: " chai ",
            email: " chaijahgjk.com"
        }
        const Teacher = {
            makeVideo : true
        }
        const TeachingSupport = {
            isAvailable : false
        }
    const TASupport = {
        makeAssigment : "JS Assignment",
        fullTime : true,
        __proto__:TeachingSupport // this is linking by TASupport and TeachingSupport .
    }    
Teacher.__proto__= User  //These type is older syntax ...

// Modern Syntax :
Object.setPrototypeOf(TeachingSupport,Teacher) 


let anotherUser = " ArafatTea     "
String.prototype.trueLenth = function() {
    console.log(`${this}`);
    console.log(`${this.name}`); // Getting Undefined.
    console.log(`True Length is : ${this.trim().length}`);
    
}
anotherUser.trueLenth()
'arafat'.trueLenth()
"IceTea".trueLenth()

        // Call And this :

   function SetUsername(username) {
    // Complex DB Calls 
    this.username = username
    console.log("called");
    
   } 
   function createUser(username, email, password) {
    SetUsername.call(this, username)
    this.email = email
    this.password = password
   }
   const arafat = new createUser("Arafat", "arafatjkgh.com", "123")
   console.log(arafat);


         // Class Constructor and Static : ES6

/*
Class constructor syntax :

class name {
    constructor(parameters) {
        
    }
}
*/
class User {
    constructor(username, email, password) {
        this.username = username;
         this.email = email;
    this.password = password
    }
    encryptPassword() {
        // return this.password
        return `${this.password}abc `
    }
    changeUsername(){
        return `${this.username.toUpperCase()} `
    }
}
const chaiy = new User("chaiy", "chaiyhjg.com","123")
console.log(chaiy.encryptPassword());
console.log(chaiy.changeUsername());

    // behind the scene 
    function User(username, email, password) {
        this.username = username;
         this.email = email;
    this.password = password
    }
    User.prototype.encryptPassword = function () 
    {
        return `${this.password}abc`
    }
   const tea2 = new User("tea2", "tea2hjg.com","123")
console.log(tea2.encryptPassword());
console.log(tea2.changeUsername());

    // prototype behavioural {inheritance} :

            // Basic Class :
    class User {
        constructor(username) {
            this.username = username
        }
        logMe(){
            console.log(`USERNAME is ${this.username} `);
            console.log(`USERNAME is ${this.username.toUpperCase()} `);
            
        }
    }

    class Teachers extends User {
        constructor(username, email, password) {
            super(username)
            this.email = email
            this.password = password
        }
        addCourse(){
            console.log(`A new course was add by ${this.username} `);
            
        }
    }
    const logIn = new Teachers("Arafat" , "arafat124.com", "123")
    logIn.addCourse()
    const loggedIn = new User("Arfan")
    // loggedIn.addCourse() // Q. is :- "loggedIn" is access or not ? Ans. is : not ...
    //but ,
    loggedIn.logMe()
    logIn.logMe()
    console.log( logIn === loggedIn );
    console.log( logIn === Teachers );

     console.log( logIn instanceof Teachers );
     console.log( logIn instanceof User );

            // Static Pro{Properties} :
    class User {
        constructor(username) {
            this.username = username
        }
          logMe(){
            console.log(`USERNAME is : ${this.username} `);
        }
        /* createId(){
            return `123`
        } */
       static createId(){
            return `123`
        }
    }
const arafath =  new User('Arafat');
// console.log(arafath.createId());

class Teachers extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const iPhone = new Teachers("Iphone", 'iphonejdfh.com')
console.log(iPhone);
iPhone.logMe();
// console.log(iPhone.createId());

        // BIND :
        <button>Button</button>
    class React {
        constructor() {
            this.library = " React"
            this.server = "https://localhost:300/"

            //requirement :
            document
            .querySelector('button')
            .addEventListene("click",this.handleClick.bind(this))
        }
        handleClick() {
            console.log("button Clicked");
            console.log(this);
            console.log(this.server);
            
            
        }
    }
const app = new React() 



        // OOP {for Interview Typed Questions} :

// Object.getOwnPropertyDescriptor()
// console.log(Math.PI);
// if I override :
Math.PI = 5
// console.log(Math.PI); // but ans is same,not change...

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter); // Now we can see that " writable : false",that means we can't change ,but in deeply analysis we can see that ,we can change.Now the q. is " how ?".

// const mynewObject = Object.create(null)

const mynewObject = {
    name: 'Tea',
    price: 250,
    isAvailable : true,
    newObject : function () {
       console.log("Tea is not complete.");
    }
}
console.log(mynewObject);
console.log(Object.getOwnPropertyDescriptor(mynewObject,"name"));
console.log(Object.getOwnPropertyDescriptor(mynewObject,"price"));
/*
Object.defineProperty(mynewObject,'price',{
    // writable:false,
    Enumerable:false
    // Enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(mynewObject,"price"));
*/
/*
for (let[key,value] of mynewObject) {
    
}
*/
for (let[key,value] of object.entries(mynewObject)) {
    if (typeof value !== 'function') {
        
    }
  console.log(`${key} : ${value}`);
    
}