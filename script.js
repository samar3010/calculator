const calculatorDisplay=document.querySelector('h1');
const inputBtns=document.querySelectorAll("button");
const clearBtn=document.getElementById('clear-btn');
let firstValue=0;
let operatorValue="";
let awaitingNextValue=false

function sendNumberValue(number){

if(awaitingNextValue){
    calculatorDisplay.textContent=number
    awaitingNextValue=false
}
else{
    const displayValue=calculatorDisplay.textContent
    calculatorDisplay.textContent=displayValue ==="0" ? number :displayValue + number
}
}
const calculate={
    '/':(firstNumber,secondNumber)=>
        firstNumber/secondNumber
   
      ,  
    '*':(firstNumber,secondNumber)=>
        firstNumber*secondNumber
   
       , 
    '-':(firstNumber,secondNumber)=>
        firstNumber-secondNumber
   
      ,  
    '+':(firstNumber,secondNumber)=>
        firstNumber+secondNumber
   
        ,
    '=':(firstNumber,secondNumber)=>
        firstNumber=secondNumber
   
        
}

function useOperator(operator){
    if(operatorValue && awaitingNextValue){
        operatorValue=operator
        console.log(operatorValue)
        return
    }
        const currentvalue=Number(calculatorDisplay.textContent)
        if(!firstValue){
            firstValue=currentvalue
        }else{
            console.log(currentvalue,currentvalue,operatorValue)
            const calculation=calculate[operatorValue]  (firstValue,currentvalue)
            console.log(calculation,"calc")
            firstValue=calculation
            calculatorDisplay.textContent=calculation
        }
        awaitingNextValue=true
        operatorValue=operator
        console.log("fvalue",firstValue)
        console.log("op",operator)
    
}

function addDicemal(){
    if(awaitingNextValue) return
    if(!calculatorDisplay.textContent.includes('.')){

        calculatorDisplay.textContent=`${calculatorDisplay.textContent}.`
    
    }
}

inputBtns.forEach(inputBtn=>{
    if(inputBtn.classList.length===0){
        inputBtn.addEventListener('click',()=> sendNumberValue(inputBtn.value))
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', ()=> useOperator(inputBtn.value) )
}else if(
    inputBtn.classList.contains('desimal')){
        inputBtn.addEventListener('click', ()=> addDicemal() )
    }
})


function resetAll(){
    calculatorDisplay.textContent=displayValue ="0" 
    firstValue=0;
    operatorValue="";
    awaitingNextValue=false
}
clearBtn.addEventListener('click', resetAll)