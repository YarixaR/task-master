import { useState } from 'react';
import { Box, IconButton, Input } from '@mui/material';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`

function Form({ handleAddTask }) {
    const [ content, setContent ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ category, setCategory ] = useState('');

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
                description: description,
                category: category
            })
        })
            .then((resp) => resp.json())
            .then((newObj) => {
               
            handleAddTask(newObj)
            console.log(newObj)
            })
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
      };
    
    return(
        <div>
            <div>
                {/* this is being tested */}
                <Container>
                    <Stack direction="row" spacing={2}>

                        <Button color="error" variant="contained" sx={ { borderRadius: 28 } } > <PanoramaFishEyeIcon/> </Button>
                        <Button variant="contained" sx={ { borderRadius: 28 } } ></Button>
                        <Button variant="contained" sx={ { borderRadius: 28 } } ></Button>
                        <Button variant="contained" sx={ { borderRadius: 28 } } ></Button>
                    </Stack>
                    
                </Container>
            </div>

             <Container> 
                <form onSubmit={handleSubmit}>
                    <Stack>
                        <Input
                            required
                            placeholder="Title"
                            variant="standard"
                            disableUnderline
                            style={{ marginBottom: 10 }}
                            name='title'
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Input
                            placeholder="Write a task..."
                            maxRows={Infinity}
                            variant="standard"
                            name='description'
                            disableUnderline
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Stack>
                    <Box m={1}
                        display="flex"
                        justifyContent="flex-end">

                        <FormControl>
                        <FormLabel >Category</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={category}
                            onChange={handleCategoryChange}>
                            
                                <FormControlLabel control={<Radio size="small" value="food" />} label="food" />
                                <FormControlLabel control={<Radio size="small" value="park" />} label="park" />
                                <FormControlLabel control={<Radio size="small" value="cook" />} label="cook" />
                                <FormControlLabel control={<Radio size="small" value="other" />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <Button 
                            type='submit' 
                            size="small"
                            variant="text"
                            >
                                submit
                        </Button>
                    </Box>
                </form>
            </Container>
        </div>
    )
}


export default Form