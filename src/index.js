import { onload } from './render/homePage.js';
import { showForm } from './render/newTask.js';

console.log('in the js file');
console.log(firebase);
onload();




//new task event listener
document.getElementById("new-task-btn").addEventListener("click", showForm);



