

function renderDropDown() {
  console.log('render drop down')
  let DOMDropDown;
  let option;
  DOMDropDown = document.querySelector("#task-form select")
  DOMDropDown.innerHTML = "";
  db.collection('projects').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
      console.log('is this',doc.data().title)
      option = document.createElement("option");
      option.innerHTML = doc.data().title;
      DOMDropDown.appendChild(option);

    })
  })
}




export {
  renderDropDown
}