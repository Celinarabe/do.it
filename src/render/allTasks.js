import { renderTask } from './task.js'
import { renderProject} from './project.js'
import { sortDate } from '../helpers/sortDate.js'
import { setDate } from '../helpers/setDate.js'
import {taskList, currentDate } from './onload.js'


function allTasks() {

  document.getElementById("today-page").hidden = false;
  document.querySelector("#heading .title").innerHTML = "All Tasks";
  document.getElementById("task-list-start").innerHTML = "";

    taskList();
    currentDate();

}


export {
  allTasks
};