import './App.css';
// import AboutMe from './Component';
// import HelloWorld  from './HelloWorld';


const Task = (taskList) => {
  taskList = ['Estudar React', 'Estudar JS'];
  
    return taskList.map((task) => <li>{task}</li>);
}

function App() {
  return (
    <Task />
  );
}

export default App;
