/* In this file we will learn some basic functions on array so that we jump on project with basic ammunation */
/* 
🔹 Important Array Methods (mutation vs. non-mutation)
Mutating Methods (change original array):

push() → add at end

pop() → remove last

shift() → remove first

unshift() → add at start

splice(start, deleteCount, ...items) → remove/insert in middle

sort() → sorts array as strings by default (dangerous if you don’t pass comparator).

reverse() → reverses in place

Non-Mutating Methods (return new array, original intact):

slice(start, end) → copies part of array

concat() → merges arrays

map() → transforms items

filter() → keeps items that satisfy condition

reduce() → accumulates to single value

flat(depth) → flattens nested arrays

join(separator) → joins elements into string

*/
/* 
functions : 
   push(),
   pop(),
   shift(),
   unshift(),
   splice(), 
   slice(),
   concat(), 
   forEach(), 
   map(), 
   filter(), 
   reduce(), 
   find(), 
   sort()
*/
// declaration
// const arr  = [] that what a array looks like in js
const trialArr = [23,"sundram",null,true,34.45] //  can store any datatype , array , functions
for(let i=0;i<trialArr.length;i++){
    console.log(trialArr[i]);
}
const arr = [1,3,3,4,5,6,7];
console.log(arr.length);
arr[7] = "exp"; // index 7
console.log(arr.length);
arr[10] = "sus"; 
arr.push('sus');
console.log("----------- arr -------------");

console.log(arr.length);
console.log(arr);
 // so array wont throw error but will keep the space undefined
const originalArr = [1,2,3,4,5,6,7]
originalArr.shift();
console.log(originalArr);
originalArr.unshift("lets go");
console.log(originalArr);


// splice 
console.log("---------------- splice ---------------------");

console.log(originalArr.splice(2,1));
console.log(originalArr);


// slice 
console.log("------------ slice -----------");
// top coders use it even for copy rather then using loop
let newly = [...originalArr]; //[1,2,3,4,5,6,7] 
newly = [1,2,3,4,5,6,7,8,9,0]
//       0,1,2,3,4,5,6,7,8,9
//   -8,-7,-6,-5,-4,-3,-2,-1
console.log(newly);
console.log(newly.slice(0,3)) // doesnt take the last index
console.log(newly.slice(2,5))
console.log(newly.slice(4,2)) // not possible so return empty array
console.log(newly.slice(-1,1)) // not possible if using negative index then give movement in negative
console.log(newly.slice(-5,3)) // nothing between 4 and 5 
console.log(newly.slice(-5,-3)) // from reverse count from -1
console.log(newly.slice(-3,-5)) // empty cause moving from backwatd -3 is already gone to reach -5 not possible now to go back
console.log(newly.slice(3,-3)) // yeah worked if  in the range -ve and postive can work until they overpass


console.log("---------- concat() ------------");
let a = [4,5,6];
let b= [1,2,3];
// doesnt change original array return a new array  = arr.concat(arr2)
console.log(a.concat(b));
console.log(a);
console.log(a.concat([1,2,3,4,5,6]));
console.log(a.concat(1,2,3,4,5,6));
console.log(a.concat([1,2,[2,3,4]]));

console.log("----------- flat ------------");
let aa =[1,2,3,[4,5,[6,7,[8,9]]]]
console.log(aa.flat(2));

console.log("----------- forEach ---------");
aa = [1,2,3,4,5,6]
aa.forEach((val,indx,arr)=>{
    console.log("val is "+val);
    
    console.log("val + 5 is "+val+5);
    
})


console.log("----------------- map -------------------");
 
// map is an array method in js (not Map data structure)
//It loops through every element in an array, applies a function to it, 
// and returns a new array with the results. Doesnt changes the original array unlike forEach
let arrMap = [1,2,3,4,5,6,7];
let newArrMap = arrMap.map(val=>val+45);
console.log(newArrMap);

// nothing but changing all the values,better than foreach as it alter the original array

console.log("------------ filter --------------");
// filter 
let oddNum = arrMap.filter((n) => n%2 === 1);
console.log(oddNum);
let classStu = [
    {stuName : "amit",    marks:88,gender:"male",Target : "aeronautical engineer"},
    {stuName : "vandhana",marks:98,gender:"female",Target : "computer engineer"},
    {stuName : "Sundram",marks:95,gender:"male",Target : "Ai enterpreneur"},
    {stuName : "Ajit",marks:94,gender:"male",Target : "computer engineer"},
    {stuName : "ranki",marks:98,gender:"male",Target : "Ai engineer"},
    {stuName : "sourav",marks:88,gender:"male",Target : "enterpreneur"},
]// array with objects as the element 

let filtered = classStu.filter(s=>s.marks>=90 && s.Target ==="computer engineer");
console.log(filtered);

console.log("--------------------- reduce -----------------");
// reduce - it accumualtes all the value in one either sum , product ,string etc
let arr_01 = [1,2,3,4,5,6,7,8,9,10];
let arr_result = arr_01.reduce((acc,val) => acc+val); // acc stroes the values val is curr value
                                                         // 0 is the initial values for acc 

console.log(arr_result);


console.log("--------------- find -----------");

console.log(arr_01.find(num =>num = num*2));

console.log("------------- sort -------------");
// sorting here is bit of crazy cause its too flexible so i have to be careful
let arr_result_02 = arr_01.sort((a,b)=> a-b); // if a-b is -ve so a is smaller and vice - vers
console.log(arr_result_02);


