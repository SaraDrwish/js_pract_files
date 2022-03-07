let  list = document.querySelectorAll(".list li");
// imp ////// convert to array using ARRAY FROM /////
let listarr =  Array.from(list);

let cont = document.querySelectorAll(".cont > div");
let contarry = Array.from(cont);

// console.log(listarr);

 listarr.forEach((el) =>{

    el.addEventListener( "click" , function(e){

         listarr.forEach( (elm) =>{
              elm.classList.remove("active");
         } );

        e.currentTarget.classList.add("active");

        contarry.forEach( (divelmnt) =>{
            divelmnt.style.display = "none";
       } );
        
       document.querySelector(e.currentTarget.dataset.tab).style.display = "block";

    } );


 });

 
