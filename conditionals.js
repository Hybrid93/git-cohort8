// if/else if for true and else for false
let age =16
if(age >= 18){
    console.log('you can vote')
} else{
    console.log('you can not vote')
}

// if else have more options secondary conditions
    let gender = "non-binary"

if(gender === 'female'){
    console.log("you are a female , use the lady's rest room")
}else if(gender === "non-binary"){
    console.log("use the non-binary room")
}else if(gender === "trans"){
    console.log("use the trans room")
}

//loops= start from an initialized positon and run for a specified number of times which increases or decreases per loop
//for(start; condition ; increment)

for(let i=0; i <10; i+=2){
    console.log(i)
}

let arrOfNames = ["james", "jane", "jim", "jess", "joe", "jasmine"]
console.log(arrOfNames)
for(let names = 0; names <arrOfNames.length; names++){
    console.log("TECHCRUSH" + arrOfNames[names])
}

//logical operator= to combine two conditions toghether
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID)
console.log(isAdult || hasID)
console.log(!isAdult)

for(let x=0; x<=36; x++){
    console.log(x * 2)
}
for(let y=0; y<=12; y++){
    console.log(y * 3)
}
//while loop will continue aslong as the conditon is true
//while(condition){
    //code to repeat
//}
let loginAttempts = 0
while(loginAttempts <= 3){
    console.log(`attempt number ${loginAttempts}`)
    loginAttempts++
}
let scores = [20,12, 25, 15]
for (let newscore = 0; newscore < scores.length; newscore++) {
    console.log(scores[newscore] + 20)
    
} 


