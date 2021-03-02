
import { renderProject } from '../render/project.js';




function saveProject(e) {
  console.log('are we in here or not')
  const form = document.querySelector('#project-form');
  e.preventDefault(); //will stop from reloading page
  let title1 = form.title.value;
  console.log('new title', title1)
  db.collection('projects').add({
    title: title1
  })

  db.collection('projects').where('title', '==', title1).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log('DOC',doc)
      renderProject(doc)
    })
  })
  form.reset();
}




export {
  saveProject
};