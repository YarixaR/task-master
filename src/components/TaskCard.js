import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import React,{useState} from 'react';



function TaskCard({ task, deleteTask }) {

    const [ clicked, setClicked ] = useState(true)

    const handleCard = () => {
        setClicked(clicked => !clicked)
    }

    const boxDefault = {
        padding: 1,
        m: 0
    };

    // delete task card DELETE request
    function deleteTaskClick() {
        fetch(`http://localhost:9292/tasks/${task.id}`, { method: 'DELETE' })

        deleteTask(task.id)
    }
  
    return(
        <div className= 'card'>

            <CssBaseline />
            <GlobalStyles
            styles={{
                body: { backgroundColor: "white" },
            }}
            />
            <Grid item xs={3}>
                <Box
                sx={{
                    display: 'grid',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 7,
                    align: 'center',
                    width: 250,
                    height: 200,
                    bgcolor: 'white',
                    height: '150px',
                    '&:hover': {
                        backgroundColor: '#c9c4e0',
                        opacity: [0.7, 0.9, 0.7]  
                            },
                            },
                    }}>

                    <Paper elevation={3} onClick={ handleCard }>
                        <Typography align='center' color='textPrimary' variant="h6">{ task.title }</Typography>
                        <Typography align='center'> {task.description}</Typography>
                        <Typography align='center'>{ clicked ? task.category : <strong>Task Done</strong> }</Typography>
                            <Stack
                            direction="row"
                            spacing={1}
                            justifyContent='flex-end'
                            sx={boxDefault}
                            >
                                <Chip
                                className="button"
                                label="Trash"
                                onClick={deleteTaskClick}
                                
                                deleteIcon={<DeleteIcon />}
                                variant="outlined"
                                />
                            </Stack>
                    </Paper>
                </Box>
            </Grid>  
        </div>
    )
}

export default TaskCard;