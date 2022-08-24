import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


function TaskCard ({ task }) {

    return(
        <div className= 'card'>

            <CssBaseline />
                <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 200,
                        height: 200,
                        bgcolor: '#cfe8fc',
                        height: '100vh' 
                        },
                    }}>

                    <Paper elevation={3}>
                        <Typography>Title:{ task.title }</Typography> 
                        <p className="task-description">Description:{ task.description }</p>
                        <p className="task-category">Category:{ task.category }</p> 
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}

export default TaskCard;