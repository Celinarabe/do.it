






function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return month + '/' + day + '/' + year;
}

function renderCheckbox(doc) {
  if (doc.data().done){
    document.getElementById(doc.id).click();
  }
}


function renderTask(doc) {
  let dueDate = getFormattedDate(doc.data().dueDate.toDate());
  let newTask = document.createElement('li');
    newTask.classList.add("task");
    newTask.innerHTML = `<div class="task-description" data-id="${doc.id}">
    <div class="round">
      <input type="checkbox" id="${doc.id}"/>
      <label for="${doc.id}"></label>
    </div>
    
    <label class="task-label">${doc.data().title}
    <p class="task-details">${doc.data().project}</p>
  </label>
  </div>

  <div class="task-action">
    
  <p class="due-date">${dueDate}</p>
  </div>`;
  return newTask;
}

//rendering task
function onload(){
  let DOMtaskList = document.getElementById('task-list')
  let referenceNode = document.getElementById("task-row")

  //firestore access
  //async call that returns a promise. returns snapshot that we can use
  db.collection('tasks').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
      let newTask = renderTask(doc);
      DOMtaskList.insertBefore(newTask, referenceNode);
      DOMtaskList.insertBefore(document.createElement('hr'), referenceNode);
      renderCheckbox(doc);
    })
  })
  }



export {
  onload
};


