import './Task.css';
import { FaTrash } from 'react-icons/fa';

function Task() {
    return (
        <div className="Task">
            <input type='checkbox' className='Check'></input>
            <span className='Task-name'>Teste Teste Teste</span>
            <button className='Delete-button'>
                <FaTrash color='white' size='20'/>
            </button>
        </div>
    )
}
export default Task;