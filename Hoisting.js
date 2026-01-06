                // Scope level and mini hoisting in javascript:

        //This is some Kind of "Closure" :
        //Nested Scope :
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

    