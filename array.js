let students = ["sara", "samad", "godwin", "moh"] 
console.log(students[3])
console.log(students.length)
students[2] = "hybrid"
console.log(students)

//push will add elements to the last of an array
students.push("Ada")
console.log(students)

//unshift will add at the begining of an array
students.unshift("Lukman")
console.log(students)


//pop will remove the last element while shift will remove the first element 
students.pop()
    console.log(students)
    students.shift()
    console.log(students)


    //include(), indexof(index position in the array)
    console.log(students.includes("sara"))
    console.log(students.indexOf("sara"))

/**reverse(flip array in opposite direction )
 * sort(in alphabetical order)
 * slice(extract some part of an array)
 * splice
 * 
 */
    students.reverse()
    console.log("this is reversed:" ,students)
    students.sort()
    console.log("this is sorted",students)

    console.log("this is slice",students.slice(1, 3))
    console.log("this is splice",students.splice(0, 3))


    //higher order array methods
    //map, filter, reduce, forEach, find, findindex, some, every,
    //msp methods
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const doubledNumbers = numbers.map((num) => num * 2)
    console.log(doubledNumbers)

    const marketList = ["rice", "beans", "garri", "yam", "plantain"]
    const addedPrefix = marketList.map((item) => "I will buy: " + item)
    console.log(addedPrefix)

    //filter methods
    const evenNumbers = numbers.filter((num) => num % 2 === 0)
    console.log(evenNumbers)

    const complexion = ["dark", "fair", "medium", "dark", "fair", "medium", "choco"]
    const darkComplexion = complexion.filter((item) => item === "choco")
    console.log(darkComplexion)

    //find, find index method
    const findFirstDark = complexion.find((item) => item === "white")
    console.log(findFirstDark)

    const findIndexOfDark = complexion.findIndex((item) => item === "dar")
    console.log(findIndexOfDark)

    //reduce
    const nums = [700, 300, 500, 1000, 2000]
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    console.log(sum)

    const multiply = nums.reduce((acc, cur) => acc * cur, 1)
    console.log(multiply)