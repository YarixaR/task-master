import { useState } from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import Popover from '@mui/material/Popover';
import { Input } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));



function EditTask({ task, handleTaskUpdate, user }) {
    const { id, title, description } = task
    const [ titleUpdate, setTitleUpdate ] = useState(title)
    const [ descriptionUpdate, setDescriptionUpdate] = useState(description)


    // const [anchorEl, setAnchorEl] = useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);
    // const di = open ? 'simple-popover' : undefined;

    function handleFormSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:9292/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                user_id: user,
                id: id,
                title: titleUpdate,
                description: descriptionUpdate 
            }),
            })    
                .then((resp) => resp.json())
                .then((newObj) => handleTaskUpdate(newObj))
    }  
    
    return(
        <form onSubmit={handleFormSubmit}>

            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: 200,
                height: 200,
                },
            }}
            >
            
            <Item elevation={3} >{
                <div>
                    <Input
                        disableUnderline
                        type="text"
                        name = "title"
                        value={titleUpdate}
                        onChange = {(e) => setTitleUpdate(e.target.value)}
                    />
                    <Input
                        disableUnderline
                        type="text"
                        name = "description"
                        value={descriptionUpdate}
                        onChange = {(e) => setDescriptionUpdate(e.target.value)}
                    />
                    <Input type="submit" value="save"/>
                </div>
            }</Item>
            
            </Box>



            
        </form>
    )
}

export default EditTask