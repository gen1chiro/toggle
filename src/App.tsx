import { useEffect, useState, useRef } from "react";
import Tasklist from "./components/Tasklist";
import TaskInput from "./components/TaskInput";
import TasklistHeader from "./components/TasklistHeader";

type Task = {
    id: number
    name: string
    description: string
    isDone: boolean
}

function App() {
    const dialogRef = useRef<HTMLDialogElement | null>(null)
    const [tasks ,setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem("tasks")) || [])
    const taskCount = tasks.length
    const doneTaskCount = tasks.filter(
        task => task.isDone
    ).length

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleOpen = () => {
        if (dialogRef.current) dialogRef.current?.showModal()
    }
    const handleClose = () => {
        if (dialogRef.current) dialogRef.current?.close()
    }

    const addTask = (name, description) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: Date.now(),
                name: name,
                description: description,
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

    const clearAllTasks = () => {
        setTasks([])
    }

    return (
        <>
            <main className="w-5/6 sm:w-[450px] bg-white rounded-2xl shadow-2xl">
                <TasklistHeader
                    taskCount={taskCount}
                    doneTaskCount={doneTaskCount}
                    handleOpen={handleOpen}
                    handleClear={clearAllTasks}
                />
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
           <footer>
               <h1 className="mt-6">Designed & Developed by <a href="https://github.com/gen1chiro" target="_blank" className="font-semibold">Jul Leo Javellana</a></h1>
           </footer>
        </>
    )
}

export default App
