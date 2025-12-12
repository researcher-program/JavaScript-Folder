  /*
                    DOM And Manupalation:
                Document Object Model ==> DOM
// Go to --> "Browser" --> Click " Inspect" --> Go Inside Of "Console" --> Then Search then In Below :

console.log(window);
console.log(window.document);
console.log(document);
console.log(document.); // "document." document এ {.}ডট দেওয়ার পর Suggestion-List এ যেইগুলা আসবে,যেটা ইচ্ছা ঐটা দেখা যাবে । যেমন ঃ console.log(document.linkColor);
console.dir(document);
*/
 /*
 Actually, How To Work " DOM " in "Browser" :
        Diagram:- 
            "Element" inside ==> Window=>Document=>Html=>1.Head{1.Title[Text Node],2.Meta[Attribute]},2.Body{1.div{1.h1[Attribute,Text Node],2.paragrap[Text Node]},2.Attribute}
 */

// NodeList: {All DOM Selectors Nodelist and HTMLAllCollection}:-

document.getElementById();


// document.getElementById("firstHeading").innerHTML = "<h1>Al-Arafat</h1>"


// console.log(window);
// VM224:1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// undefined
// window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}$: ƒ (selector,context)Geo: {country: 'BD', region: 'C', city: 'Dhaka', lat: 23.84, lon: 90.32, …}
// [[Prototype]]: HTMLDocument
// undefined

         // Dom:
// document.getElementById("title")
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​
// document.getElementById("title").id
// 'title'
// document.getElementById("title").class
// undefined
// document.getElementById("title").className
// 'heading'
// document.getElementById("title").getAttribute()

// document.getElementById("title").getAttribute("id")
// 'title'
// document.getElementById("title").getAttribute("class")
// 'heading'

// document.getElementById("title").setAttribute("class",'test')

// document.getElementById("title").setAttribute("class",'test heading')

// const Title = document.getElementById("title")

// Title.style.backgroundColor = "blue"



// const Title = document.getElementById("title")
// undefined
// Title.style.backgroundColor = "blue"
// 'blue'
// Title.style.padding ='15px"
// VM2395:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// Title.style.padding ='15px'
// '15px'
// Title.style.borderRadius ='20px'
// '20px'


// Title.textContent
// 'DOM Learning'
// Title.innerHTML
// 'DOM Learning'
// Title.innerHTML
// 'DOM Learning'
//Title.innerText

// document.getElementsByClassName("heading")
// document.getElementsByClassName("heading")
// document.getElementsByClassName("heading")

// HTMLCollection [h1#title.heading, title: h1#title.heading]


// document.querySelector("h2")
// <h2>​sldfjkghkjsd​</h2>​
// document.querySelector(".title")
// null
// document.querySelector(".heading")
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​
// document.querySelector(" #title")
// <h1 id=​"title" class=​"heading">​DOM Learning​</h1>​
// document.querySelector("input type[password]")
// document.querySelector("input type['password']")//Error/incoorect
// document.querySelector("input [type = 'password']")
// document.querySelector("input type[password]")
// document.querySelector("ul")
// const myUl=document.querySelector("ul")
// myUl.querySelector("ul")
// const myLi=myUl.querySelector("ul")
// myLi.querySelector("li")
// myLi.style.backgroundColor='blue'
// myLi.style.paddingr='15px'
// myLi.innerText
// myLi.innerText="five"



// document.querySelectorAll(" p:first-child")
// document.querySelectorAll(" h2")
// document.querySelectorAll(" li")
// const Li_list= document.querySelectorAll(" li")
// Li_list.style.color = 'green'//Error/incorrect
// Li_list[0].style.color = 'green'//now correct
// Li_list.forEach(function( li) {
//     li.style.backgroungColor ='blue'
// })



// const myH1= document.querySelectorAll("h1")
// myH1.style.color = 'blue'//Error/incorrect
// myH1[0].style.color = 'blue'//now correct

// document.getElementsByClassName("list-item")
// const myClassList =document.getElementsByClassName("list-item")
// myClassList.forEach(function(li) {
//     console.log(li);
    
// })//Error/incorrect
// Array.from(myClassList)
// const myConvertedArray = Array.from(myClassList)
// myConvertedArray.forEach(function(li) {
//     li.style.color ='sky-blue'  
// })//correct


// NodeList(3) [h2, h2, h2]0: "NodeList"get length: ƒ length()[[Prototype]]: Object

    // Create , Edit And Remove :

  // This is traversing code : parents => to => child ; child => to => parents

   const myparent =  document.querySelector(".parent")
