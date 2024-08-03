
//Lista de tareas
let tasks= JASON.parse(localStorage.getItem("tasks")) || [];

//Funcion para llevar las tareas

export const getTasks = () => tasks;

//Funcion para agregar una tarea

export const addTask = (task) => {
     const newTask = {
        id : Date.now(),
        text: task,
        completed: false, 
     };
     tasks.push(newTask);
     localStorage.setItem("tasks", JSON.stringify(tasks));
    }