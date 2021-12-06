const sideInputs=document.querySelectorAll(".side-input")
const hypotenuseButton=document.querySelector("#Calculate-btn")
const showOutput=document.querySelector("#output")
// const showError=document.querySelector(".error")


function calculateSumOfSquares(a,b){
    const sumOfSquar=a*a + b*b //first it maltipale than sum ex:-2*2=4,4*4=16 sum=20
    return(sumOfSquar) //return the sum of value
}


function calculateHypotenuse(){
   const sumOfvalue=calculateSumOfSquares(Number(sideInputs[0].value),Number(sideInputs[1].value))
   const lengthOfNumber=Math.sqrt(sumOfvalue)
   if (lengthOfNumber){
    showOutput.innerText=`Length of Hypotenuse: ${lengthOfNumber}`

   }else{
        showOutput.innerText="Opps! It's not a number!"
   }
}

hypotenuseButton.addEventListener("click",calculateHypotenuse)