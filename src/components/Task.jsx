const Task = ({id, name, description, isDone, handleDelete, handleToggle}) => {

    return (
        <div className="bg-white">
            <h1>{name}</h1>
            <p>{description}</p>
            <input type="checkbox" onChange={() => handleToggle(id)} checked={isDone}/>
            <p>task status {isDone ? "done" : "on going"} </p>
            <button onClick={() => handleDelete(id)}>delete</button>
        </div>
    )
}

export default Task