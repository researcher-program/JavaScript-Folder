
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
// sayMyName ==> //This is function's "reference",

sayMyName() // when "()" this function sign means "execute".
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