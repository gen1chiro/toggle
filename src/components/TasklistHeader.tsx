interface TasklistHeaderProps {
    taskCount: number
    doneTaskCount: number
    handleOpen: () => void
    handleClear: () => void
}

const TasklistHeader = ({taskCount, doneTaskCount, handleOpen, handleClear}) => {
    const dateFormat = { weekday: "long", day: "numeric", month: "long"}
    const formattedDate = new Date().toLocaleDateString("en-US", dateFormat)
    const areAllTasksDone = taskCount > 0 && doneTaskCount === taskCount

    const gridColumn = {
        gridTemplateColumns: `repeat(${taskCount}, minmax(0, 1fr))`
    }
    const columnSpan = doneTaskCount > 0 ?
        {gridColumn: `span ${doneTaskCount} / span ${doneTaskCount}`} : { width: "0.5rem"}

    return (
        <section className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold tracking-wide">Tasks</h1>
                    <p className="text-gray-600">{formattedDate}</p>
                </div>
                <button
                    className="bg-violet-100 px-4 py-2 rounded-xl text-violet-700 hover:bg-violet-200 hover:scale-[1.02] transition-all ease-out"
                    onClick={handleOpen}><span className="font-bold">+</span> New Task
                </button>
            </div>
            <div className="flex justify-between items-center gap-4 px-1 rounded-lg">
                <div className="h-2 grow bg-gray-200 grid rounded-full" style={gridColumn}>
                    <div className="bg-gray-800 rounded-full" style={columnSpan}></div>
                </div>
                {areAllTasksDone ?
                    <button
                        className="text-sm w-[100px] py-1 rounded-md text-gray-600 shadow:md bg-gray-100 hover:bg-gray-200 hover:scale-[1.02] transition-all ease-out"
                        onClick={handleClear}
                    >Clear All</button> :
                    <h1 className="tracking-wide text-sm py-1 text-gray-600 w-[100px]">{doneTaskCount}/{taskCount} Completed</h1>
                }
            </div>
        </section>
    )
}

export default TasklistHeader