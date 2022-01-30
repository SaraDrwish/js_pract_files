
let ser= document.querySelector(".ser");
let gen = document.querySelector(".gen");

gen.onclick = function(){
    let cars = "qwertyuiop';lkjhgfdsazxcvbnm,./][09876543210ZXCVBNMASDFGHJKLPOIUYTREWQ@#%$&*^!";
    let carsnum = 10 ;
    let rand = "";
    for(let i = 0 ; i < carsnum ; i++){

       rand += cars[ Math.floor(Math.random() * cars.length ) ];
    }
    
    ser.innerHTML = rand;

}