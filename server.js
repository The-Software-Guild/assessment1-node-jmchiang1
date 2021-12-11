const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

const PORT = 3000;


var todos = [
  { id: uuidv4(), name: "Jon", task: "buy the milk" },
  { id: uuidv4(), name: "May", task: "eat the bread" },
  { id: uuidv4(), name: "Gary", task: "rent a car" },
  { id: uuidv4(), name: "Michael", task: "walk the dog" },
  { id: uuidv4(), name: "Ken", task: "go to work" },
];

//display entire object on home page
app.get("/task", function (req, res, next) {
  res.status(200).send(todos);
});

//find single task
//req.params will be what endpoint postman will be looking for. They must match
app.get("/task/:id", (req, res, next) => {
    let { id } = req.params;    //returns {id: 1} or whatever number you input
    const findTask = todos.filter((task) => task.id === id);    //filter todo array by id 
    res.status(200).send(findTask);
})

//create new task and return entire array with new task
//req.body: allows you to access data in a string/JSON object from client side
app.post("/task", function (req, res) {
  var newTask = req.body;   //create newTask variable as a new req.body object. Follows the same formatting as current todo object
  console.log("REQ.BODY",newTask);  //Returns: { id: '10', name: 'Jason', task: 'drink water and coffee' }
  todos.push({ id: uuidv4(), ...newTask }); //push new task with unique id while keeping original array
  res.status(200)
//   .send(`Task: ${newTask.task} has been added`)
  .redirect("/task");
});

//When creating new object entry in postman, leave id out since you're pushing a new one in
// {
//     "name": "tootsie",
//     "task": "poop"
// }


//update task and name on single todo item
app.put("/task/:id", (req, res, next) => {
    let { id } = req.params;    //returns {id: 1}
    const { name, task } = req.body;    //Returns { name: 'Jon', task: 'yur DEEZ' }
    const findTask = todos.find((task) => task.id === id);
    if (id === undefined){                          //if id doesn't exist, create error and pass it along to next function 
        const err = new Error("Task doesn't exist")
        next(err);
    }
    if (name) findTask.name = name; //if name exist, current name = new name 
    if (task) findTask.task = task; //if task exist, current task = new task

    res.status(200)
    // .send(`Task: ${id} has been updated`)
    .redirect("/task")
})

// delete single task by id
app.delete("/task/:id", (req, res, next) => {
    let { id } = req.params;    //returns { id: '1' }
    todos = todos.filter((task) => task.id !== id); //filter todo list by elements that are not the selected id
    res.status(200).send(todos);
})

//delete single task by name -> only one delete method can be used at a time, please comment out one before testing 
app.delete("/task/:name", (req, res, next) => {
    let { name } = req.params;  //returns { name: 'May' }
    todos = todos.filter((task) => task.name !== name);
    res.status(200).send(todos);
})

app.use((req, res, next) => {
    const err = new Error("Task not found");    
    err.status = 404;
    next(err);
})

//global error handling function 
app.use((err, req, res, next) => {  //if error occurs, display this object 
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    })
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

// GET / retrieve the list of tasks
// POST / create a new task
// PUT /:id update the task of id
// DELETE /:id