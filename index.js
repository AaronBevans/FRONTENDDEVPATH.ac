//variables
var number = 1
number = 2
number += number
console.log(number)

//short circuiting
number = 0
let newNumber = number + 1
newNumber != number ? console.log(true) : console.log(false)

//if/else-if else statements

if(newNumber){
    console.log('truthy value')
}else{
    console.log('falsy value')
}

if(newNumber === number){
    console.log(0)
}else if(newNumber > number){
    console.log(`newNumber value is ${newNumber}`)
}else{
    console.log('value unidentified')
}

let letter = 'a'

if(typeof newNumber === typeof letter && typeof newNumber <= typeof length){
    console.log(`${newNumber} and ${letter} are equal data types`)
}else{
    console.log(`${newNumber} and ${letter} are not equal data types`)
}

newNumber = typeof newNumber
letter = typeof letter
let nullType = null


//switch statements
switch(letter){
    case letter:
        console.log(`the data type is ${letter}`)
        break;
    case newNumber:
        console.log(`the data type is a ${newNumber}`)
        break;
    default:
        console.log(`the data type is ${nullType}`)
}

const booleanVal = true
const falsyType = ''
const newFalsyType = NaN

//arrays
let array = [
    `${number}`,
    `${newNumber}`,
    `${letter}`,
    `${nullType}`,
    `${booleanVal}`,
    `${falsyType}`,
    `${newFalsyType}`
]
console.log(array[0])
console.log(array[3])

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//objects
let object = {
    engineerType: 'front-end software engineer',
    languages: ['html', 'css', 'javaScript'],
    frameworkTechnology: 'react.js',
    objectMethod(){
        console.log(
            `${this.engineerType}; user interface development with ${this.languages[2]}.`
        )
    }
}

object.serverTechnology = 'node.js'
console.log(object.serverTechnology)
object.objectMethod()

//functions

function functionLogic(){
    console.log('simple function logic')
}
functionLogic()

let dataFun = function(dataParam){
    console.log(dataParam)
}
dataFun('variable is now a function')


function returnFunction(){
    console.log(`${dataFun}`)
}
returnFunction()//returns function body

//challenge; determine if person is old enough to drink
//send a message based on age and gender to both age limit groups.

let profileObject = [
    {
        firstName: 'aaron',
        lastName: 'bevans',
        age: 30,
        sex: 'male'
    },
    {
        firstName: 'angelica',
        lastName: 'criado',
        age: 27,
        sex: 'female'
    },
    {
        firstName: 'avrie',
        lastName: 'bevans',
        age: 1,
        sex: 'female'
    },
    {
        firstName: 'bynx',
        lastName: 'the black cat',
        age: 5,
        sex: 'male'
    },
    {
        firstName: undefined,
        lastName: 'person',
        age: 21,
        sex: undefined
    },
    {
        firstName: 'baby A',
        lastName: 'bevans',
        age: 0,
        sex: undefined
    }
]

for(let i = 0; i < profileObject.length; i++){
    if(profileObject[i].age >= 21){//if males and undefined are 21 or above confirm they can drink
        if(profileObject[i].sex === 'male'){
            console.log(`Thank you for meeting the age limit mr. ${profileObject[i].firstName} ${profileObject[i].lastName}.`)
        }else if(profileObject[i].sex === 'female'){
            console.log(`Thank you for meeting the age limit ms. ${profileObject[i].firstName} ${profileObject[i].lastName}.`)
        }else if(profileObject[i].sex === undefined){
            console.log(`Thank you for meeting the age limit ${profileObject[i].firstName} ${profileObject[i].lastName}.`)
        }
        
    }else if(profileObject[i].age < 21){
        if(profileObject[i].sex === 'male'){
            console.log(`I'm sorry ${profileObject[i].firstName} ${profileObject[i].lastName} you are not of age.`)
        }else if(profileObject[i].sex === 'female'){
            console.log(`I'm sorry ${profileObject[i].firstName} ${profileObject[i].lastName} you are not of age.`)
        }else if(profileObject[i].sex === undefined){
            console.log(`I'm sorry ${profileObject[i].firstName} ${profileObject[i].lastName} you are not of age.`)
        }
    }
}

//generating random numbers
let randomNumber = Math.random() * 11
randomNumber = Math.floor(randomNumber)
console.log(randomNumber)

