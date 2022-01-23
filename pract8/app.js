
// https://www.youtube.com/watch?v=ylsFXMHpFUQ&list=PLDoPjvoNmBAycCXz5d9WvqlmykUIys5e8&index=13



let input = document.querySelector(".input");
let addSubmit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
//empty array to stor the tasks
let arrayOfTasks =[];

//check if there is data(tasks) in local storage
if(localStorage.getItem("tasks")){
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks") );
}

//calling thsi function // trigger get data function 
getDataFromLocale();

//add task
addSubmit.onclick = function(){
    if(input.value !== ""){
        addTasksToArray(input.value);   // add tasks to array tasks
        input.value = ""; // empty input
    }
}


//click on task element 
tasksDiv.addEventListener("click" , (e) => {

        //delete button 
        if(e.target.classList.contains("delBtn")){

                //remove task from local storage
                deleteTask(e.target.parentElement.getAttribute("data-id"));

                    //remove element from page
                e.target.parentElement.remove();

         }
                //update

                if(e.target.classList.contains("divTaskCreated")){

                    toggelLocalupdate(e.target.getAttribute("data-id"));

                    e.target.classList.toggle("done");
                }

 });




function addTasksToArray(taskText){

    const task = {
        id: Date.now(),
        completed: false ,
        title: taskText, 
    };

    //push tasks to array of tasks 

    arrayOfTasks.push(task);

    // console.log(task);

    // add to tasks page from 
    addElementsToArrayFrom(arrayOfTasks);


    //add tasks to local storage from array of tasks
    addTasksToLocalStorageFrom(arrayOfTasks);
    

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
    // divTaskCreated.className = "task done";
    divTaskCreated.className = "divTaskCreated done";
}

    divTaskCreated.setAttribute("data-id" , task.id);
    divTaskCreated.appendChild(document.createTextNode(task.title));

    // console.log(divTaskCreated);

    //creat delete span button 
    let span = document.createElement("span");
    span.className="delBtn";
    span.appendChild(document.createTextNode("Delete"));
    //add span to div
    divTaskCreated.appendChild(span);

    // console.log(divTaskCreated);

    //add tasks div to main tasks container
    tasksDiv.appendChild(divTaskCreated);
    
  });

}




function addTasksToLocalStorageFrom(arrayOfTasks){

  window.localStorage.setItem("tasks" , JSON.stringify(arrayOfTasks));

}




function getDataFromLocale(){
    let data = window.localStorage.getItem("tasks");
    if(data){
       let tasks = JSON.parse(data);
       addElementsToArrayFrom(tasks);
    }
}




function deleteTask(taskId){
    arrayOfTasks = arrayOfTasks.filter( (task)=> task.id != taskId ) ;
    addTasksToLocalStorageFrom(arrayOfTasks);
}



function toggelLocalupdate(taskId){

for(let i = 0 ; i < arrayOfTasks.length ; i++){
    if(arrayOfTasks[i].id == taskId){
        arrayOfTasks[i].completed == false ? ( arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false) ;
    }
}

    addTasksToLocalStorageFrom(arrayOfTasks);

}



// function clearAll(){
//     window.localStorage.removeItem("tasks");
//    tasksDiv.innerHTML = " ";
// }