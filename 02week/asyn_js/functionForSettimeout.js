/*----------------- promisified function -----------------------*/
function myPromisifedFucn(duration){
    // making the object of promise class
    const pObj = new Promise((resolve) => {
        setTimeout(()=>{
            console.log("this is it in the timeout ");
            
            resolve();
        },duration);
    });
    return pObj; // function return 
}
// const ans = myPromisifedFucn(2000);// creating 2 second late 
// console.log("------ (  1   ) --------- this is before ans.then");

// ans.then(()=>{ // now perform the function after ans ka given time 
//     console.log("Timeout is done");
// })
// console.log("-------------(  2  )------- this is  ");

/* Writing a function  that takes n seconds and gives the response  */

function afterTheTime(duration){
    let p = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("------------------------- setTimeout --------------------------"); 
            resolve();
        },duration*1000)
    });
    return p;
}
const ans2 = afterTheTime(5);
afterTheTime().then(console.log("hey their")) 
