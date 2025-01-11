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
        <form action={handleSubmit} className="flex flex-col gap-2 items-end px-2 py-3 text-gray-700 border-t-[1px] border-t-gray-300">
            <label className="hidden" htmlFor="task-title">task title</label>
            <input className="w-full p-1 pl-2 hover:bg-gray-100 rounded-md focus:outline-0 focus:bg-gray-100 border-[1px] drop-shadow-sm" id="task-title" name="name" defaultValue={name}/>
            <label className="hidden" htmlFor="task-description">task description</label>
            <textarea className="w-full h-12 resize-none p-1 pl-2 hover:bg-gray-100 rounded-md focus:outline-0 focus:bg-gray-100 border-[1px] drop-shadow-sm" id="task-description" name="description" defaultValue={description}></textarea>
            <div className="flex gap-2 text-sm">
                <button className="border-[1px] px-4 py-1 rounded-md text-slate-500 font-medium shadow-sm hover:bg-gray-100" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                <button className="bg-violet-600 rounded-md tracking-wide px-4 py-1 text-white hover:bg-violet-700">Confirm</button>
            </div>
        </form>
    ) : (
        <div className="flex gap-3 items-start bg-white p-2 border-t-[1px] border-t-gray-300 group ">
            <div>
                <input className="h-4 w-4 mt-1.5 appearance-none checked:bg-violet-200 border-[1px] border-gray-400 checked:border-violet-700 rounded-full" type="checkbox" onChange={() => handleToggle(id)} checked={isDone}/>
            </div>
            <div className="w-[78%]">
                <h1 className={`text-l font-semibold font-md tracking-wide ${isDone? "line-through" : ""}`}>{name}</h1>
                <p className="text-md text-gray-600">{description}</p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                <button onClick={() => setIsEditing(true)}>
                    <svg className="stroke-gray-600" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button onClick={() => handleDelete(id)}>
                    <svg className="stroke-gray-600" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7H20" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Task