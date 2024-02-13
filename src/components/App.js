import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const handleRemoveTask = (text) => {
    setTasks(tasks.filter(task => task.text !== text))
  }
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category)
  }
  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All")
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleRemoveTask={handleRemoveTask}/>
    </div>
  );
}

export default App;
