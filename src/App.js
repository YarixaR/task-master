import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';


function App() {
 
  // const [ newTask, setNewTask ] = useState([])
  const [ tasks, setTasks ] = useState([])

  useEffect(() => {
    fetch( "http://localhost:9292/tasks" )
    .then( resp => resp.json() )
    .then( data => setTasks( data ) )
  }, [])

  // delete task card function
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks)
  }
  
  const handleAddTask = (addedTask) => {
    setTasks([ ...tasks, addedTask])
  }
  console.log(tasks)
  
  return (
    <div className="App">
      <Header />
      <Home  taskList = {tasks}
      handleAddTask={handleAddTask}
      deleteTask = {deleteTask}
      />

      <Footer />
    </div>
  );
}

export default App;
