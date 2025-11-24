/* basic operation on the numbers  */
// int ,float ,double,long long 
// parseInt;
// parseFloat
// number() - all three ignores white spaces 

// parseInt - Takes string and converts it into the int 

console.log(parseInt(""));// nan
console.log(parseInt("23234",10)); // give the num
console.log(parseInt("23.5457")); // gives the only int part
console.log(parseInt("23aa",10)); // gives int but the moment any other type comes stops
console.log(parseInt("aa23")); // nan as start mein hii other type mil gya
console.log(parseInt("aaaa"));
console.log(parseInt("  23"));
console.log(parseInt(" ")); //nan
/* now its also helpful to convert to other radix or say number system */
let temp = parseInt("111",2);
console.log(temp);
console.log(parseInt("111",8)); 
console.log(parseInt("111",10)); // fatherly tip always pass radix to avoid wierd results

// parseFloat - It converts the string to the float  like parseInt did in the case of string 
// parseFloat is always 10 based

console.log("---------------- parseFloat--------------");

console.log(parseFloat("111"));
console.log(parseFloat("111a.45",10));// always 10 placed valued 
console.log(parseFloat("111.453453",10));
console.log(parseFloat("aa.2323",10));
console.log(parseFloat("111",8));
console.log(parseFloat("111.3435",2));
console.log(parseFloat("111.23",8));
console.log(parseFloat("  111",16));


console.log("------------------ number() ------------ ");
// numbers()
// it converts anything to the number
// number() - It is more stricter than the parseInt and parseFloat -- it need whole string to be number
console.log(Number("3456"));
console.log(Number("oh oh jane jana"));
console.log(Number("3456.fsdf"));
console.log(Number("3456.55788475"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(4785403857));
console.log(Number(  4785403857));
console.log(Number("  4785403857")); // ignores white spaces 
console.log(Number(  "4785403857"));

