//Function is a line of code you write once and can run as many times as possible
//**why use it
// reusability
// organisation
// easier to fix
// readability */
function greetings (){
    console.log("HELLO WORLD")
}
greetings()

// functions with parameters
function welcome(name){
    console.log(`Welcome to class MR/MISS/MRS ${name}`)
}
welcome("Muhammed")



function add (){
    let x =4;
    let y =6;
    return x + y
}
console.log(add())

function addition (x, y){
    return x + y
}
console.log(addition(9, 10))


function ageCheck(age){
    return age >=18
}
let estherAge = ageCheck(14)
console.log(estherAge)

/**Scope determine where in your code a variable can be seen and used
 * 
 * global scope= a variable decleared outside a function
 * local scope =is a variable decleared inside a function
 */
//global
let score = 24
function gradingSystem(){
    if (score>= 50){
        return "PASSED"
    }else{
        return "FAILED!!!!!!!!!"
    }
}
console.log(score)

function deliveryFee(){

    let fee = 5000
    return "fee"
}


//name function and arrow(modern) funtion
const minus = (num) =>{
    return num - 50
}
let result = minus(75)


//reduce
const nums = [700 ,300 , 500 , 1000 , 2000]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

const multiply = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
console.log(multiply)