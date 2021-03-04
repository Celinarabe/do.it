import { getFormattedDate } from '../helpers/formatDate.js'

function renderTask(doc) {

  let DOMtaskList = document.getElementById('task-list-start')
  let referenceNode = document.getElementById("task-row")


  let dueDate = getFormattedDate(doc.data().dueDate.toDate());
  let newTask = document.createElement('li');
    newTask.classList.add("task");
    newTask.innerHTML = `<div class="task-description" data-id="${doc.id}">
    <div class="round">
      <input type="checkbox" id="${doc.id}"/>
      <label for="${doc.id}"></label>
    </div>
    
    <label class="task-label">${doc.data().title}
    <p class="task-details">${doc.data().project}</p>
  </label>
  </div>

  <div class="task-action">
    
  <p class="due-date">${dueDate}</p>
  </div>`;

  DOMtaskList.appendChild(newTask);
  DOMtaskList.appendChild(document.createElement('hr'));
  let checkbox = document.getElementById(doc.id)
  console.log(checkbox)
  checkbox.addEventListener("click", function (){
    toggleDone(checkbox, doc.id);
  })

  renderCheckbox(doc);
}


function toggleDone(checkbox,id){
  if (checkbox.checked) {
    db.collection("tasks").doc(id).update({done: "true"});
  } else {
    db.collection("tasks").doc(id).update({done: "false"});
  }
}



function renderCheckbox(doc) {
  if (doc.data().done){
    document.getElementById(doc.id).click();
  }
}


export {
  renderTask
};