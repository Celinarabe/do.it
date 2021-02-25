import { getFormattedDate } from '../helpers/getFormattedDate.js'

function renderTask(doc) {

  let DOMtaskList = document.getElementById('task-list')
  let referenceNode = document.getElementById("task-row")

  console.log(doc.data().dueDate);
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
  DOMtaskList.insertBefore(newTask, referenceNode);
  DOMtaskList.insertBefore(document.createElement('hr'), referenceNode);

  renderCheckbox(doc);
}






function renderCheckbox(doc) {
  if (doc.data().done){
    document.getElementById(doc.id).click();
  }
}


export {
  renderTask
};