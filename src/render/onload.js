
import { renderTask } from './task.js'
import { renderProject} from './project.js'
import { sortDate } from '../helpers/sortDate.js'
import { setDate } from '../helpers/setDate.js'

//rendering task list
function onload(){
  document.getElementById("today-page").hidden = false;
  document.querySelector("#heading .title").innerHTML = "All Tasks";
  document.getElementById("task-list-start").innerHTML = "";

    taskList();
    projectList();
    currentDate();
}

  


function taskList() {
  //firestore access
//async call that returns a promise. returns snapshot that we can use
db.collection('tasks').get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderTask(doc);
  })
})
setDate();
}


function projectList() {
  db.collection('projects').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
      renderProject(doc);
    })
  })
  }

function currentDate() {
  var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
  document.querySelector(".date").innerHTML = d;
}







  














export {
  onload,
  sortDate,
  setDate,
  taskList,
  currentDate
};


