import { useEffect, useState } from "react";
import Task from "./Task";
import axios from "axios";
import TaskForm from "./TaskForm";
import './TaskWrapper.css';

function TaskWrapper() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const addNewTask = (taskName) => {
        axios.post('http://localhost:8080/api/tasks', {
            name: taskName
        }).then(response => {
            console.log('Response:', response);
            setTasks(prevTasks => [...prevTasks, response.data]);
        }).catch(error => {
            console.log('Error while trying  to add new task', error);
        })
    }

    const toggleTask = (id, currentCheck) => {
        const updatedCheck = !currentCheck;

        axios.put(`http://localhost:8080/api/tasks/toggle/${id}`, { checked: updatedCheck })
            .then(response => {
                setTasks(prevTasks => prevTasks.map(task =>
                    task.id === id ? { ...task, checked: updatedCheck } : task
                ));
            })
            .catch(error => {
                console.log("Error trying to toggle Task", error);
            })
    }

    const deleteTask = (id) => {
        axios.delete(`http://localhost:8080/api/tasks/${id}`)
            .then(response => {
                console.log('Task deleted');
                setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
            })
            .catch(error => {
                console.log('Error trying to delete Task', error);
            })
    }

    return (
        <div className="Task-wrapper">
            {tasks.map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    isChecked={task.checked}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />
            ))}
            <div className='Floating-form'>
                <TaskForm onAddTask={addNewTask} />
            </div>
        </div>
    )
}

export default TaskWrapper;