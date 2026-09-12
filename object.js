const obj = {
    name: "SHUAIB LUKMAN MUHAMMED",
    age: "25",
    department: "Computer Science",
    gender: "Male"
};
console.log(obj)

let phone = {
    brand: "Samsung",
    model: "Galaxy S22",
    Price: 400000
};

phone.color ="black";
console.log(phone);

let student = {
    name: "Charles",
    regNo: "20L2/0074",
    course: "Javascript",
    year: 2025,
    friends : ["John", "Jane", "Doe"],
}
console.log(student)

student.gender = "Male"
console.log(student)
student.course = "Node.js"
console.log(student)
delete student.year
console.log(student)

let employee = {
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    city: "Lagos",
    salary: 50000
}
let hisName = employee.name;
let hisRole = employee.position;
let hisSalary = employee.salary;
let hisCity = employee.city;

const { name:userName, position:job, salary, city } = employee;
let DNA = {
    gender : "Male",
    complexion : "Dark"
}

let offSpring = {
    ...DNA,
    name : "SHUAIB LUKMAN MUHAMMED",
    age : 30
}
console.log(offSpring);

console.log(Object.keys(offSpring));
console.log(Object.values(offSpring));
console.log(Object.entries(offSpring));