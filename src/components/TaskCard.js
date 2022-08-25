import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import EditTask from './EditTask';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function TaskCard({ task, deleteTask, handleUpdateTask }) {

    const [ clicked, setClicked ] = useState(true)
    const [isEditing, setIsEditing] = useState(false)

    // const handleCard = () => {
    //     setClicked(clicked => !clicked)
    // }

    const boxDefault = {
        padding: 1,
        m: 0
    };

    // delete task card DELETE request
    function deleteTaskClick() {
        fetch(`http://localhost:9292/tasks/${task.id}`, 
        { method: 'DELETE' })
        deleteTask(task.id)
    }

    function handleTaskUpdate(updatedMessage) {
        setIsEditing(false);
        handleUpdateTask(updatedMessage);
      }

    return(
        <div className= 'card'>

            <CssBaseline />
            <GlobalStyles
            styles={{
                body: { backgroundColor: "white" },
            }}
            />
            {isEditing ? ( 
                <EditTask 
                    task = {task} 
                    handleTaskUpdate = {handleTaskUpdate}
                /> 
            ) : (

            <Grid item xs={3}>
                <Box
                sx={{
                    display: 'grid',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 7,
                    align: 'center',
                    width: 300,
                    height: 300,
                    bgColor: 'white',
                    Height: '150px',
                    '&:hover': {
                        // backgroundColor: '#c9c4e0',
                        // opacity: [0.7, 0.9, 0.7]  
                            },
                            },
                    }}>
                    <div>
                        <Paper elevation={3} style={{backgroundColor: "#673ab7"}}
                            // onClick={ handleCard }
                            onClick={handleUpdateTask}
                        >   
                            {/* editing test button */}
                            <EditIcon
                                onClick={() => setIsEditing((isEditing) => !isEditing)}
                            >
                            </EditIcon>


                            <Typography align='center' color='textPrimary' variant="h6">{ task.title }</Typography>
                            <Typography noWrap paragraph align='left'> {task.description}</Typography>
                            <Typography align='center'>{ clicked ? task.category : <strong>Task Done</strong> }</Typography>
                                <Stack
                                direction="row"
                                spacing={1}
                                justifyContent='flex-end'
                                sx={boxDefault}
                                >
                                    <DeleteForeverIcon
                                    className="button"
                                    onClick={deleteTaskClick}
                                    variant="outlined"
                                    />
                                </Stack>
                        </Paper>
                    </div>
                </Box>
            </Grid>
            )}
        </div>
    )
}

export default TaskCard;