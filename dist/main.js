(()=>{"use strict";function e(e){let t=document.getElementById("task-list"),n=document.getElementById("task-row");console.log(e.data().dueDate);let o=function(e){let t=e.getFullYear();return(1+e.getMonth()).toString().padStart(2,"0")+"/"+e.getDate().toString().padStart(2,"0")+"/"+t}(e.data().dueDate.toDate()),l=document.createElement("li");l.classList.add("task"),l.innerHTML=`<div class="task-description" data-id="${e.id}">\n    <div class="round">\n      <input type="checkbox" id="${e.id}"/>\n      <label for="${e.id}"></label>\n    </div>\n    \n    <label class="task-label">${e.data().title}\n    <p class="task-details">${e.data().project}</p>\n  </label>\n  </div>\n\n  <div class="task-action">\n    \n  <p class="due-date">${o}</p>\n  </div>`,t.insertBefore(l,n),t.insertBefore(document.createElement("hr"),n),function(e){e.data().done&&document.getElementById(e.id).click()}(e)}var t,n;console.log("in the js file"),console.log(firebase),db.collection("tasks").get().then((t=>{t.docs.forEach((t=>{e(t)}))})),t=document.querySelector("#task-dueDate"),n=new Date,t.value=n.getFullYear().toString()+"-"+(n.getMonth()+1).toString().padStart(2,0)+"-"+n.getDate().toString().padStart(2,0),t.min=n.getFullYear().toString()+"-"+(n.getMonth()+1).toString().padStart(2,0)+"-"+n.getDate().toString().padStart(2,0),document.getElementById("new-task-btn").addEventListener("click",(function(){console.log("WE CLICKED THE BUTTON"),document.getElementById("task-row").style.display="none",document.getElementById("task-form").hidden=!1})),document.getElementById("form-cancel").addEventListener("click",(function(){document.getElementById("task-row").style.display="inline-block",document.getElementById("task-form").hidden=!0})),console.log("here we are"),document.getElementById("new-project").addEventListener("click",(function(){let e=document.getElementById("project-form"),t=document.getElementById("input-project-title"),n=document.getElementById("new-project");n.style.display="none",e.hidden=!1,t.focus(),t.addEventListener("blur",(()=>{document.getElementById("project-form").hidden=!0,n.style.display="block"}))})),console.log("here we are"),document.querySelector("#task-form").addEventListener("submit",(function(t){console.log("are we in here or not");const n=document.querySelector("#task-form");t.preventDefault();let o=new Date(n.dueDate.value+"T00:00:00");console.log(o);let l=new firebase.firestore.Timestamp.fromDate(o);console.log(l);let a=n.title.value;db.collection("tasks").add({done:!1,dueDate:l,project:n.project.value,title:a}),db.collection("tasks").where("title","==",a).get().then((t=>{t.docs.forEach((t=>{console.log("DOC",t),e(t)}))}))}))})();