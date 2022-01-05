
let nav = document.querySelector("nav");
let closee = document.querySelector(".closee");
let toggle = document.querySelector(".toggle");

toggle.onclick = function(){
    nav.classList.add("open");
};

closee.onclick = function(){
    nav.classList.remove("open");
    // this.parentElement.classList.remove("open")
};


document.onkeyup = function(e){
   if( e.key == "Escape"){
    nav.classList.remove("open");
   }

}
