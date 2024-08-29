import './TaskForm.css';
import { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [task, setTask] = useState("");
    const maxLength = 20;

    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    }

    return(
        <div className="Task-form">
            <form onSubmit={handleSubmit}>
                <input
                    className="Text-field"
                    placeholder='Enter new Task'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    maxLength={maxLength}
                />

                <input
                    className="Submit-button"
                    type='submit'
                    value='Add'
                />
            </form>
        </div>
    )
}

export default TaskForm;