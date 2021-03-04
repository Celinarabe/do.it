import { onload} from './render/onload.js';
import { sortDate } from './helpers/sortDate.js'
import { hideForm, showForm, showProjectForm} from './render/toggleForms.js';
import { saveTask } from './helpers/saveTask.js'
import { saveProject } from './helpers/saveProject.js'
import { renderDropDown } from './render/projectDropDown.js';
import { allTasks } from './render/allTasks.js'

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

document.querySelector('#project-form').addEventListener('submit', saveProject);



document.getElementById("due-date-header").addEventListener("click", sortDate);
document.getElementById("home-btn").addEventListener("click", allTasks);


