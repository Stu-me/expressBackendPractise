/* In this file we will try to use commonly used string functions  */
/* Functions we are  common are on String are: 
length,
indexOf(),
lastIndexOf(),
slice(),
substring(),
replace(),
split(),
trim(),
toUpperCase(),
toLowerCase(),
*/  

// to create  function in js we have to write keyword function because it is quite readable
const str = "MY name is sundram kumar";
const str2 = " He is learning Javascript cause that what champions do ";
const str3 = "We are here to help and keep in right track to get best out of him";

// now string operations
// lenght()

console.log(" \n we are printing the lenghts of the above three strings : " 
            + str.length +" "+str2.length + " "+str3.length);


// now to get index of  a particular char , counts from 0 indexed , give the first occurence, -1 for not found
const marks = "0123 34565633";
console.log("\nfirst index is "+marks.indexOf(" ")); // gives first index

// lastindexof
console.log("\nlast index is "+marks.lastIndexOf(33));

// slice  - breaks in substring doesnt take the last index unlike splice
const newStr = "This is to inform the youth of the markham : you need to work hard and be ready to sacrifice";
let temp = newStr.indexOf(":");
console.log("\n"+newStr.slice(temp+1));

// subString  -- old school // yeah man this js community have some crazy dudes 

const sbstring = "javascript-is quite flexible";
// skeleton - subString(start,end) end index is not included , doesnt change the original value 

console.log(sbstring.substring(5,19));
console.log(sbstring.substring(-5)); // -ve numbers are treated as zeroes and if end not mentioned print all
console.log(sbstring.substring(-5,5)); // become 0 to 5
console.log(sbstring.substring(10,5));// takes the min values as start and max as end 

// for js its relatively older but c++ it was quite new

// substr - forget this shit maybe removed in future just go with slice() best  and flexible

// replace() - changes the string and give new one with the changed value

const strexp = "\n name that dude is goated he works around 16hrs a day and that too hyperfocused , name is a great dude to have in the team";
let newexp = strexp.replace("name","sundram");
let newexp2 = strexp.replaceAll("name","sundram");
console.log(newexp);
console.log(newexp2);

// split() -
let strA = "the flow state improves speed but like 100% so we are doubling what i do normally";
console.log(strA.split("e"));
console.log(strA.split(" ").join("---")); // oldway replace all faster and bit of cool to know
console.log(["we","the","people","of","india"].join(' '));
 

// toUpperCase  - converts string into uppercase 

console.log("\n"+strA.toUpperCase());

// toLowerCase - converts to lower
console.log("\n"+ "KITNA STRING VARIABLE 34 BNAOO".toLowerCase());













