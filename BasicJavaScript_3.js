/*
                ************** 1. DateType:  *************
                  Actually,Older "js" had not "Array,class,module" but Newer "js" have had this.
                This new Js has to refer as:
                                        "use Strict"; 
//Treat all js code as newer version.
*/
/*
alert( 3 + 3)
we are using node.js,not browser,that's why,node.js has not run as an "alert" command,but it fully accessable in browser ,but which isn't mean by  it can't use in node.js this "alert" command,but it use but, different way/syntax therefore can't run on nodejs.
*/

/*
let name = " Arafat " // string type
let age = 26 // number 
let IsloggedIn = false // boolean type

let valueInNumber = Number
console.log("Arafat");
*/
/*
 ~ DataType: 
 1.bigint ; 2.string => single quote {''} / {" "} double quote ;3.boolean =>true/false ; 4.null => standalone value ; 5.undefined ; 6.symbol =>Unique ; 7. number => 2 to power 53+ ; 8.object. 

console.log(typeof "arafat"); //string
console.log(typeof age); //number
console.log(typeof null); //object
console.log(typeof undefined); //undefined
*/
/*
let score = "33"
console.log(typeof score);
console.log(typeof(score));
*/
/*
console.log(3
     +
     3);

Please stay out of code readability should be high
*/

/*
             ************** 2. DateType Conversion:  *************  
             It means convert into data ,like: number --{convert}-->string,etc.

let score = "33abd" //NaN => Not a Number
 console.log(typeof score);
console.log(typeof(score)); //As a methods inside of "Parenthesis / Parentheses ==> ( )"

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(typeof (valueInNumber));
*/
/*
let score1 = null //0
console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(typeof (valueInNumber1));
*/
/*
let score2 = undefined //NaN => Not a Number
console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber2);

let score3 = True // True=1 / False=0
console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber3);

let score4 = "Arafat" //NaN => Not a Number
console.log(typeof score4);
console.log(typeof(score4));

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(typeof valueInNumber4);
*/

/*
33 ==> 33{ Number};
"33"==>String;
3sfd==>NaN{Not a Number};
"3sfd"==>NaN{Not a Number};
True=1 / False=0
*/
/*
let isLoggedIn =1 // Output given is "True"
let isLoggedIn ="" // Output given is "False"
let isLoggedIn =" Arafat" // Output given is "True"

let booleanIsLoggedIn = Boolean(isLoggedIn )
console.log(booleanIsLoggedIn);
*/
/*
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); //output ==>33
console.log(typeof stringNumber); //convert into string
*/

/*
                                Operation:
*/
/*
let value=3
let negValue =-value
// console.log(negValue);
*/
/*
            Normal Type Operation:
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2**3); 
        "**" ==> power
console.log(2/2);
console.log(2%2); //But it's important...
*/
/*
let str1 ="Hello" 
let str2 =" Arafat"
let str3 = str1 + str2
console.log(str3);
*/
/* 
Complex Situation :

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+"2"+3);
console.log(1+2+"3");
console.log(2+3*4/5%6);
 ==>((((2+3)*4)/5)%6)

console.log(true);
==>true
console.log(+true);
==>1
console.log(true+);
==>Error
console.log(+ "");
//==>"+"=1;=""=>0
*/
/* 
Lame Type Code:

let num1,num2,num3
num1=num2=num3=2+2
*/
/*
let gameCounter=100
// ++gameCounter;
gameCounter++;
console.log(gameCounter);
Output : same.

>=>  ++gameCounter / gameCounter++ =>101{Output}
*/
/*
If you want to learn more about in "Prefix-Postfix",get the search ==> Prefix-Postfix :

link:
1. ECMA:https://tc39.es/ecma262/2023/#sec-notational-conventions

2.MDN:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

3.W3school:https://www.w3schools.com/java/java_operators.asp
*/
/*
       Comparision of     Operation:

console.log(2>1);
==> output: True/False

console.log(2<1);
==> output: True/False

console.log(2>=1);
==> output: True/False

console.log(2<=1);
==> output: True/False

console.log(2!=1);
==> output: True/False

console.log("2" >1);
==> output: True/False

console.log("02" >1);
==> output: True/False

console.log(null > 0);
==> output: True/False

console.log(null < 0);
==> output: True/False

console.log(null == 0);
==> output: True/False

console.log(null>=0);
==> output: True/False
   [
The reason that an equality check == and comparisons > < >= <= work differently.
   comparisons convert null to a number,treating it as 0.
   That's why {3} null >=0 is true and {1}null > 0 is false.
   ]
console.log(undefined >1);
==> output: True/False

console.log(undefined <1);
==> output: True/False

console.log(undefined ==1);
==> output: True/False 
*/
/*
=== 
console.log("2" === 2);
==> output: True/False

console.log(1 == a);
==> output: True/False
*/

