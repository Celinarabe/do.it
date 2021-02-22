//todo class
class Todo {
  constructor(title, project, dueDate){
    this.title = title;
    this.project = project
    this.dueDate = dueDate;
    this.completed = false;
  }

  };

//creating objects
  let t1 = new Todo("Do Laundry", "general", "3-2-21");
  let t2 = new Todo("Pack bags for Rome trip", "Rome Vacation", "3-4-21");
  let t3 = new Todo("Finish personal website", "job search", "2-22-21");
  


//populating list
  function populateList(){
    let taskList=[];
    taskList.push(t1)
    taskList.push(t2)
    taskList.push(t3);
    return taskList;
  }



  export {
    populateList
  };