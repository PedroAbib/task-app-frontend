import './TaskForm.css';

function TaskForm() {
    return(
        <div className="TaskForm">
            <form className='Form'>
                <input className="Text-field" placeholder='Add new Task'/>
                <input className="Submit-button" type='submit' value="Add"></input>
            </form>
        </div>
    )
}

export default TaskForm;