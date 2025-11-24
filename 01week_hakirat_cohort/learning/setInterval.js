/*The setInterval() method of the Window interface repeatedly calls 
a function or executes a code snippet, with a fixed time delay between
 each call. */
let running  = setInterval(()=>{
    let i = 1
    console.log("Running..........."+i);
    i++; 
},500)

setTimeout(()=>clearInterval(running),10000)

