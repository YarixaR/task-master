import TaskCard from "./TaskCard"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import Form from "./Form"
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    primary: blue,
  },
});   



function Home({ taskList, handleAddTask, deleteTask, handleUpdateTask, user  }) {
   
    const taskItems = taskList.map(task => {
        return <TaskCard
            user={user}
            key = {task.id}
            task = {task}
            deleteTask = {deleteTask}
            handleUpdateTask = {handleUpdateTask}
        />
        
    })

    return (
        <div>
            <Form 
                user={user}
                handleAddTask={handleAddTask}
            />
            <Container>
                <Grid container spacing={5}>
                { taskItems }
                </Grid>
            </Container>
        </div>
    )
}

export default Home