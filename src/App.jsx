// import { useState } from 'react';

// function App() {
//   const [message, setMessage] = useState("Olá, mundo!")
//   // State (Estado)
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={() => {
//         setMessage("Olá, fui clicado!")
//       }}>Mudar mensagem</button>
//     </div>
//   )
// }

// export default App
import {useEffect, useState} from "react";
import Addtask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack",
    isCompleted: false
  }, 
  {
    id: 2,
    title: "Estudar Inglês",
    description: "Estudar Inglês para se tornar fluente",
    isCompleted: false
  }, 
  {
    id: 3,
    title: "Estudar Matemática",
    description: "Estudar matemática para se tornar um matemático",
    isCompleted: false
  },
]);

useEffect(() => {
    console.log("tanks foi alterado")
}, [tasks])

function onTaskClick(taskId) {
  const newTasks = tasks.map(task => {
    // Preciso atualizar a tarefa
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }

    // NÃO PRECISO ATUALIZAR ESSA TAREFA
    return task
  });
  setTasks(newTasks);
} 

function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasks(newTasks);
} 

function onAddTaskSubmit(title, description) {
  const newTask = {
    id: v4(),
    title,
    description,
    isCompleted: false
  };
  setTasks([...tasks, newTask]);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Addtask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} 
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;