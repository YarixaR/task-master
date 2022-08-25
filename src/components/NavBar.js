import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));







  export default function NavBar ({ setSearchString }) {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
   
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:"#000000" }}>
          <Toolbar>
          <Avatar
              alt="cute cat"
              src="https://i.pinimg.com/564x/ef/62/9a/ef629a6a997f2b47e49aecb0c86b8af1.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <LinkedInIcon color="inherit" onClick={handleClick} >
            </LinkedInIcon>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              <MenuItem><Link href="https://www.linkedin.com/in/remberto-villar/" underline="hover">{'Remberto'}</Link></MenuItem>
              <MenuItem><Link href="https://www.linkedin.com/in/austin-c-wells/" underline="hover">{'Austin'}</Link></MenuItem>
              <MenuItem><Link href="https://www.linkedin.com/in/yarixa-rodriguez/" underline="hover">{'Yarixa'}</Link></MenuItem>
            </Box>
          </Fade>
        )}
      </Popper>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              TASK MASTER
            </Typography>
            <Search onChange={(e) => setSearchString(e.target.value)}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
