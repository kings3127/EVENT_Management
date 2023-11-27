import React from 'react';
import { BrowserRouter, Link, Routes, Route,Navigate} from 'react-router-dom';
import LoginPage from './new';
import FormPropsTextFields from './new reg';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the profile icon
import AboutUs from './new about';
import ProfilePage from './Profile';
import Service from './services';
import Gallery from './Gallery';
import Header333 from '../newhooomw';
import EventForm from '../Event';
import EventForm11 from '../Events1';

const Navbar2 = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to='/HomePage' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </Typography>
          <Button color="inherit" style={{ fontSize: '1.3rem', textTransform: 'none', marginRight: '20px'  }}>
            <Link to='/ServicePage' style={{ textDecoration: 'none', color: 'white' }}>Services</Link>
          </Button>
          <Button color="inherit" style={{ fontSize: '1.3rem' , textTransform: 'none' , marginRight: '20px'}}>
            <Link to='/GalleryPage' style={{ textDecoration: 'none', color: 'white' }}>Gallery</Link>
          </Button>
          <Button color="inherit" style={{ fontSize: '1.3rem', textTransform: 'none' , marginRight: '20px' }}>
            <Link to='/AboutPage' style={{ textDecoration: 'none', color: 'white' }}>About</Link>
          </Button>
          <Button color="inherit" style={{ fontSize: '1.3rem', textTransform: 'none' , marginRight: '20px'}}>
            <Link to='/SignInPage' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
          </Button>
          <IconButton edge="end" color="inherit"> {/* Add the profile icon */}
          <Link to='/Profile' style={{ textDecoration: 'none', color: 'white',fontSize: '2rem' }}> <AccountCircleIcon /></Link>
          </IconButton>
        </Toolbar>
      </AppBar>

      
  
     
      <Routes>
        <Route exact path='/HomePage' element={<Header333/>}></Route>
        <Route exact path='/SigninPage' element={<LoginPage/>}></Route>
        <Route exact path='/SignUpPage' element={<FormPropsTextFields/>}></Route>
        <Route exact path='/ServicePage' element={<Service/>}></Route>
        <Route exact path='/GalleryPage' element={<Gallery/>}></Route>
        <Route exact path='/AboutPage' element={<AboutUs/>}></Route>
        <Route exact path='/Profile' element={<ProfilePage/>}></Route>
        <Route exact path='/Event' element={<EventForm/>}></Route>
        <Route exact path='/Event1' element={<EventForm11/>}></Route>
        <Route path='/' element={<Navigate to='/HomePage' replace />} />
      </Routes>
    </div>
  );
};

export default Navbar2;
