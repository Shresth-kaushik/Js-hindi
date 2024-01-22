// In callback there is problem called callback hell..

function getData(data , nextdata){
    // (callback , time delay ) 

    setTimeout(()=>{
        console.log("Data is ", data)
        if(nextdata){
            nextdata();}
    },4000)
}

// callback hell -> nested callback forming the pyramid structure 
getData(1, ()=>{ // callback 
    console.log("Getting the next data... ");
    getData(2,()=>{
        console.log("Getting the next data.. ");
        getData(3,()=>{
            console.log("Getting the next data.. ");
        });
    });
}); // (data ,callback pass karte hain function to excess the next data) 

// After the time delay of 4sec data is printed 


// To solve the callback hell -> We use the 'promises'

/*

In JavaScript, a callback is a function that is passed as an argument to another function and is executed after the completion of some asynchronous operation. Callbacks are commonly used in scenarios such as handling asynchronous tasks like reading files, making API requests, or handling events.



/ Example function with a callback
function fetchData(callback) {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function() {
    const data = "This is the fetched data";
    // Call the callback function with the fetched data
    callback(data);
  }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
}

// Define a callback function
function handleData(data) {
  console.log("Handling data:", data);
}

// Call the function with the callback
fetchData(handleData);
In this example, the fetchData function takes a callback function (handleData) as an argument. Inside fetchData, there is a simulated asynchronous operation using setTimeout, and once the operation is complete, it calls the provided callback function with the fetched data.

Callbacks are fundamental in JavaScript, especially when dealing with asynchronous code. However, as the complexity of your code grows, using callbacks can lead to a phenomenon known as "callback hell" or "pyramid of doom." To address this, developers often use other patterns like Promises or async/await syntax in modern JavaScript.

*/