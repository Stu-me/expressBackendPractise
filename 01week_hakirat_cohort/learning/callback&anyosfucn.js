// In js the function are first class citizen (i.e like they are treated like  primitive datatype)
// they can have thier object(i mean they can store values in the name of thier like any other primitve datatype)
// they can be passed to any other function or their values can be changed or dynamically values could be pushed


/* When we pass the function inside another function then that passed function is called callback */

function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}

function sumOfSquares(a,b){
    return square(a)+square(b);
}
function sumofCubes(a,b){
    return cube(a)+cube(b);
}

console.log(sumOfSquares(1,9));
console.log(sumofCubes(1,3));
// now this is the a very simple program with no call backs all languages use this approch
// even in cpp this is the way but js is built different, here the almost same format are being repeated
// again and again , so js has the power of CALLBACK

function sumofSomething(a,b,fn){ // here fn is passed as function so callback 
    return fn(a)+fn(b);
}
console.log(sumofSomething(1,9,square)); // here we used the power of callback by making one function 
// and giving function according to which the values will be treated

function random(a){
    return Math.random()+a;
}
console.log(random(6));

// now no need to declare a new function just passed the function 

console.log(sumofSomething(4,5,random));


/**********  anonymous functions  **********/

// function having no name is called anonymous functions

function sumOfNum(a,b,fn){
    return fn(a)+fn(b);
}
// now using anonymous function eventhough we can name we avoid it as it useless and less readable
let result = sumOfNum(4,7,(a) => a*a*a)// here is the anonymous function 
console.log(result);

// other eg
 let newFucn = function(){ // look here the function created has no name rather its stored in the 
    // variable
    console.log("there you go ");
    
 }

