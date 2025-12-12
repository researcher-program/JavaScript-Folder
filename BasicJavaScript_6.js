// Async Fundamentals and All:

// async (params) => {
    
// }

// Javascript{Default} ==>1.Synchronous,2.Single Threaded.
// Execution Context==>{Execute one line of code at a time;Each operation waits for the last one to complete before executing.}
// [Example:console log-1=>console log-2=>console log-3...]
// Memory:Call Stack and Memory Heap

// Blocking Code{Block the flow of program->Read file sync} Vs Non-Blocking Code{Does not block execution->Read file Async}

        // Type-1:
 /*
    setTimeout(function(){
        console.log("Arafat");
        
    },2000)
    */
   /*
    const sayHitesh = function(){
        console.log("Hitesh");
    }
    setTimeout(sayHitesh,2000)
    */
   /*
    const changeText = function(){
        document.querySelector('h1').innerHTML = "best JS series"
    }
    setTimeout(changeText,2000)
    */
/*
   const changeText = function(){
        document.querySelector('h1').innerHTML = "best JS series"
    }
    const changeMe = setTimeout(changeText, 2000)

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe)
        console.log("STOPPED")
    })
*/
        // Type-2:
    /*
        setInterval(function(){
        // console.log("Arafat");
        console.log("Arafat",Date.now());
    })
    */
   /*
    const sayDate = function()
   {
        // console.log("Arafat");
        console.log("Arafat",Date.now());
    }
    setInterval(sayDate,1000,"Hello")
    */
   /*
    const sayDate = function(str)
   {
        // console.log("Arafat");
        console.log(str,Date.now());
    }
    setInterval(sayDate,1000,"Hello")
    */
    const sayDate = function(str){
        console.log(str, Date.now());
    }

    const intervalId = setInterval(sayDate, 1000, "hi")

    clearInterval(intervalId)

