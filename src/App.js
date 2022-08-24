import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';




function App() {


  const [ searchString, setSearchString ] = useState ('')
  const [ tasks, setTasks ] = useState([])

 

 const changeSearchString = tasks.filter(task => {
  return task.title.toLowerCase().includes(searchString.toLowerCase()) || task.description.toLowerCase().includes(searchString.toLowerCase()) || task.category.toLowerCase().includes(searchString.toLowerCase())
 })
  

  useEffect(() => {
    fetch( "http://localhost:9292/tasks" )
    .then( resp => resp.json() )
    .then( data => setTasks( data ) )
  }, [])

  

  

  return (
    <div className="App">
      <Header setSearchString = { setSearchString }/>
      <Home  taskList = {changeSearchString}/>
      <Footer />
    </div>
  );
}

export default App;
