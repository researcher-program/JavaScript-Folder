

/*
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
sayMyName
sayMyName()
*/
/*
function addTwoNum(num1,num2)//parameters
 {
    console.log(num1+num2);
}
// addTwoNum()
// addTwoNum(3,4)
// addTwoNum(3,"4")
// addTwoNum("3",4)
// addTwoNum(3,"a")
// addTwoNum(3,null)
// addTwoNum(3,4,8) // Only add first two numbers/arguments/values.
const result = addTwoNum(4,5)
console.log("Result: ",result);//undefined
*/
/*
function addTwoNum(num1,num2)
 {
    let result = num1 + num2;
    console.log("Arafat");
    return result;
    console.log("Arafat"); //This line will never execute because it's after the return statement.
}
const result = addTwoNum(4,5)
console.log("Result: ",result);
*/
function addTwoNum(num1,num2)
 {
    
    return num1 + num2 ;
    
}
const result = addTwoNum(4,5)
// console.log("Result: ",result);



function loginUserMessage(username) {
    return ` ${username} Just Logged In.` 
    
}
/* No need to call function again and again:

// loginUserMessage()
// loginUserMessage("Arafat")
// console.log(loginUserMessage("")); //no change
// console.log(loginUserMessage()); //undefined
*/
// console.log(loginUserMessage("Arafat"));



function loggedInUserMessage(userName) {
    if (userName===undefined) {
        console.log("Please Enter Your UserName");
        return
    // return ` ${userName} Just Logged In.`
    }
    return ` ${userName} Just Logged In.`
    
}
/*
// loggedInUserMessage()
// loggedInUserMessage("Arafat")
// console.log(loggedInUserMessage(""));
// console.log(loggedInUserMessage());
*/
// console.log(loggedInUserMessage("Arafat"));

function loginUserMessage1(username1) {
    if (!username1) {
        console.log("Please Enter Your UserName");
        return
        
    }
    return ` ${username1} Just Logged In.`
    
}
/*
// loginUserMessage1()
// loginUserMessage1("Arafat")
// console.log(loginUserMessage1(""));
// console.log(loginUserMessage1());
//  ("") ==> Empty String /(undefined)==> False Value.
*/
// console.log(loginUserMessage1("Arafat"));


function loginUserMessage2(username2="Samy") {
     if (!username2) {
        console.log("Please Enter Your UserName");
        return
     }
    return ` ${username2} Just Logged In.`
    
}
/*
// loginUserMessage2()
// loginUserMessage2("Arafat")
*/
// console.log(loginUserMessage2());
// console.log(loginUserMessage2("aRAFAT")); // override "Samy"


function loginUserMessage2(username2="Samy") {
     if (!username2) {
        console.log("Please Enter Your UserName");
        return
     }
    return ` ${username2} Just Logged In.`
    
}
// loginUserMessage2()
// loginUserMessage2("Arafat")
// console.log(loginUserMessage2());
// console.log(loginUserMessage2("Arafat")); // override "Samy"



function calculateCartPrice(num1) {
    return num1 
}
// console.log(calculateCartPrice(2));

// console.log(calculateCartPrice(200,400,600,800)); //Prblem: only first argument will consider.
/*
If ,
console.log(calculateCartPrice(200,400,53545,453,2425));
Then What ?
The Answar Is:
restOperator{...} / spreadOperator.
*/

function calculateCartPrice(...num2) {
    return num2 
}
// console.log(calculateCartPrice(200,400,53545,453,2425));

function calculateCartPrice(val1,val2,...num3) {
    return num3 
}
// console.log(calculateCartPrice(200,400,53545,453,2425));
// console.log(val1); // Occurs Error: val1 is not defined
// console.log(val2); // Occurs Error: val2 is not defined



      //Objects in Functions:
const user = {
    userName: "Arafat",
    price:164
}
function handleObject(anyobject) {
// console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handleObject(user)
/*
    // Intentionally Mistakes/Errors for Learning Purpose:
    const user = {
    userName: "Arafat",
    prices:164
}
function handleObject(anyobject) {
console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user)

//That's Why Need here " TypeScript " for avoiding this type of mistakes/errors.
*/


function handleObject(anyobject) {
console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`);
}/*
handleObject({
    userName:"sam",
    price:356
})
*/
        //   Arrays:
const myNewArray = [200,400,100,544]
function returnSecondValue(getArray) {
    return getArray
    // return getArray[1]
    // return getArray[] // Occurs Error: Unexpected token ']' // SyntaxError: Unexpected token ']'
}
// console.log(returnSecondValue(myNewArray));

// Or,

console.log(returnSecondValue([
    200,400,100,544,520 //same output
])); // Override "myNewArray"