//challenge; create an array of random quotes
//use random generation logic to randomly generate a quote to the console.
let quotesArray = [
    'practice makes perfect!',
    'when there\'\s a will there\'\s a way.',
    'stand for something or fall for anything!',
    'dont worry by happy!',
    'no limits!',
    'do something today your future self will thank you for later.'
]

function logRandomQuotes(){
    let randomNumber = Math.random() * quotesArray.length
    randomNumber = Math.floor(randomNumber)
    console.log(quotesArray[randomNumber])
}
logRandomQuotes()

//creating elements with document.createElement
var myList = document.getElementById('my-list')
var newLi = document.createElement('li')
myList.append(newLi)
//myList.prepend
newLi.textContent = 'front end software engineer'

var new_p = document.createElement('p')
document.body.append(new_p)
new_p.textContent ='manipulating the DOM is fun!'


//creating elements in js; innerHTML +=
//creates string html elements on a page.
//good to create single elements.

document.body.innerHTML += "<p id='html-p'>This is a new parahraph</p>"
document.getElementById('html-p').style.textAlign = 'center'//applying style to textAlign property.


//creating elements on a page for-loop + createElement
let languages = [
    {lnaguage: 'html'},
    {language: 'css'},
    {language: 'javaScript'},
    {language: 'react.js'},
]

let newUl = document.getElementById('my-list')

for(let i = 0; i < languages.length; i++){
    newUl.innerHTML += `<li>${languages[i].language}</li>`
}

//Events & Event listeners
var newButton = document.createElement('button')
newButton.textContent = 'Click!'
document.body.append(newButton)

//adding anonymous function on to eventListener.
newButton.addEventListener('click', function(){
    console.log('this event has been fired!')
})


var newEventButton = document.createElement('button')
newEventButton.textContent = 'Click Here As Well!'
document.body.append(newEventButton)


//can create a function then pair with function and eventListener.
function fireEvent(){
    document.body.style.backgroundColor = 'lightGreen'
}
newEventButton.addEventListener('click', fireEvent)


var newestEventButton = document.createElement('button')
newestEventButton.textContent = 'Click Here For More Fun!'
document.body.append(newestEventButton)


function fireNewEvent(){
    document.body.style.color = 'white'
}
//function uses no paranthesis because it will be accessed later.
newestEventButton.addEventListener('click', fireNewEvent)

//access an elements class or id and add event listener and function.
function originalStyle(){
    document.body.style.backgroundColor =  'red'
    document.body.style.color =  'gold'
    newButton.style.backgroundColor = 'green'
    newButton.style.color = 'gold'
    newButton.style.borderStyle = 'none'
    newEventButton.style.backgroundColor = 'green'
    newEventButton.style.color = 'gold'
    newEventButton.style.borderStyle = 'none'
    newestEventButton.style.backgroundColor = 'green'
    newestEventButton.style.color = 'gold'
    newestEventButton.style.borderStyle = 'none'
}
//click changes background color to red & font color to gold
document.querySelector('#heading-1').addEventListener('click', originalStyle)

//removeEventListener(); inverse to addEventListener()
// document.getElementById('heading-1').removeEventListener('click', originalStyle)

// modifying elements; values
// var newElement = document.body.innerHTML += "<input value='input text value'/>"
// console.log(newElement.value)

//SELF STUDY
//create and input box.
// allow input data to be logged into the console.
//allow input data to be printed on the screen with a paragraph.















/*
- variables
- data types
- strings
- short circuiting
- ternary
- conditionals
- switch statements
- functions; accessing global variables/scope
- closures/ partial application
- default parameters
- arrow functions
- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished
- object literals; destructuring, ...object spread
- map object type; .set(), forEach(()=>{}), ...map object spread
- PRACTICE ARRAY METHODS/OPERATIONS -
- map(()=>{})
- filter(()=>{})
- reduce(()=>{})
- some(()=>{}) / every(()=>{})
- find(()=>{})
- forEach(()=>{})
Plus:
- findIndex()
- slice(beginning place, ending place)
- concat()
- includes()
- array destructuring
- array spread operator [...arraySpread]
- Object.keys()
- Object.values()
- Object.entries()
- for-in loop; iterates over object data
- sets
- for-of loop; iterates over new Set data;
sets maintain uniques values; unless different object type.
- for-loop; iterates over an array's contents.
- constructor functions
- classes
- class methods
- prototype.chaining
- extends keyword
- super(); function/method used for child classes inheriting properties
from parent classes.
*/

