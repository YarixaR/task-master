
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

function Footer() {


  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar
            alt="linkedin"
            src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
            sx={{ width: 30, height: 30 }}
        />
      </ListItemAvatar>
      <Link href="https://www.linkedin.com/in/remberto-villar/" underline="hover">
        {'Remberto'}
        </Link>
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar
            alt="linkedin"
            src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
            sx={{ width: 30, height: 30 }}
        />
      </ListItemAvatar>
      <Link href="https://www.linkedin.com/in/austin-c-wells/" underline="hover">
        {'Austin'}
        </Link>
    </ListItem>
    <ListItem>
      <ListItemAvatar>
        <Avatar
            alt="linkedin"
            src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
            sx={{ width: 30, height: 30 }}
          />
      </ListItemAvatar>
      <Link href="https://www.linkedin.com/in/yarixa-rodriguez/" underline="hover">
        {'Yarixa'}
        </Link>
    </ListItem>
  </List>
   
  )
}
export default Footer