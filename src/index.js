import { onload } from './render/homePage.js';
import { hideForm, showForm, showProjectForm, saveTask } from './helpers/newTask.js';

console.log('in the js file');
console.log(firebase);
onload();




//new task event listener
document.getElementById("new-task-btn").addEventListener("click", showForm);
document.getElementById("form-cancel").addEventListener("click", hideForm);
console.log('here we are')
document.getElementById("new-project").addEventListener("click", showProjectForm);
console.log('here we are')
document.querySelector('#task-form').addEventListener('submit', saveTask);

  


