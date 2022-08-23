import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';


function App() {

  useEffect(() => {
    fetch( "http://localhost:9292/tasks" )
    .then( resp => resp.json() )
    .then( data => setTasks( data ) )
  }, [])

  const [ tasks, setTasks ] = useState([])
  
  // delete task card function
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks)
  }
  

  return (
    <div className="App">
      <Header />
      <Home  taskList = {tasks} deleteTask = {deleteTask} />
      <Footer />
    </div>
  );
}

export default App;
