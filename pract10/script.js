
let filterlist = document.querySelectorAll(".filtetTop ul li");  // alllllllllllllllllll foreach must be like thisss
let img = Array.from(document.images);
// document.querySelectorAll(".filterpic img");

//lli.forEach( (li)=> {   })

  filterlist.forEach((item)=> {

    item.addEventListener("click" ,  removmain ) ;
    item.addEventListener("click" ,  managimgs );

     });

     function removmain() {

        filterlist.forEach((item) => {

            item.classList.remove("main");
            this.classList.add("main");

        });
     }

     function managimgs(){

        img.forEach( (mg)=>{
            mg.style.display = "none";
        } );

        document.querySelectorAll(this.dataset.type).forEach( (d)=>{
            d.style.display = "block";
        } )


     }