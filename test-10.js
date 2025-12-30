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

// const { useReducer } = require("react")

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

// const myArr = [0,1,2,3,4,5,true,'Arafat',"Arfan"]
// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[7]);
// console.log(myArr["one"]); //undefined


const myHeros = ["Arafat","Arfan"]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);
//  console.log(myArr2[0]);
// console.log(myHeros[0]);

const myArr3 = new Array(1,2,3,4,5)
// console.log(myArr3[0]);

const myHeroes = ["Arafat","Arfan"]
// console.log(myHeroes[0]);

// ------------------------------ X ---------------------------

            //Array's Methods:

const myArr = [0,1,2,3,4,5,true,'Arafat',"Arfan"]
// myArr.push(6) // Add in Array[in last positions] 
// console.log(myArr);
// myArr.pop() // remove in Array[in last positions]
myArr.pop(5) // No Changes 
// console.log(myArr);
// myArr.unshift(9) // Add in Array[in first positions]
// console.log(myArr);
// myArr.shift() // remove in Array[in first positions]
// console.log(myArr);
// console.log(myArr.includes(7)); //false
// console.log(myArr.includes(5)); //true
// console.log(myArr.indexOf(10)); // -1{All time same}
// console.log(myArr.indexOf(-1));
// console.log(myArr.indexOf(3)); // 3
const newArr = myArr.join() // convert into "array" to "string".
// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);

        // slice, splice
// console.log("A = ",myArr);
const myn1 = myArr.slice(1,3) // [1,2]{not include 0 and 3}(starting point-1,end point-2).
// console.log(myn1);
// console.log('B = ', myArr);


const myn2 = myArr.splice(1,3) 
//     ==> splice :
// [1,2,3]  
// that means A=[0,1,2,3,4,5,true,'Arafat',"Arfan"]{Main}
// C = [0,4,5,true,'Arafat',"Arfan"]
// [1,2,3] ==>not includes in {main brance 'C'} 

console.log('C = ', myArr);
// console.log(myn1);
// console.log(myn2);

// ---------------------- X ---------------------------


           // Array's Function:

// const { useReducer } = require("react")

 /*
 Browser --> inspect --> Console -->Then ...
 const Numbers = [1,2,3,4,5] =>undefined
=>Numbers (5) [1, 2, 3, 4, 5]
0: 11: 22: 33: 44: 5
length: 5
[[Prototype]]: Array(0)

        // Some of Array's Functions are :
1)at: at()
2)concat: concat()
3)constructor: Array()
4)copyWithin: copyWithin()
5)entries: entries()
6)every: every()
7)fill: fill()
8)filter: filter()
9)find: find()
10)findIndex: findIndex()
11)findLast: findLast()
12)findLastIndex: findLastIndex()
12)flat: flat()
13)flatMap: flatMap()
14)forEach: forEach()
15)includes: includes()
16)indexOf: indexOf()
17)join: join()
18)keys: keys()
19)lastIndexOf: lastIndexOf()

length: 0

20)map: map()
21)pop: pop()
22)push: push()
23)reduce: reduce()
24)reduceRight: reduceRight()
25)reverse: reverse()
26)shift: shift()
27)slice: slice()
28)some: some()
29)sort: sort()
30)splice: splice()
31)toLocaleString: toLocaleString()
32)toReversed: toReversed()
33)toSorted: toSorted()
34)toSpliced: toSpliced()
35)toString: toString()
36)unshift: unshift()

37)values: values()
38)with: with()
39)Symbol(Symbol.iterator): values()

 *** ***  *** Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}

[[Prototype]]: Object

i)constructor: Object()
ii)hasOwnProperty: hasOwnProperty()
iii)isPrototypeOf: isPrototypeOf()
iv)propertyIsEnumerable: propertyIsEnumerable()
v)toLocaleString: toLocaleString()
vi)toString: toString()
vii)valueOf: valueOf()
viii)__defineGetter__: __defineGetter__()
ix)__defineSetter__: __defineSetter__
x)__lookupGetter__: __lookupGetter__
xi)__lookupSetter__: __lookupSetter__
xii)__proto__: (...)
xiii)get __proto__: __proto__()
xiv)set __proto__: __proto__()
length: 0
name: "get __proto__"
arguments: (...)
caller: (...)

[[Prototype]]: 
ƒ ()
[[Scopes]]: Scopes[0]
set __proto__: __proto__()
length: 1
name: "set __proto__"
arguments: (...)
caller: (...)

[[Prototype]]: ƒ ()
apply: ƒ apply()
arguments: (...)
bind: ƒ bind()
call: ƒ call()
caller: (...)
constructor: ƒ Function()
length: 0
name: ""toString: ƒ toString()


Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()

get arguments: ƒ arguments()
set arguments: ƒ arguments()
get caller: ƒ caller()
set caller: ƒ caller()

[[FunctionLocation]]: [[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]

No properties
*/
const marvelHeros = [ "Thor","Iron-man","SpiderMan"]
const dcHeros = [ "SuperMan","Flash","BatMan"]
marvelHeros.push(dcHeros) 
marvelHeros.concat(dcHeros) 
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);
const allHeroes = marvelHeros.concat(dcHeros)  // Finally  2 Arrays marges...
// console.log(allHeroes);

// spread/ spread out :
const allNewHeros = [...marvelHeros,...dcHeros] // ... ==>spread/ spread out==>all arrays are marged.
// console.log(allNewHeros);// Finally  2 Arrays marges...{same}

const anotherArray = [1,2,3,[4,5,6],7,[8,9,10],[11,12,[13,14,15],16,17],18,19,20]
const realAnotherArray = anotherArray.flat(Infinity) // ALL Arrays are marged in 1 Array.
// console.log(realAnotherArray);
// console.log(Array.isArray("Arafat"));
// console.log(Array.from("Arafat"));
// console.log(Array.from({name:"Arafat"}));  //interesting;empty array given.

let score1 = 100
let score02 = 200
let score03 = 300
// console.log(Array.of(score1,score02,score03)); //setup elements. ==>[100,200,300]==>given like array.

/*
         ++++++++++++++++++++++++++ X +++++++++++++++++++++++++ 
*/