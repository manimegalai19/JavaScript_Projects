let day=document.querySelector("#day");
let hour=document.querySelector("#hour");
let minutes=document.querySelector("#minute");
let seconds=document.querySelector("#seconds");

const currentyear=new Date().getFullYear();
console.log(currentyear);
const newyearDate=new Date(`January 1 ${currentyear+1} 00:00:00`);
console.log(newyearDate);

function countdown(){
    const currentDate=new Date();
    const diff=newyearDate-currentDate;
    console.log(diff);
//Days are calculated in Milliseconds in JavaScript
  const d=Math.floor(diff/1000/60/60/24);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
  const ms=Math.floor(diff%1000);

  day.innerHTML=d<10?"0"+d:d;
  hour.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;
}
setInterval(countdown,1000);