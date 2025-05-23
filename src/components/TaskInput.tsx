import React, { useRef } from "react";
import Task from "./Task";

interface TaskInputProps {
    onClose: () => void
    handleAdd: (name: string, description: string) => void
    ref: React.RefObject<HTMLDialogElement>
}

const TaskInput = ({handleAdd, onClose, ref}: TaskInputProps) => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const handleSubmit = (data) => {
        const {name, description} = Object.fromEntries(data)
        handleAdd(name, description)
    }

    const handleClose = () => {
        if (formRef.current) {
            formRef.current?.reset();
        }
        onClose()
    };

    return (
        <dialog ref={ref} className="w-96 rounded-xl p-4 shadow-2xl transition-all ease-in">
            <form className="flex flex-col items-end gap-2 text-md text-gray-700" ref={formRef} action={handleSubmit}>
                <label className="hidden" htmlFor="task-title">task title</label>
                <input className="w-full p-1 hover:bg-gray-100 rounded-md focus:outline-0 focus:bg-gray-100" id="task-title" type="text" name="name" placeholder="Task name here..." required/>
                <label className="hidden" htmlFor="task-description">task description</label>
                <textarea className="w-full h-20 resize-none p-1 hover:bg-gray-100 rounded-md focus:outline-0 focus:bg-gray-100" id="task-description" name="description" placeholder="description"></textarea>
                <div className="flex gap-2 text-sm">
                    <button className="border-[1px] px-4 py-1 rounded-md text-slate-500 font-medium shadow-sm hover:bg-gray-100" type="button" onClick={handleClose}>Cancel</button>
                    <button className="bg-violet-600 rounded-md font-semibold px-4 py-1 text-white hover:bg-violet-700" onClick={onClose}>Add Task</button>
                </div>
            </form>
        </dialog>
    )
}

export default TaskInput