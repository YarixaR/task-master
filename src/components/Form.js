import { useState, useRef } from 'react';
import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';


function Form({ handleAddTask }) {
    const [ content, setContent ] = useState('')
    const [ description, setDescription ] = useState('')


    function handleSubmit(e) {
        e.preventDefault() 

        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({  
                user_id: '',
                title: content,
                description: description
            })
        })
            .then((resp) => resp.json())
            .then((newObj) => {
               
            handleAddTask(newObj) 
            })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField 
                    placeholder="Title"
                    variant="standard"
                    style={{ marginBottom: 10 }}
                    name='title'
                    onChange={(e) => setContent(e.target.value)}
                />
                <TextField
                    placeholder="Write a task..."
                    variant="standard"
                    name='description'
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}


export default Form