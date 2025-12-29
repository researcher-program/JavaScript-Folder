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

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toExponential()); // TypeError: myDate.toExponential is not a function.
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// console.log(myDate.toLocalString()); // TypeError: myDate.toLocalString is not a function
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

                     //       ------------- X ------------------


let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023,0,23,5,3)
// console.log(myCreatedDate1.toLocalString()); // TypeError: myCreatedDate1.toLocalString is not a function
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14")
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate3.toLocaleString());

            // ----------- X ----------

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
let myCreatedDate4 = new Date("01-14-2023")
// console.log(myCreatedDate4.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


            // --------------- X ------------- 
 
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.get);
// console.log(newDate.getMonth());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getDay()+1);
// `${newDate.getDay()} and the time` // ReferenceError: Cannot access 'newDate' before initialization

newDate.toLocaleString("default",{
    weekday:"long" ,
    // timezone:''
})


            // --------------- X -------------

