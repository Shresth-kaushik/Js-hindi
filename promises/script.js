/*
Promise chaining is a technique in JavaScript that allows you to chain multiple asynchronous operations together using Promises. This is particularly useful when you have a sequence of asynchronous tasks that depend on the results of each other. Promise chaining makes the code more readable and avoids the callback hell.
*/

// Function that returns a Promise
function asyncTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 1 completed");
        resolve("Result from Async Task 1");
      }, 1000);
    });
  }
  
  // Function that returns another Promise
  function asyncTask2(resultFromTask1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 2 completed");
        resolve(`Result from Async Task 2 using ${resultFromTask1}`);
      }, 1000);
    });
  }
  
  // Function that returns another Promise
  function asyncTask3(resultFromTask2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 3 completed");
        resolve(`Result from Async Task 3 using ${resultFromTask2}`);
      }, 1000);
    });
  }
  
  // Promise chaining
  asyncTask1()
    .then(result1 => asyncTask2(result1))
    .then(result2 => asyncTask3(result2))
    .then(finalResult => {
      console.log("Final result:", finalResult);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  



    /*
     this example, asyncTask1, asyncTask2, and asyncTask3 are functions that return Promises. The then method is used to chain these Promises together. Each then block receives the result of the previous Promise and returns a new Promise.

    This way, you can create a sequence of asynchronous tasks that execute one after the other, and the final result is handled in the last then block. The catch block is used to handle errors at any stage in the chain.
    */
