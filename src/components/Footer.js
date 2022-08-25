
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Container } from '@mui/system';
import Container from '@mui/material/Container';
function Footer() {
  const [value, setValue] = useState(0);


  return (

    <div>
      <Container>
        <Box sx={{ width: 500, pt: "50px", pl: "35rem" }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </Container>
    </div>





    // <div>
    //   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar
    //             alt="linkedin"
    //             src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
    //             sx={{ width: 30, height: 30 }}
    //         />
    //       </ListItemAvatar>
    //       <Link href="https://www.linkedin.com/in/remberto-villar/" underline="hover">
    //         {'Remberto'}
    //         </Link>
    //     </ListItem>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar
    //             alt="linkedin"
    //             src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
    //             sx={{ width: 30, height: 30 }}
    //         />
    //       </ListItemAvatar>
    //       <Link href="https://www.linkedin.com/in/austin-c-wells/" underline="hover">
    //         {'Austin'}
    //         </Link>
    //     </ListItem>
    //     <ListItem>
    //       <ListItemAvatar>
    //         <Avatar
    //             alt="linkedin"
    //             src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
    //             sx={{ width: 30, height: 30 }}
    //           />
    //       </ListItemAvatar>
    //       <Link href="https://www.linkedin.com/in/yarixa-rodriguez/" underline="hover">
    //         {'Yarixa'}
    //         </Link>
    //     </ListItem>
    //   </List>
    // </div>
  )
}
export default Footer