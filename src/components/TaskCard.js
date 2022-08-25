import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import React,{useState} from 'react';
import EditTask from './EditTask';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const styling = {
    backgroundImage: "url('https://i.pinimg.com/564x/f4/9a/19/f49a19e67dfcb5061eadaada090b96d4.jpg')",

  }

function TaskCard({ task, deleteTask, handleUpdateTask }) {

    const [ clicked, setClicked ] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [ list, setList ] = useState('');


    const handleCard = () => {
        setClicked(clicked => !clicked)
    }

    // const handleListChange = (event) => {
    //     setList(event.target.value);
    //   };

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

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = (e) => {
        setAnchorEl(null);
        setList(e.target.value)

      };


      
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
                        <Paper elevation={3} style={styling}
                            // onClick={ handleCard }
                            onClick={handleUpdateTask}
                        >   
                            {/* editing test button */}
                            <EditIcon
                                onClick={() => setIsEditing((isEditing) => !isEditing)}
                            >
                            </EditIcon>


                            <Typography align='center' color='textPrimary' variant="h6">{ task.title }</Typography>
                            <Typography style={{wordWrap: "break-word"}} align='center'> {task.description}</Typography>
                            <Typography align='center'>{ clicked ? task.category : <strong>Task Done</strong> }</Typography>
                            <Divider variant="middle" />
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
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Theme
                                </Button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}><Button value="url('https://i.pinimg.com/564x/dd/42/f8/dd42f8648396e2ff22bd91c4fabc2150.jpg')" style={{backgroundColor:"#ff5252"}} variant="contained" sx={ { borderRadius: 28 } }>red</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button style={{backgroundColor:"#000000"}} variant="contained" sx={ { borderRadius: 28 } }>blue</Button></MenuItem>
                                    <MenuItem onClick={handleClose}><Button style={{backgroundColor:"#ff5252"}} variant="contained" sx={ { borderRadius: 28 } }>green</Button></MenuItem>
                                </Menu>
                        </Paper>
                    </div>
                </Box>
            </Grid>
            )}
        </div>
    )
}

export default TaskCard;