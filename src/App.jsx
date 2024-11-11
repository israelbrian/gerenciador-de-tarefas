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
import Addtask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
 
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <Addtask />
      <Tasks />
    </div>
  );
}

export default App;