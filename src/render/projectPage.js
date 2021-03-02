import { renderTask, renderCheckbox } from '../render/task.js';
import { setDate} from './homePage.js'

function renderProjectPage(projectTitle) {
console.log('trying gggg to render')

document.querySelector("#heading .title").innerHTML = projectTitle;
document.getElementById("task-list-start").innerHTML = "";
taskList(projectTitle);
}


function taskList(projectTitle) {
  //firestore access
//async call that returns a promise. returns snapshot that we can use
db.collection('tasks').where('project', '==', projectTitle).get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
    renderTask(doc);
  })
})
setDate();
}

function taskForm(projectTitle){
  

}



export {
  renderProjectPage
}