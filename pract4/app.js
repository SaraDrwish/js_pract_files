let counter = document.querySelector(".counter");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
// let textBox = document.querySelector(".textBox");

let maxLength = input.getAttribute("maxlength");

counter.innerHTML = maxLength;

input.oninput = function(){
   
    counter.innerHTML = maxLength - this.value.length;
    counter.innerHTML == 0 ? counter.classList.add("zero") : counter.classList.remove("zero") ; 

    //setTheprogress

   progress.style.width = ` ${ (this.value.length*100 ) / maxLength }% ` ; 

}