// profile.js
import React, { useContext } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

const ProfilePage = () => {
  const username = useContext(UserContext);
  const usernname="Jeevan"
  const number="9344491338"
  const email="727722euit072@skcet.ac.in"

  const styles = {
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '10px',
      minHeight: '100vh',
      backgroundImage:`url(https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
    },
    profileIcon: {
      fontSize: '100px',
      color:'blue'
    },
    profileBox: {
      display: 'flex',
      flexDirection: 'column',
      
      border: '1px solid black',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#f0f0f0',
    },
  };

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileBox}>
        <AccountCircleIcon style={styles.profileIcon} sx={{ml:'100px'}}/>
        <h2 >{usernname}</h2>
        <h2>{number}</h2>
        <h2>{email}</h2>
        
        <button>
          <Link to='/SignInPage'>Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
