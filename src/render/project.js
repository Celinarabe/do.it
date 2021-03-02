import { renderProjectPage } from './projectPage'

function renderProject(doc) {
  let DOMtaskList = document.getElementById('project-list')
  let referenceNode = document.getElementById("new-project")

  let newProject= document.createElement('li');
    newProject.classList.add("sub-item");
    newProject.innerHTML = `<a href="#" class="navbar__link project" data-id=${doc.id}>
    ${doc.data().title}</a>`;
    
    newProject.addEventListener('click', function() {
      renderProjectPage(doc.data().title);
    })
    DOMtaskList.insertBefore(newProject, referenceNode);

}






export {
  renderProject
};