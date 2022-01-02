let section = document.querySelector(".sec3");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function(){
  if(window.scrollY >= section.offsetTop + 1 ){
    // spans.forEach( (span) => {
    //     span.style.width = span.dataset.width;
    //   })
    spans.forEach(function(span) 
    {
        span.style.width = span.dataset.width;
    }
    
    );  //end foreach
  }

}