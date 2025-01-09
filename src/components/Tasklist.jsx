import Task from "./Task"

const Tasklist = ({tasks, handleDelete, handleToggle}) => {

    const taskArray = tasks.map(({id, name, description, isDone}) => {
        return (<Task
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    isDone={isDone}
                />)
    })

    return (
        <>
            <h1>This is the task list</h1>
            {taskArray}
        </>
    )
}

export default Tasklist