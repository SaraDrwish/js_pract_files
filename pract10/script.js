
let filterlist = document.querySelector(".filtetTop ul li");
let img = Array.from(document.images);
// document.querySelectorAll(".filterpic img");

//lli.forEach( (li)=> {   })

 filterlist.forEach( (item)=> {

         item.addEventListener("click", function removmain() {
             filterlist.forEach((item) => {

                 item.classList.remove("main");
                 this.classList.add("main");

             });
         });

     } );