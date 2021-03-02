
import { renderTask, renderCheckbox } from '../render/task.js';




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
  form.reset();
}




export {
  saveTask
};