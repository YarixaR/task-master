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




function TaskCard ({ task }) {

    const [ clicked, setClicked ] = useState(true)

    const handleCard = () => {
        setClicked(clicked => !clicked)
    }


    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    
      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };


    const boxDefault = {
        padding: 1,
        m: 0
    };

    return(


        <div className= 'card'>

            <CssBaseline />
            <GlobalStyles
            styles={{
                body: { backgroundColor: "#181c20" },
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
                                onClick={handleClick}
                                onDelete={handleDelete}
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