const TasklistHeader = ({taskCount, doneTaskCount, handleOpen}) => {
    const dateFormat = { weekday: "long", day: "numeric", month: "long"}
    const formattedDate = new Date().toLocaleDateString("en-US", dateFormat)

    const gridColumn = {
        gridTemplateColumns: `repeat(${taskCount}, minmax(0, 1fr))`
    }
    const columnSpan = doneTaskCount > 0 ?
        {gridColumn: `span ${doneTaskCount} / span ${doneTaskCount}`} : { width: "0.5rem"}

    return (
        <section className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold tracking-wide">Task&#39;s</h1>
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
                <h1 className="tracking-wide text-sm text-gray-600">{doneTaskCount}/{taskCount} Completed</h1>
            </div>
        </section>
    )
}

export default TasklistHeader