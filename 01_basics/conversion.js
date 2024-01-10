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
 
// Important to be noted 
// Working of the equality check  operator == is different with comprasion operator > , < , >= ...

console.log(null > 0)
console.log(null==0)
console.log(null >= 0) // -> In this case the null is converted to zero , ==> Gives the result true.


console.log("2" + 1)
console.log(1 + "2")

// First additio then string conc.
console.log(1+3+"5")

// String main convert hojayein ge then string conc.
console.log("5" + 1+3)


// Strict check (===). check for the data type also 

console.log("2" == 2) // true :-> conversion took place
console.log("2" === 2 )// false 

