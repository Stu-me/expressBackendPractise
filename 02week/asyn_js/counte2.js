// create a counter in jsScript
// setInterval(()=>{
//     for(let i=0;i<10;i++){
//         console.log(i+1);
//     }
// },5000)
// let i = 0;
// setTimeout(()=>{
//     console.log(i);
//     i++;
// },1000)
// let cnt = 0;
// setInterval(()=>{
//     console.log(cnt);
//     cnt++;
// },1000)
// now writing a function without using set interval

function incrCnt(cnt){
    console.log("The current value is :",cnt);
    if(cnt<20){
        setTimeout(()=> incrCnt(cnt+1),1000); // recursion at its best
    }
}
incrCnt(3)