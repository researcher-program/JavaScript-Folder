// Ryan Dahl is the founder of Node.Js and Deno.

/* Variable => 3 types of Variables { const[not changeable],let[more useable in js] and var[it's better not to use] } 
+++++++++++++++++++++++++++++++++++++++++ X +++++++++++++++++++++++++++++++++++
******* Basically,"Variable" is 2 types{let and var};"Const" is not a variable ,it's a " constant " . **********
----------------------------------- X -------------------------------------
// Variable Define{ var, let, const }
```````````````````````````````````` X ```````````````````````````````````````
Prefer to not use of " var --Variable " ,because of in issues in "block and functional scope" . "Use strict!";Treat all JS code as newer version.
*/


const accountId = 15344
accountId = 2 //not allowed for constant,because it's not changeable.
let accountEmail = " arafatgmail.com "
accountEmail = " arfangmail.com "
var accountPassword = " 1545645 "
accountPassword = " 1545 "
accountCity = "Demra"
accountCity = " Dhaka "

console.log(accountId); //It's used to "Execute" this program.
console.log("Arafat");
/*
console.log(3
     +
     3);

// Please stay out of this kind of code,because of  readability should be high.
*/

 let accountState; //Undefined
console.table( [ accountEmail, accountPassword, accountCity, accountState ] );
