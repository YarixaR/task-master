import TaskCard from "./TaskCard"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue,
  },
});


function Home({ taskList }) {
    
    

    
    const taskItems = taskList.map(task => {
    
        return <TaskCard
            key = {task.id}
            task = {task}
        />
        
    })

    return (
        <div>
            <Container>
                <Grid container spacing={5}>
                { taskItems }
                </Grid>
            </Container>
        </div>
    )
}

export default Home