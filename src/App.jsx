import { useEffect, useState, useRef } from "react";
import Tasklist from "./components/Tasklist";
import TaskInput from "./components/TaskInput";

function App() {
    const dialogRef = useRef(null)
    const [tasks ,setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    const taskCount= tasks.length
    const doneTaskCount = tasks.filter(
        task => task.isDone === true
    ).length

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleOpen = () => {
        if (dialogRef.current) dialogRef.current.showModal()
    }
    const handleClose = () => {
        if (dialogRef.current) dialogRef.current.close()
    }

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
        <main className="bg-pink-50">
            <h1>{doneTaskCount}/{taskCount} Completed</h1>
            <button onClick={handleOpen}>Add Task</button>
            <TaskInput
                    ref={dialogRef}
                    onClose={handleClose}
                    handleAdd={addTask}
            />
            <Tasklist
                    tasks={tasks}
                    setTasks={setTasks}
                    handleDelete={deleteTask}
                    handleToggle={toggleTask}
            />
        </main>
    )
}

export default App
