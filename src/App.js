import "./App.css";
import { useState } from "react";
import ItemForm from "./Components/ItemForm";
import ItemList from "./Components/ItemList";

function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (task) => {
    if (task.name !== "") {
      const id = tasks.length + 1;
      const newTask = { id, ...task };
      setTasks([...tasks, newTask]);
    }
  };

  const onDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };
  const onDoneTask = (task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...task, done: !task.done } : t))
    );
  };
  const onEditTask = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...task } : t)));
  };
  return (
    <div className="App">
      <ItemForm onAddTask={onAddTask} />
      <ItemList
        onDeleteTask={onDeleteTask}
        tasks={tasks}
        onEditTask={onEditTask}
        onDoneTask={onDoneTask}
      />
    </div>
  );
}

export default App;
