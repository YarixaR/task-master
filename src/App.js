import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';
// import { GlobalStyles } from '@mui/styled-engine';

function App() {
 
  const [ tasks, setTasks ] = useState([])
  const [ searchString, setSearchString ] = useState ('')


 const changeSearchString = tasks.filter(task => {
  return task.title.toLowerCase().includes(searchString.toLowerCase()) || task.description.toLowerCase().includes(searchString.toLowerCase()) || task.category.toLowerCase().includes(searchString.toLowerCase())
 })

 const getTask = () => {
  fetch( "http://localhost:9292/tasks" )
    .then( resp => resp.json() )
    .then( data => setTasks( data ) )
 }

  useEffect(() => {
    getTask()
  }, [])

  // update tasks 
  function handleUpdateTask() {
    // const updatedTasks = tasks.map((task) => {
    //   if (task.id === updatedTaskObj.id) {
    //     return updatedTaskObj
    //   } else {
    //     return task
    //   }
    // })
    // setTasks(updatedTasks) 
    getTask()
  }

  // delete task card function
  function deleteTask() {
    // const updatedTasks = tasks.filter((task) => task.id !== id);
    // setTasks(updatedTasks)
    getTask()
  }
  
  const handleAddTask = (addedTask) => {
    setTasks([ ...tasks, addedTask])
  }
  
  return (
    <div className="App">
      <Header setSearchString = { setSearchString } />
      <Home  taskList = {changeSearchString}
        handleAddTask={handleAddTask}
        deleteTask = {deleteTask}
        handleUpdateTask = {handleUpdateTask}
      />
      <Footer />
    </div>
  );
}

export default App;
