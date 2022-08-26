import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {useEffect, useState} from 'react';

// import { GlobalStyles } from '@mui/styled-engine';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [ user, setUser ] = useState(1)

  const changeSearchString = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchString.toLowerCase()) ||
      task.description.toLowerCase().includes(searchString.toLowerCase()) ||
      task.category.toLowerCase().includes(searchString.toLowerCase())
    );
  });


  console.log(user)


  const getTask = () => {
    fetch(`http://localhost:9292/users/${user}`)
      .then((resp) => resp.json())
      .then((data) => setTasks(data.tasks));
  };

  useEffect(() => {
    getTask();
  }, [user]);

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
    getTask();
  }

  // delete task card function
  function deleteTask() {
    // const updatedTasks = tasks.filter((task) => task.id !== id);
    // setTasks(updatedTasks)
    getTask();
  }

  const handleAddTask = (addedTask) => {
    setTasks([...tasks, addedTask]);
  };

  //   Test code
  // const [ user, setUser ] = useState([])

  // const getUser = () => {
  // 	fetch( `http://localhost:9292/users/2` )
  // 	  .then( resp => resp.json() )
  // 	  .then( userObj => setUser( userObj ) )
  //    }

  //    useEffect(() => {
  //     getUser()
  //   }, [])

  // console.log(user.tasks)

  return (
    <div className="App">
      <Header setSearchString={setSearchString}
      setUser={setUser} />
      <Home
        user={user}
        taskList={changeSearchString}
        handleAddTask={handleAddTask}
        deleteTask={deleteTask}
        handleUpdateTask={handleUpdateTask}
      />
     
    </div>
  );
}

export default App;