/*
               DataType has 2 type:
i.Primitive ;
ii.Non-Primitive.

DataType defines as how to store in memory ,and how to access data in memory.

i.primitive: call by Value
   7 types :
String,
Number,
Boolean,
Null,
Undefined,
Symbol,
BigInt

ii.Non-Primitive:call by reference
Arrays,Objects,Functions

Js is a Dynamic Language,Not Static Languages.
*/
/*
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // let userEmail = undefined   //same

const id = Symbol("1252")
const anotherId = Symbol("1252")
// console.log(id === anotherId); // False => are not same
const bigNumber = 3545344254236n
 
      // This is an Array:
const heros = ["Arafat","Shuvo",'Yeash']
 let myObj = {
    name: "Arfan",
    Age: 26,
 }
         // This is an Function:
const myFunction  = function () {
   //  console.log("Hello world");
 }
 */
/*
 console.log( typeof  score);
 console.log( typeof  scoreValue);
 console.log( typeof  isLoggedIn);
 console.log( typeof  id);
 console.log( typeof  anotherId);
console.log( typeof  outsideTemp);
console.log( typeof bigNumber);
console.log( typeof  heros);
console.log( typeof  myObj);
console.log( typeof  myFunction);
*/

/*
If you want to know about operators "Typeof" ,
then go through this link:

https://262.ecma-international.org/5.1/#sec-11.4

*/
/*
              Memory:
2 types:
Stack{Primitive}[Copies Value],
Heap{Non-Primitive}[Reference Value]
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
/*
++++++++++++++++++++++++++++++++ X +++++++++++++++++++++++++++
*/
                 
 /*
                  String:
 */
/*
            Basic String:

 const name = "arafat"
 " Hello " + " World "
 'Hello World'
*/
/*
const name = "arafat"
const repoCount = 50
console.log(name+repoCount+"value");

         This are backdated...|

      But Modern Days are:
console.log(`Hello my name is  ${name} ,my repo is  ${repoCount} `);
*/
/*
      Some String Functions:
const gameName = new String("valueghflg-hhj")
console.log(gameName[0]);
console.log(gameName.__proto__); //double underscore { _ _ }
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));
console.log(gameName.indexOf("a"));
const newString = gameName.substring(0,6)
console.log(newString);
const anotherString = gameName.slice(-8,6)
console.log(anotherString);
const newStringone = "      arafat     "
console.log(newStringone);console.log(newStringone.trim());
// Know more about trim then :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://arafat.com/arafata%20yeash"
 console.log(url.replace("%20","-"));

console.log(url.includes("yeash"));

console.log(url.includes('hitesh'));

const gameName1 = new String("valueghflg-hhj-ghfj")
console.log(gameName1.split("-"));
Please spending on string functions to read how to work on it ,so every string function has atleast few minutes to study on it below:~
Know more about trim then :

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/
/*
If you want to learn about  "string" :
"If you want to know about this string function{f},then go to click :
-->newTab-->inspect-->console-->[[Prototype]]: String."
length: 5
[[Prototype]]: 
String anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()

...... {... More ...}

Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "value"
*/
/*
+++++++++++++++++++++++++++++++++++ X +++++++++++++++++++++++++++++++++++++++++
*/
 /*
                     Numbers And Math:


      All About Numbers:

const score = 400
console.log(score);

const balace = new Number(100)
console.log(balace);
console.log(balace.toString().length);
console.log(balace.toFixed(2)); //100.00
console.log(balace.toFixed(1)); //100.0
console.log(balace.toFixed(3)); //100.000

const otherValue = 23.8965
console.log(otherValue.toPrecision(3)); // 23.9

const otherValue1 = 123.8965
console.log(otherValue1.toPrecision(3)); //124

const otherValue2 = 1123.8965
console.log(otherValue2.toPrecision(3)); //1.12e+3

const otherValue3 = 123.8965
console.log(otherValue3.toPrecision(4)); // 123.9

const otherNumbers = 100000000000000000000
console.log(otherNumbers.toLocaleString('en-BD','en-IN'));

*/
/*

If you want to learn about  "Number" :
"If you want to know about this Number function{f},then go to click :
-->newTab-->inspect-->console-->[[Prototype]]: Number."

[[Prototype]]: Number ; constructor: ƒ Number() ; toExponential: ƒ toExponential() ; toFixed: ƒ toFixed() ; toLocaleString: ƒ toLocaleString() ; toPrecision: ƒ toPrecision() ; toString: ƒ toString() ; valueOf: ƒ valueOf()
                                    ...............

[[Prototype]]: Object ; [[PrimitiveValue]]: 0 ; [[PrimitiveValue]]: 100 ; undefined.

Number :
ƒ Number() { [native code] }
Number.  
//Number.এর পরে যেকোনো ফাংশন বসানো যাবে Suggestion-List অনুযায়ী,
 Like:Number.EPSILON
            +++++++++++++++++++++++ X +++++++++++++++++++++++++
 */
