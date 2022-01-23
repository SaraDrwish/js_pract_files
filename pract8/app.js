
let input = document.querySelector(".input");
let addSubmit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

//empty array to stor the tasks
let arrayOfTasks =[];

//add task
addSubmit.onclick = function(){

    if(input.value !== ""){
        addTasksToArray(input.value);   // add tasks to array tasks
        input.value = ""; // empty input

    }
}




function addTasksToArray(taskText){

    const task = {
        id: Date.now(),
        completed: false ,
        title:taskText, 
    };

//push tasks to array of tasks 

arrayOfTasks.push(task);

    // console.log(task);
    addElementsToArrayFrom(arrayOfTasks);

}




function addElementsToArrayFrom(arrayOfTasks){

  //empty the task div to avoid duplecated 
  tasksDiv.innerHTML = "";

  // looping to array of tasks

  arrayOfTasks.forEach( (task) => {
 
    //creat a div task
    let divTaskCreated = document.createElement("div");
    divTaskCreated.className = "divTaskCreated";

    //check if task done or not 

    if(task.completed){
    divTaskCreated.className = "task done";
    }

    divTaskCreated.setAttribute("data-id" , task.id);
    divTaskCreated.appendChild(document.createTextNode(task.title));

    //creat delete span button 
    let span = document.createElement("span");
    span.className="delBtn";
    span.appendChild(document.createTextNode("deleteBtn"));
    //add span to div
    divTaskCreated.appendChild(span);

    // console.log(divTaskCreated);

    //add tasks div to main tasks container
    tasksDiv.appendChild(divTaskCreated);
    
  });

}
