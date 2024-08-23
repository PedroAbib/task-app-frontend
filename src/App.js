import './App.css';
import TaskForm from './components/task/TaskForm';
import Task from './components/task/Task';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        <h1>To Do List</h1>
      </div>
      <header className="App-header">
        <Task />
        <Task />
        <Task />
        <div className="Floating-form">
          <TaskForm />
        </div>
      </header>
    </div>
  );
}

export default App;
