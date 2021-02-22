import { populateList } from '../helpers/todo.js';



//rendering
function onload(){
  
  let DOMtaskList = document.getElementById('task-list')
  let taskList = populateList();
 
  
  for (let i of taskList){
    console.log(i);
    let newTask = document.createElement('li');
    newTask.classList.add("task");
    newTask.innerHTML = `<div class="task-description">

    <div class="round">
      <input type="checkbox" id="${i.title}"/>
      <label for="${i.title}"></label>
    </div>
    
    <label class="task-label">${i.title}
    <p class="task-details">${i.project}</p>
  </label>
  </div>

  <div class="task-action">
    
  <p class="due-date">${i.dueDate}</p>
  </div>`;

  DOMtaskList.appendChild(newTask);
  DOMtaskList.appendChild(document.createElement('hr'));
  }

  let newTask = document.createElement('li');
  newTask.classList.add("task", "add-new");
    newTask.innerHTML = `<div class="task-description">

    <div class="round">
      <input type="checkbox" id="addNewTask"/>
      <label for="addNew"></label>
    </div>
    
    <label class="task-label add-new-task">Add New...
  </label>
  </div>

  <div class="task-action">
    
  <p class="due-date"></p>
  </div>`;

DOMtaskList.appendChild(newTask);



}

export {
  onload
};


