import './App.css';
import TaskWrapper from './components/task/TaskWrapper';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        <h1>To Do List</h1>
      </div>
      <main className="App-main">
        <TaskWrapper />
      </main>
    </div>
  );
}

export default App;
