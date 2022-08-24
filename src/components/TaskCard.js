import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
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
                {/* <Container maxWidth="sm"> */}
                <Grid item xs={3}>
            <Box
                sx={{
                    display: 'grid',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 8,
                    align: 'center',
                    width: 200,
                    height: 200,
                    bgcolor: 'white',
                    height: '150px',
                    '&:hover': {
                        backgroundColor: '#eff4ff',
                        opacity: [0.7, 0.9, 0.7],
                        
                        
                      },
                    },
                }}>

                <Paper elevation={3} onClick={ handleCard }>
                    <Typography align='center' color='primary' variant="h6">{ task.title }</Typography>
                    <Typography align='center'>{ clicked ? task.description : task.category }</Typography>
                    {/* <Typography align='center'>Category:{ task.category }</Typography> */}
                    <Stack
                    
                    direction="row"
                    spacing={1}
                    justifyContent='flex-end'
                    sx={boxDefault}
                     >
                    <Chip
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
             {/* </Container> */}
        </div>
    )
}

export default TaskCard;