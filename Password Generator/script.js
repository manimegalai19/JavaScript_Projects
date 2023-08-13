const output=document.querySelector('#outputTag');
const copybtn=document.querySelector("#copy");
const passwordLengthElement=document.querySelector('#length');
const numbersbox=document.querySelector('#numbers');
const capitalbox=document.querySelector('#Capital');
const smallbox=document.querySelector('#Small');
const specialbox=document.querySelector('#Special');
const frm=document.querySelector('#frm');

copybtn.addEventListener('click',async ()=>{
   const pass=output.value;
   if(pass){
    await navigator.clipboard.writeText(pass);
    alert("Your Strong Password is Copied");
   }
   else{
    alert("There is nothing to Copy");
   }
})


function capital(){
    //Actually String
    //Like C++, We can access with index
    const str1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return str1[Math.floor(Math.random()*str1.length)]
}
function small(){
    const str2="abcdefghijklmnopqrstuvwxyz";
    return str2[Math.floor(Math.random()*str2.length)]
}
function numbers(){
    const str3="0123456789";
    let num=str3[Math.floor(Math.random()*str3.length)];
    console.log(num);
    return num;
}
function special(){
    const arr="~!@#$%^&*()_+|}{<>*./";
    return arr[Math.floor(Math.random()*arr.length)];    
}

const functionArray=[
    {
        element:numbersbox,
        fun:numbers
    },
    {
        element:capitalbox,
        fun:capital
    },
    {
        element:smallbox,
        fun:small
    },
    {
        element:specialbox,
        fun:special
    }
];

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const limit=passwordLengthElement.value;
  
  
    let generatedPassword="";
  
    const funArray=functionArray.filter(({element})=>element.checked);
    console.log(funArray);
  
    
  for(i=0;i<limit;i++){
    const index=Math.floor(Math.random()*funArray.length);
    const letter=funArray[index].fun();
    generatedPassword+=letter;//5$
  }
   output.value=generatedPassword;
  });



