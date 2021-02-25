
import { renderTask, renderCheckbox } from '../render/renderTask.js';


function showForm() {
  console.log('WE CLICKED THE BUTTON')
  document.getElementById("task-row").style.display = "none";
  document.getElementById("task-form").hidden = false;
}

function hideForm() {
  document.getElementById("task-row").style.display = "inline-block";
  document.getElementById("task-form").hidden = true;
}


function showProjectForm() {
  let DOMform = document.getElementById("project-form");
  let DOMinput = document.getElementById("input-project-title");
  let DOMnewProject = document.getElementById("new-project")

  DOMnewProject.style.display = "none";
  DOMform.hidden = false;
  DOMinput.focus();
  DOMinput.addEventListener('blur', () => {
    document.getElementById("project-form").hidden = true;
    DOMnewProject.style.display = "block";

  })

}

function saveTask(e) {
  console.log('are we in here or not')
  const form = document.querySelector('#task-form');
  e.preventDefault(); //will stop from reloading page
  let date1 = new Date(form.dueDate.value + "T00:00:00");
  console.log(date1)
  let timestamp = new firebase.firestore.Timestamp.fromDate(date1)
  console.log(timestamp)
  let title1 = form.title.value;
  db.collection('tasks').add({
    done: false,
    dueDate: timestamp,
    project: form.project.value,
    title: title1

  })
  db.collection('tasks').where('title', '==', title1).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log('DOC',doc)
      renderTask(doc)
    })
  })
}




export {
  showForm,
  hideForm,
  showProjectForm,
  saveTask
};