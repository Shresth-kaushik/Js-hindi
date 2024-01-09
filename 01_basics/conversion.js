// Conversion from the one data type to other data type 
// let score = null
// let score = true
let score = undefined 
// let score = "33abc" ->  not convertable NaN as output 

console.log(typeof score);
console.log(typeof(score))

// Conversion step
let scoreToNumber = Number(score)
console.log(scoreToNumber);

// Convert to boolean 
let loggedIn = 1

let isloggedIn = Boolean(loggedIn)
console.log(isloggedIn)

let numb = 32
let stringNum = String(numb)

console.log(stringNum)
console.log(typeof(stringNum))
 
