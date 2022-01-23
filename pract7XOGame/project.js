let trun = "x";
let title = document.querySelector(".title");

let squers= [];

function ends(num1,num2,num3){
    title.innerHTML=  `${squers[num1]} winner `;
    document.getElementById("item" + num1).style.background="brown";
    document.getElementById("item" + num2).style.background="brown";
    document.getElementById("item" + num3).style.background="brown";
    setInterval(function(){ title.innerHTML+="." },1000);
    setTimeout(function(){location.reload() },4000);
}

function winner(){

    for( i=1 ; i<10 ; i++){
        squers[i]= document.getElementById("item" + i).innerHTML;
    }


    if(squers[1]==squers[2] && squers[2]== squers[3] && squers[3] != " " ){
        ends(1,2,3);

     }
     else if(squers[4]==squers[5] && squers[5]== squers[6] && squers[4]!= " " ){
        ends(4,5,6);

    }
    else if(squers[7]==squers[8] && squers[8] == squers[9] && squers[7]!= " " ){
        ends(7,8,9);
    }



    else if(squers[1]==squers[4] && squers[4] == squers[7] && squers[7]!= " " ){
        ends(1,4,7);

    }
    else if(squers[2]==squers[5] && squers[5]== squers[8] && squers[2]!= " " ){
        ends(2,5,8);

    }
    else if(squers[3]==squers[6] && squers[6] == squers[9] && squers[3]!= " " ){
        ends(3,6,9);

    }


    else if(squers[1]==squers[5] && squers[5] ==squers[9] && squers[5]!= " " ){
        ends(1,5,9);
  
    }
    else if (squers[3]==squers[5] && squers[5] == squers[7] && squers[5]!= " " ){
        ends(3,5,7);

    }
  
}


function game(id){

    let elemnt = document.getElementById(id);

    if(trun === "x" && elemnt.innerHTML== " " ){
        elemnt.innerHTML="X";
        trun="o";
        title.innerHTML="o turn ";

    }
    else if(trun === "o" && elemnt.innerHTML== " " ){
        elemnt.innerHTML="O";
        trun="x";
        title.innerHTML="x turn ";

    }

    winner();

}