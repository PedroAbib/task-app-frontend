import './App.css';
import TaskForm from './TaskForm';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        <h1>To Do List</h1>
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="Floating-form">
          <TaskForm />
        </div>
      </header>
    </div>
  );
}

export default App;
