// Q2- Calculate the time it takes between a setTimeout call and the inner function actually running
// Find the start time right before calling setTimeout() using Date.now(), which returns the current timestamp in milliseconds.
// Inside the callback function passed to setTimeout(), find the end time with Date.now() again.
// Subtract the start time from the end time to get the number of milliseconds between when setTimeout() was called and when the callback actually ran.
// This measures how long the delay of setTimeout() actually was.
const start1 = Date.now();
console.log(start1,"\n");

setTimeout(()=>{
const end = Date.now();
console.log(end,"\n");
console.log(end-start1,"\n");
},5000)
console.log("-------------- another --------------");

const start = Date.now();
setTimeout(() => {
  const end = Date.now();
  const timeTaken = end - start;
  console.log(`Time taken: ${timeTaken}ms`);
}, 1000);

// Q3- Create a terminal clock (HH:MM:SS)
// We are using setInterval() here instead of setTimeout() to repeatedly call
// the displayClock() function at an interval of 1 second, not just once after 1 second.

setInterval(()=>{
    let time = new Date();
   // console.clear();
    console.log(time.getHours(),":",time.getMinutes(),":",time.getSeconds());
    
},1000)