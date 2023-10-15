const container = document.querySelector('.container');
const start =  document.getElementById('start');
const end = document.getElementById('end');
const clear = document.getElementById('clear');
let startInterval;
let count=0;


function getRandomNumber() {
    const random = Math.random();
    
    const min = 97;
    const max = 122;
    const scaledRandom = Math.floor(min + (random * (max - min + 1)));
    
    return scaledRandom;
  }
 



start.addEventListener('click',(e)=>{
            
    clearInterval(startInterval);

    if(count>1036) return;
     
     function startTimer() {

        if(count===1036) clearInterval(startInterval);
        
        let newText = container.textContent+String.fromCharCode(getRandomNumber());
        container.textContent = newText;
        count++;
     }
     
    startInterval =  setInterval(startTimer, 1);
  
 })   

 end.addEventListener('click',(e)=>{
     clearInterval(startInterval);
   
 })

 clear.addEventListener('click',(e)=>{

    container.textContent = "";
    count=0;
 })

 