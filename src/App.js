import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState } from 'react'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Attend Meeting',
      day: '6/8/21',
      reminder: true
    },
    {
      id: 2,
      text: 'Sleep',
      day: '6/9/21',
      reminder: true
    },
    {
      id: 3,
      text: 'Eat',
      day: '6/10/21',
      reminder: false
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  //Togle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}

    </div>
  );
}

export default App;
