// singleton
// Object.create

// object literals: Shown below

// Using the symbol as the key in the object 
const mySym = Symbol("key1")

// Creating the object
const JsUser = {
    name: "Harsh Narwal",
    "full name": "Amit kumar",
    [mySym]: "mykey1", // Fixed method Remind the syntax 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Excessing method to excess the values of the objects .

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// Important :::--> Unoique way to excess the symbol 
// console.log(JsUser[mySym])

JsUser.email = "harsh@gmail.com"
// Object.freeze(JsUser) // After the freeze operation further changes can not displayed to the object 
JsUser.email = "narwal@gmail.com"
// console.log(JsUser);

// Function are added to the object with the key  = Greeting and greetingTwo .
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser)
console.log(typeof JsUser.greeting)

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());