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

/*
    Difference's between Block Scope & Global Scope:
    Block Scope :" { } " এর ভিতরে যা কিছু থাকবে সব কিছুই  Block Scope ।
    Global Scope: " { } " এর বাহিরে যা কিছু থাকবে সব কিছুই Global Scope ।
*/