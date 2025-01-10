import { useState } from "react";
import Tasklist from "./components/Tasklist";
import TaskInput from "./components/TaskInput";

function App() {
    const [open, setOpen] = useState(false)
    const [tasks ,setTasks] = useState([{
        id: Date.now(),
        name: "test",
        description: "test task",
        isDone: false
    }])
    const taskCount= tasks.length
    const doneTaskCount = tasks.filter(
        task => task.isDone === true
    ).length

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const addTask = (task) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: Date.now(),
                name: task.name,
                description: task.description,
                isDone: false
            }
        ])
    }

    const deleteTask = (id) => {
        setTasks(tasks => {
             return tasks.filter(task => task.id !== id)
        })
    }

    const toggleTask = (id) => {
        setTasks(tasks => {
            return tasks.map(task => {
                return task.id === id? {
                    ...task,
                    isDone: !task.isDone
                } : task
            })
        })
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold">My first react project!</h1>
            <h1>number of tasks: {taskCount}</h1>
            <h1>number of tasks done: {doneTaskCount}</h1>
            <button onClick={handleOpen}>Add Task</button>
            <TaskInput
                    isOpen={open}
                    onClose={handleClose}
                    handleAdd={addTask}
            />
            <Tasklist
                    tasks={tasks}
                    setTasks={setTasks}
                    handleDelete={deleteTask}
                    handleToggle={toggleTask}
            />
        </div>
    )
}

export default App
