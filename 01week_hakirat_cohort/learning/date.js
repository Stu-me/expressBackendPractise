// date is a built in object in js we just have to create a instance out of it to use all
//       - function in the system

let now = new Date();
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMinutes());
console.log("now the time is for "+now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.toTimeString());

setInterval(()=>{
    const curr = new Date();// it will update inside the func outside its a waste 
     console.log(
        curr.getHours(),":",
        curr.getMinutes(),":",
        curr.getSeconds(),":",
        curr.getMilliseconds())
},1000)

