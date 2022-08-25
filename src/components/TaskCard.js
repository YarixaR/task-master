import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import EditTask from './EditTask';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function TaskCard({ task, deleteTask, handleUpdateTask }) {

    const [ clicked, setClicked ] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [color, setColor ] = useState('')

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

    //  test code 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null)
        setColor(e.target.value)
        
    }

    // images
    const img1 = "url('https://pbs.twimg.com/media/EdXKPojUwAAIV9d.jpg:large')"

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
                    width:"300px",
                    height: "300px",
                    bgColor: 'white',
                    Height: '150px',
                    '&:hover': {
                        // backgroundColor: '#c9c4e0',
                        // opacity: [0.7, 0.9, 0.7]  
                            },
                            },
                    }}>
                    <div>
                        <Paper elevation={3} style={{backgroundImage: color}}
                            // onClick={ handleCard }
                            onClick={handleUpdateTask}
                        >   
                            {/* editing test button */}
                            <EditIcon
                                onClick={() => setIsEditing((isEditing) => !isEditing)}
                            >
                            </EditIcon>
                            {/* Content of card */}
                            <Typography align='center' color='textPrimary' variant="h6">{ task.title }</Typography>
                            <Typography style={{wordWrap: "break-word"}} align='center'> {task.description}</Typography>
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

                            {/* Test code */}
                            <div>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    theme
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={handleClose} ><Button value= {img1} style={{backgroundImage: img1 }} variant="contained" sx={ { borderRadius: 28 } }> red </Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button style={{backgroundColor: "#e040fb" }} variant="contained" sx={ { borderRadius: 28 } } >color</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button style={{backgroundColor: "#90caf9" }} variant="contained" sx={ { borderRadius: 28 } } >color</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button style={{backgroundColor: "#90caf9" }} variant="contained" sx={ { borderRadius: 28 } } >color</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button style={{backgroundColor: "#90caf9" }} variant="contained" sx={ { borderRadius: 28 } } >color</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button style={{backgroundColor: "#90caf9" }} variant="contained" sx={ { borderRadius: 28 } } >color</Button></MenuItem>
                                </Menu>
                            </div>
                        </Paper>
                    </div>
                </Box>
            </Grid>
            )}
        </div>
    )
}

export default TaskCard;