import { renderDropDown } from './projectDropDown.js'

function showForm() {
  console.log('WE CLICKED THE BUTTON')
  document.getElementById("task-row").style.display = "none";
  renderDropDown();
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


export {
  showForm,
  hideForm,
  showProjectForm
}