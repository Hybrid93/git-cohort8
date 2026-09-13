const hisName = "LukMan"


console.log(hisName.toLowerCase()); //lukman
console.log(hisName.toUpperCase()); //LUKMAN

function lowerMe (value) {
    return value.toLowerCase();
}
console.log(lowerMe(hisName)); //lukman

function upperMe (value) {
    return value.toUpperCase();
}
console.log(upperMe(hisName)); //LUKMAN


const trimExample = "   Hello World!   ";
console.log(trimExample.trim()); //Hello World!
console.log(trimExample.trimStart()); //Hello World!
console.log(trimExample.trimEnd()); //   Hello World!


let filename = "report_final_2024.pdf"

console.log(filename.startsWith("report")); //true
console.log(filename.startsWith("draft")); //false
console.log(filename.endsWith(".pdf")); //true
console.log(filename.endsWith(".docx")); //false