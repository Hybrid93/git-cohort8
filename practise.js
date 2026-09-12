let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);

let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday);


let isLoggedIn = true;

console.log(!isLoggedIn);



function ageCheck(age){
    if(age<= 18){
        return "please GET OUT ... YOU ARE UNDERAGED"
       }else{
        return "Buy one bottle for me egbon!!"
       }
}

let estherAge = ageCheck(30)
console.log(estherAge)

function luckyNumber(num){
    if(num === 4){
        return "Congratulations"
    }else{
        return "try again"
    }
    
}
console.log(luckyNumber(53))
//if score is 70-100 return A,   50-60 return B then 0-49 return F

let totalscore = 100
function gradingSystem(score){
    if (score >= 70) {
        return "A"
    }else if(score >= 50 && score <= 69) {
        return "B"
    }else{
        return "F"
    }
}
console.log(gradingSystem(99))