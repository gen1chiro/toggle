import Task from "./Task"

const Tasklist = ({tasks, setTasks, handleDelete, handleToggle}) => {

    const taskArray = tasks.map(({id, name, description, isDone}) => {
        return (<Task
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    setTasks={setTasks}
                    isDone={isDone}
                />)
    })

    return (
        <section className="w-full max-h-96 px-4 pb-4 pt-1 overflow-auto">
            {taskArray}
        </section>
    )
}

export default Tasklist