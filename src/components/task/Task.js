import './Task.css';
import { FaTrash } from 'react-icons/fa';

function Task({ id, name, isChecked, onToggle, onDelete }) {

    return (
        <div className="Task">
            <input 
                type='checkbox' 
                className='Check'
                //checked={isChecked}
                onChange={() => onToggle(id, isChecked)}
                defaultChecked={isChecked}
            />

            <span className={`Task-name ${isChecked ? 'strikethrough' : ''}`}>
                {name}
            </span>

            <button className='Delete-button' onClick={() => onDelete(id)}>
                <FaTrash color='white' size='20'/>
            </button>
        </div>
    )
}
export default Task;