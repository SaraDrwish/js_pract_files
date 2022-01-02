let num = document.querySelectorAll(".nums .num");
let sec_2 = document.querySelector(".sec_2");
let stop = false ;

window.onscroll= function(){

    if(window.scrollY >= sec_2.offsetTop){ //عشان لما يعمل سكرول يشغل

        if (!stop ) 
        {
        
            num.forEach((n) => startCountNums(n));
        
        }
        stop = true;
    }

}


function startCountNums(el){
    let goal = el.dataset.goal;
    let count = setInterval(function(){
        el.textContent++ 

        if(el.textContent == goal){
            clearInterval(count);
        }

    } , 1000/goal) //لازن نقسمهم ع الوقت عشان يقفوا في نفس الوقت سوا
        

}

startCountNums(document.querySelectorAll(".nums .num"));