//    console.log(myparent);
    // console.log(myparent.children);
    // console.log(myparent.children[0]);
// console.log(myparent.children[1]);
// console.log(myparent.children[2]);
// console.log(myparent.children[3]);
// console.log(myparent.children[3].innerHTML);
for (let i = 0; i < myparent.children.length; i++) {
 // const element = myparent.children[i];
// console.log(element);
    
//     console.log(myparent.children[i].innerHTML); 
}

// myparent.children[2].style.color = "blue"
// console.log(myparent.firstElementChild);
// console.log(myparent.lastElementChild);
// console.log(myparent.secondElementChild);

const dayOne = document.querySelector(".day")
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
// console.log(dayOne.nextSibling);
// console.log("NODES: ",myparent.childNodes);


// Second Script for another xmple:

// create node list :
    const div = document.createElement('div')
    console.log(div);

    div.className = "main"
   // div.id = "myId"
    div.id = Math.round(Math.random()*10 + 1)

    div.setAttribute("title","generated title")

    div.style.backgroundColor = "green"
    div.style.color = "red"
    div.style.padding = "12px"
    // div.innerText = "Create A New Element In DOM"

    const addText = document.createTextNode("Create A New Element In DOM")
    div.appendChild(addText)
    document.body.appendChild(div)


    // Edit and Remove Elements 
function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML ='${langName}'
    document.querySelector('.language').
    appendChild(li)
}
addLanguage("Python")//Occurs "Error"
addLanguage("Typescript")//Occurs "Error"

// Or,
function addOptiLanguage(langName) {
    const li = document.createElement('li');
    /*
    const addText = document.createTextNode(langName)
    li.appendChild(addText)
    */
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage("Golang")

    // Edit:
const secondLang =  document.querySelector('li:nth-child(2)')
console.log(secondLang);

// secondLang.innerHTML = 'Mojo'
const newli = document.createElement("li")
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'

    // Remove:
const thirdLang = document.querySelector("li:third-child");
thirdLang.remove()//Error Occurs
// document.getElementById("div-02");
const lastLang = document.querySelector('li:last-child');
lastLang.remove()//Error Occurs


    // Events:
// HTML code copy করতে হবে হিতেশ ভাই এর github hitesh থেকেঃ

// Older version,Don't use in this ,because company don't like it:
// 1. alt = "" onclick="alert('owl')" //inside in HTML

//2. document.getElementById("owl").onclick = function () {
//     alert("owl clicked") 
// }

// 3.attachEvent()
//4.jQuery- jQuery.on()

// Use it:
//5.
// document.getElementById("owl").addEventListener('click',function () {
//     alert("owl clicked again") 
// }) 

document.getElementById("owl").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log(events);
},false) //false =>default 

// type,timestamp,defaultPrevented,target,toElement,srcElement,currentTarget,clientX,clientY,screenX,screenY,altkey,ctrlkey,shiftkey,keycode ==> Study on this topics

// What is Event Propogation?

//For False{Bubbling Mood}:Bottom to Top
document.getElementById("images").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log('clicked inside the ul');
},false)
document.getElementById("owl").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log("owl clicked");
},false)
// অথবা,
document.getElementById("images").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log('clicked inside the ul');
})
document.getElementById("owl").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log("owl clicked");
})


//For True{Capturing Mood}: Top to Bottom
document.getElementById("images").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log('clicked inside the ul');
},true)
document.getElementById("owl").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log("owl clicked");
},true)


document.getElementById("images").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log('clicked inside the ul');
},false)
document.getElementById("owl").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    console.log("owl clicked");
    events.stopPropagation()
},false)

document.getElementById("google").addEventListener('click',function (events) {
    // alert("owl clicked again") 
    // events.defaultPrevented() //This is bugs...
    events.preventDefault()
     events.stopPropagation()
    console.log("google clicked");
    
},false)

// Project:যেই ছবির উপর click করবো,সেই ছবি যেন vanish হয়ে যায়।
document.querySelector('#images').addEventListener('click',function (event) 
{
    // console.log(event.target);
    // console.log(event.target.parentNode);
    console.log(event.target.targetName);
    removeIt.remove()
    // or,
    // removeIt.parentNode.removeChild(removeIt)
    
})

document.querySelector('#images').addEventListener('click',function (event) {
    // console.log(event.target);
    // console.log(event.target.parentNode);
    console.log(event.target.targetName);
    if (event.target.targetName === 'IMG') {
        console.log(event.target.id);
        let removeIt = event.target.parentNode
    removeIt.remove()
    // or,
    // removeIt.parentNode.removeChild(removeIt)
    }
})
// ``````````````````````````` X ```````````````````````````