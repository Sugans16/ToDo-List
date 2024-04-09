var ipBox = document.getElementById("task-add");
var taskList = document.getElementById("task-list");

function addTask () {
    if(ipBox.value === ''){
        alert("OOPS! No task is added.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = ipBox.value;
        taskList.appendChild(li);
        ipBox.value = '';
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    storeTask();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        storeTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeTask();
    }
}, false);

function storeTask(){
    localStorage.setItem("task", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("task");
}

showTask();