import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React,{useState} from 'react';
import EditTask from './EditTask';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import FormLabel from '@mui/material/FormLabel';


function TaskCard({ task, deleteTask, handleUpdateTask, user }) {

    const [isEditing, setIsEditing] = useState(false)
    const [isColor, setIsColor ] = useState('')

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
        setIsColor(e.target.value)
        
    }
    // images
     const img1 = "url('https://pbs.twimg.com/media/EdXKPojUwAAIV9d.jpg:large')"
     const img2 = "url('https://i.pinimg.com/564x/0e/21/c7/0e21c7815b48ba573224a884f43226a4.jpg')"
     const img3 = "url('https://i.pinimg.com/564x/fc/3b/7e/fc3b7e8a3de6b383e96521883887fde3.jpg')"
     const img4 = "url('https://i.pinimg.com/564x/7a/60/40/7a6040da459f8e7eac769860dc140da0.jpg')"
     const img5 = "url('https://i.pinimg.com/564x/4b/e5/ba/4be5baab26da8eb93a8f5d75e74269aa.jpg')"
 

    return(
        <div >
            <CssBaseline />
            <GlobalStyles
            styles={{
                body: { backgroundColor: "white"
             },
            }}
            />
            {isEditing ? ( 
                <EditTask 
                    user = {user}
                    task = {task} 
                    handleTaskUpdate = {handleTaskUpdate}
                /> 
            ) : (

            <Grid item xs={2} >
                <Box
                sx={{
                    pl: "10rem",
                    display: 'grid',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 7,
                    // align: 'center',
                    width: 250,
                    bgColor: 'white',
                    height: '120px',
                    '&:hover': {
                        // backgroundColor: '#c9c4e0',
                        // opacity: [0.7, 0.9, 0.7]  
                            },
                            },
                    }}>
                    <div>
                        <Paper 
                            elevation={3} 
                            style={{backgroundImage: isColor,
                            backgroundColor: isColor,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover" }}
                            // onClick={ handleCard }
                            onClick={handleUpdateTask}
                        >   
                            {/* editing test button */}
                            <EditIcon
                                onClick={() => setIsEditing((isEditing) => !isEditing)}
                            >
                            </EditIcon>
                            {/* Content of card */}

                            <Typography align='center' color='textPrimary' variant="h4">{ task.title }</Typography>
                            <Typography style={{wordWrap: "break-word",}} align='center' variant="h6"> {task.description}</Typography>

                            <Divider variant="middle" />
                            <FormLabel sx={{pl: "100px"}}>{task.category}</FormLabel>
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
                                    <MenuItem onClick={handleClose}><Button value= {img1} style={{backgroundImage: img1 }} variant="contained" sx={ { borderRadius: 28 } }>Party</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button value= {img2} style={{backgroundImage: img2 }} variant="contained" sx={ { borderRadius: 28 } } >Cloud</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button value= {img3} style={{backgroundImage: img3 }} variant="contained" sx={ { borderRadius: 28 } } >Moon</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button value= {img4} style={{backgroundImage: img4 }} variant="contained" sx={ { borderRadius: 28} } >Blue</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button value= {img5} style={{backgroundImage: img5 }} variant="contained" sx={ { borderRadius: 28} } >Blue</Button></MenuItem>
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