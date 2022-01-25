

let hexColor = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let fullColor = [];

// Math.floor(hexColor.random);
// Math.random()*hexColor;
// console.log(hexColor[ Math.floor( Math.random()*hexColor.length)] );
// console.log(fullColor);

for(let i=1 ;i<=6 ; i++){

  fullColor.push( hexColor[ Math.floor( Math.random()*hexColor.length)] );

}


let fcolor = `#${ fullColor.join("")}`;

document.body.append(fcolor);
document.body.style.background = fcolor;

