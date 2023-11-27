import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import Foot from "./Footer";
import Footer from "../new Footer";

const destinations = [
  {
    id: 1,
    name: 'Concerts',
    label:'Book Now',
    image:'https://getwallpapers.com/wallpaper/full/5/1/b/901387-cool-ultra-music-festival-wallpapers-2048x1365-pc.jpg',
  },
  {
    id: 2,
    name: 'Wedding',
    label:'Book Now',

    image: 'https://th.bing.com/th/id/OIP.9M8g3opQ9EJkIw5TdngIOQHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    name: 'Charity',
    label:'Book Now',

    image: 'https://th.bing.com/th/id/OIP.Us6hlqUiMFEM9qhekNLBKwHaE8?rs=1&pid=ImgDetMain', // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Project-Expo',
    label:'Book Now',

    image: 'https://finedesignassociates.com/wp-content/uploads/IMG_0932-1.jpg',
  },
  {
    id: 5,
    name: 'Sports event',
    label:'Book Now',

    image: 'https://i.ytimg.com/vi/0rUWaZbCTvE/maxresdefault.jpg',
  },
  {
    id: 6,
    name: 'Festivals',
    label:'Book Now',

    image: 'https://wallpapercave.com/wp/wp8783094.jpg',
  },
];
const Header3 = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
const [event,setEvent]=useState(null);
  return ( 
     <div>
      
                 <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' ,borderRadius:5}}>
        {destinations.map((destination) => (
            <Grid item key={destination.id}>
            <Card style={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
                />
              <CardContent>
                <Typography variant="h6" component="div">
                  {destination.name}<br></br>
                </Typography>
                  <Link to="/sig">
                  <Button variant="contained">{destination.label}</Button>
              </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div>
          <Footer/>
        </div>
        </div>
  );
};
export default Header3;