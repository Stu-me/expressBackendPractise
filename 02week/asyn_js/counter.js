// let counter = 0;
// setInterval(()=>{
//      counter++;
//     console.log(counter);
// },1000)
let counter = 0;

function incrementCounter() {
  console.log("Current Value:", counter);
  counter++;

  // The counter will keep increasing to infinte. So maintain an endpoint to finish execution.
  if (counter <= 10) {
    // Use the setTimeout() function for the next second.
    setTimeout(incrementCounter, 1000);
  }
}

// Start the initial timeout.
incrementCounter();