/*
      All About Maths:
console.log(Math);
console.log(Math.abs(-4)); //4 {positive 4} and {positive 4/+4 ==> 4.}
console.log(Math.round(-4.35)); // 4
console.log(Math.round(-4.6)); // 5 / -5
console.log(Math.ceil(4.32)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.max(4,5,8,9,12,18)); //18
console.log(Math.min(4,5,8,9,12,18));//4
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
*/

/*
If you want to learn about  "Math" :
"If you want to know about this Math function{f},then go to click :
-->newTab-->inspect-->console-->[[Prototype]]: Math."

console.log(Math); ==> VM365:1 

Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

E: 2.718281828459045

LN2: 0.6931471805599453

LN10: 2.302585092994046

LOG2E: 1.4426950408889634

LOG10E: 0.4342944819032518

PI: 3.141592653589793

SQRT1_2: 0.7071067811865476

SQRT2: 1.4142135623730951

abs: ƒ abs()

acos: ƒ acos()

acosh: ƒ acosh()

asin: ƒ asin()

asinh: ƒ asinh()

atan: ƒ atan()

atan2: ƒ atan2()

atanh: ƒ atanh()

cbrt: ƒ cbrt()

ceil: ƒ ceil()

clz32: ƒ clz32()

cos: ƒ cos()

cosh: ƒ cosh()

exp: ƒ exp()

expm1: ƒ expm1()

f16round: ƒ f16round()

floor: ƒ floor()

fround: ƒ fround()

hypot: ƒ hypot()

imul: ƒ imul()

log: ƒ log()

log1p: ƒ log1p()

log2: ƒ log2()

log10: ƒ log10()

max: ƒ max()

min: ƒ min()

pow: ƒ pow()

random: ƒ random()

round: ƒ round()

sign: ƒ sign()

sin: ƒ sin()

sinh: ƒ sinh()

sqrt: ƒ sqrt()

tan: ƒ tan()

tanh: ƒ tanh()

trunc: ƒ trunc()

Symbol(Symbol.toStringTag): "Math"

[[Prototype]]: Object
             ++++++++++++++++++++ X ++++++++++++++++++++++++
*/
/*
            Date and Time in depth:
 */
/*
If you want to learn more about "Date":
 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 2. https://tc39.es/proposal-temporal/docs/

*/
/*
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
console.log(myDate.toJSON());
*/
/*
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
*/
/*
let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocalString());
*/
/*
let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocalString());
*/
/*
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocalString());
*/
/*
let myTimeStamp = Date.now()
console.log(myTimeStamp);
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.getTime());

// console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
*/
/*
let newDate = Date()
// console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString("default",{
    weekday:"long" ,
   //  timezone:''
})
*/
/*
      +++++++++++++++++++++++++++ X ++++++++++++++++++++++++++++++++++++++
*/