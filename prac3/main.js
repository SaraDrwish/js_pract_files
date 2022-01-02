

//the end of the year 
// let year = new Date();
// 1000 millisecond == 1 sec
// بيجيب الوقت من يوم بداية التاريخ لحد دلوقت ولول عملت ريفرش هيتغير عشان بيحسب الوقت الي عدى 
// year / 60  to get mins
// year / 60/ 60 / 24 


// لو حددت حوا الديت يوم معين مش هيتغير 

let years = new Date("Dec 30 , 2021 22:22:22").getTime();

console.log(years);

let counter = setInterval(()=>{

let dateNow = new Date().getTime();
// console.log(dateNow);

//find the diff between now and that time 
let dateDiff = years - dateNow ;

//git time units مع التقريب بماث فلوور للاقل 

// let days = Math.floor(dateDiff/1000 /60 / 60 / 24);
let days = Math.floor(dateDiff / (1000* 60 * 60 * 24) );

let horse =Math.floor( dateDiff % (1000* 60 * 60 * 24) / (1000 * 60* 60));

let mints = Math.floor( dateDiff % (1000* 60 * 60 ) / (1000 * 60));

let secnds = Math.floor( dateDiff % (1000* 60 ) / (1000 ));



document.querySelector(".days").innerHTML = days;
document.querySelector(".horse").innerHTML = horse ; 
document.querySelector(".mints").innerHTML = mints ; 
document.querySelector(".secnds").innerHTML = secnds  < 10 ? `0${secnds}` : secnds ; 


if(dateDiff < 0 ){
    clearInterval(counter)
}



} , 1000) ;