import Task from "./Task"

interface TasklistProps {
    tasks: Task[]
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
    handleDelete: (id: number) => void
    handleToggle: (id: number) => void
}

type Task = {
    id: number
    name: string
    description: string
    isDone: boolean
}

const Tasklist = ({tasks, setTasks, handleDelete, handleToggle}: TasklistProps) => {

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