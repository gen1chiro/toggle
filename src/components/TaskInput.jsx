import { useRef } from "react";

const TaskInput = ({isOpen, handleAdd, onClose}) => {

    const formRef = useRef(null);
    const handleSubmit = (data) => {
        handleAdd(Object.fromEntries(data))
    }

    const handleClose = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
        onClose()
    };

    return (
        <dialog open={isOpen} className="bg-gray-400 w-80 aspect-video">
            <form ref={formRef} action={handleSubmit}>
                <label htmlFor="task-title">task title</label>
                <input id="task-title" type="text" name="name"/>
                <label htmlFor="task-description">task description</label>
                <textarea id="task-description" name="description"></textarea>
                <button type="button" onClick={handleClose}>Cancel</button>
                <button onClick={onClose}>Add task</button>
            </form>
        </dialog>
    )
}

export default TaskInput