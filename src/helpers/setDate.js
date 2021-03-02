function setDate() {
  var field = document.querySelector('#task-dueDate');
  var date = new Date();

  // Set the date
  field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
      '-' + date.getDate().toString().padStart(2, 0);
  field.min = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
      '-' + date.getDate().toString().padStart(2, 0);

}

export {
  setDate
}