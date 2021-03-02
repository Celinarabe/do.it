import { renderTask} from '../render/task.js'
import { setDate } from './setDate.js'

function sortDate() {
  let sorted = document.getElementById('due-date-header').dataset.order
  document.getElementById('task-list-start').innerHTML = "";

  if (document.getElementById('due-date-header').dataset.order == "desc") {
    db.collection('tasks').orderBy('dueDate', 'asc').get().then((snapshot) =>{
      snapshot.docs.forEach(doc => {
        renderTask(doc);
      })
    })
    document.getElementById('due-date-header').dataset.order = "asc"

  } else {
  db.collection('tasks').orderBy('dueDate', 'desc').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
      renderTask(doc);
    })
  })
  setDate();
  document.getElementById('due-date-header').dataset.order = "desc"
}
  


}

export {
  sortDate
}