/*
PRACTICE CLASS METHODS/OPERATIONS
classes;
Classes are a template for creating objects.
They encapsulate data with code to work on that data.
Classes in JS are built on prototypes but also have some syntax and
semantics that are not shared with ES5 classalike semantics.
- sharing methods between parent and children classes.
- how to use 'get' and 'set' keywords on classes.
- .bind() explicitly binds a method(s) to classes within the constructors().
.bind() makes a method refer to a class/value. 
- DOM; Document Object Model.
- what is the DOM?
- Get single and multiple elements
- Create and modify HTML elements
- Dynamically add css styles
- Work with and understand events
//what is the DOM?
//DOM; Document Object Model; document; lives on the window.
/*DOM is an object that represents all of the HTML as objects that can 
be modified by js.*/
/*
- get single element tags containing id from DOM; document.getElementById()
- get multiple elements with matching tags from DOM; document.getElementsByTagName()
- get first single element from DOM id/class; document.querySelector()
- get multiple elements from DOM id/class; document.querySelectorAll()//most superior.
- access a tag and link with forEach(()=>{}), conditionals and .matches('tag type[]'). method.
- creating and modifying html elements; 
- applying class selector to an element with .className = ''

//EVENTS & EVENT LISTENERS

//Events; actions that occur when user interacts with the keyboard, mouse etc.

//Event listeners; tools that watch/listen for when events to occur; 
//can be applied to html elements using functions.


- add events to elements with .addEventListener(()=>{
})
- loop over all of the same events with .forEach(()=>{ and add styling to multiple elements.
    .addEventListener(('fired event', param)=>{
        .style. = ''
    })
})
- peform event actions on elements that are closest()/macthes() a targeted element with;
- Ajax;
- Working with AJAX; asynchronus javaScript;
With Ajax, web applications can send and retrieve data from a server asynchronously 
(in the background) without interfering with the display and behaviour of the existing page.
- AJAX enables a Web page to update just part of a page 
without disrupting what the user is doing.
- non-blocking; can continue operations when others are taking longer to complet.
- ajax allows multiple lines of code to run.
- ajax; some operations will take an unknown amount of time to execute.
- problems with callbacks
- fix callback hell (an abundance of callback functions.); new Promise((resolve, reject)=>{
new Promise(()=>{}); type of ajax constructor function.
})
- call-back functions; A callback is a function passed as an argument to another function
This technique allows a function to call another function.
A callback function can run after another function has finished.
- new Promise(()=>{}); is a constructor function; returns an instance of itself.
promises; contain three different states when created; pending, fulfilled, rejected.
promises; start with the 'pending' state until promise is either 'fulfilled' or 'rejected'.
promises;
- .fetch() method api; used to make an ajax network request to retrieve data from 
REST api architectual code.
CRUD; CRUD is an acronym that comes from the world of computer programming and 
refers to the four functions that are considered necessary to implement a 
persistent storage application: create, read, update and delete.  
- CRUD; v
Create; POST method; creates resource/data.
Rread; GET method; retrieves data from database.
Update; PUT/PATCH methods; updates data.
Delete; DELETE method; allows deletion of data.
- Dead-simple Promises with async-await; 
allows us to avoid writting multiple callback functions
when using the fetch() api/method
- async functions always returns a promise
The async and await keywords enable asynchronous, 
promise-based behavior to be written in a cleaner style, 
avoiding the need to explicitly configure promise chains.
/*
- async await pauses promise code until all requests are resolved;
not using .then() or .catch() or .finally().
*/

/*
- async functions using the fetch() api
used to write cleaner promises; avoids callback hell.
- await; The await expression causes async function execution to pause until a Promise is settled 
(that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
//try keyword runs code black and 'tries' to verify that code contains no errors.
//catch is used to notify user that there is an error when retrieving data.
//can nest a Promise inside of an async function.
// async, await;  pauses promise code until all requests are resolved(no use of catch).
// async functions using the fetch() api.
used to write cleaner promises; avoids callback hell.
use of await(early on)
not using .then() or .catch() or .finally().
// write cleaner promises with async, await 
catch errors on try{} & catch(error){}.
handle errors.
// CREATE, READ, UPDATE, DELETE(CRUD) data while using ftech() api.
//MODULES: Essential Concepts
- Modules; split up code into multiple files while still sharing code.
isolate js functionality when sharing code between files.
- Modules; are just a files.
- sharing code between files; 
- IMPORT; allows us to import functionality from different files/scripts(modules)
- EXPORT; allows us to lable variables and functions outside of a module.
- 
*/


