import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';


function App() {

  useEffect(() => {
    fetch( "http://localhost:9292/users/1" )
    .then( resp => resp.json() )
    .then( data => setTasks( data ) )
  }, [])

  const [ tasks, setTasks ] = useState({"tasks":[]})

  return (
    <div className="App">
      <Header />
      
      <Home  taskList = {tasks}/>
      <Footer />
    </div>
  );
}

export default App;