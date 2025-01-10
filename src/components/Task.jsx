import { useState } from "react";

const Task = ({id, name, description, isDone, handleDelete, handleToggle, setTasks}) => {

    const [isEditing, setIsEditing] = useState(false)

    const handleSubmit = (data) => {
        const newTask = Object.fromEntries(data)
        setTasks(tasks => {
            return tasks.map(task => {
                return id === task.id ? {
                    ...task,
                    name: newTask.name,
                    description: newTask.description
                } : task
            })
        })
        setIsEditing(false)
    }

    return isEditing ? (
        <form action={handleSubmit}>
            <label htmlFor="task-title">task title</label>
            <input id="task-title" name="name" defaultValue={name}/>
            <label htmlFor="task-description">task description</label>
            <textarea id="task-description" name="description" defaultValue={description}></textarea>
            <button type="button" onClick={() => setIsEditing(false)}>cancel</button>
            <button>confirm</button>
        </form>
      ):(
        <div className="bg-white">
            <h1>{name}</h1>
            <p>{description}</p>
            <input type="checkbox" onChange={() => handleToggle(id)} checked={isDone}/>
            <p>task status {isDone ? "done" : "on going"} </p>
            <button onClick={() => setIsEditing(true)}>edit</button>
            <button onClick={() => handleDelete(id)}>delete</button>
        </div>
    )
}

export default Task