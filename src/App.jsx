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
    const dateFormat = { weekday: "long", day: "numeric", month: "long"}
    const formattedDate = new Date().toLocaleDateString("en-US", dateFormat)

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
        <main className="bg-white rounded-2xl shadow-2xl">
            <section className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-wide">Task&#39;s</h1>
                        <p className="text-gray-600">{formattedDate}</p>
                    </div>
                    <button className="bg-violet-100 px-4 py-2 rounded-xl text-violet-700 hover:bg-violet-200 hover:scale-[1.02] transition-all ease-out" onClick={handleOpen}><span className="font-bold">+</span> New Task</button>
                </div>
                <h1>{doneTaskCount}/{taskCount} Completed</h1>
            </section>
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
