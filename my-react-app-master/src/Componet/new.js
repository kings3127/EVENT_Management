// import * as React from 'react';
// import { useState,useEffect } from 'react';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Chip from '@mui/material/Chip';
// import {Link} from 'react-router-dom';
// import { Typography } from '@mui/material';
// import { TextField ,Button} from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 
// import ProfilePage from './Profile';




// const Root = styled('div')(({ theme }) => ({
//   width: '100%',
//   ...theme.typography.body2,
//   '& > :not(style) ~ :not(style)': {
//     marginTop: theme.spacing(2),
//   },
// }));







// function Loginpage() {
//   const navigate = useNavigate();
//   //const id = null;

//   //const contextID = React.createContextContext()
//  const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [helperText, setHelperText] = useState('');
//   const [users, setUsers] = useState([]);
  
// {/* <contextID.provider value={id}>
//   {<ProfilePage/>}
// </contextID.provider>
//    */}
//   useEffect(() => {
//     fetch('http://localhost:3001/user')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (username.trim() && password.trim()) {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   }, [username, password]);

//   const handleLogin = () => {
//     const user = users.find((user) => user.name === username && user.password === password);
//     if (user) {
     
  

//       setHelperText('Login Successful');
//       setTimeout(() => {
//         navigate('/HomePage');
//       }, 2000);
    

//     } 
//     else {
//       setHelperText('Incorrect username or password');
//     }
//   };
//   return (
//     <div>
//         <body className='total' style={{ backgroundImage: `url()`, backgroundSize: 'cover' }}>
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "93vh" }}>
//             <Box className='aa'
//             component="form"
//             sx={{
//                 '& .MuiTextField-root': { m: 1, width: '30ch' },
//                 border: '2px solid black',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.8)',
//             }}
//             noValidate
//             autoComplete="off"
//             >
//             <div className='icon' style={{ textAlign: 'center' }}>
//                 <AccountCircleIcon sx={{fontSize:"80px",color:'blue'}} />
//                 <h2>Sign In</h2>
//             </div>
//             <div id="a">
//                 <TextField
//                  label="Username"
//                  onChange={(e) => setUsername(e.target.value)}
                 
//                 />
//                 <br/>
//                 <TextField
//                  label="Password"
//                  type="password"
//                  onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <br/>
//                 <br/>
//                 <div style={{ display: 'flex', justifyContent: 'center' ,flexDirection:'column',alignItems:'center'}}>
//                 <Button 
//                   variant="contained"
//                   color="primary"
//                   disabled={isButtonDisabled}
//                   onClick={handleLogin}
//                style={{ width: '20ch', height: '50px', backgroundColor: 'blue', color: 'white', borderRadius: '25px' }}>
               
//                   <b>SIGN IN</b>
//                   </Button>
//                 <br/>
//                 <Typography>
//                   {helperText}
//                 </Typography>
//                 </div>
//                 <br/>
//                 <Root>
//                 <Divider>
//                     <Chip label="OR" className='PP' />
//                 </Divider>
//                 </Root>
//                 <h4>New user?</h4>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                 <button 
                
//                 style={{ width: '20ch', height: '50px', backgroundColor: 'blue', color: 'white', borderRadius: '25px' }}>
//                     <Link to='/SignUpPage' style={{ textDecoration: 'none', color: 'white' }}>
//                         <b>SIGN UP</b>
//                     </Link>
//                 </button>
//                 </div>
     
//             </div>
//             </Box>
//         </div>
//         </body>
//     </div>
//   );
// }
// export default Loginpage;



// login.js
// login.js
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chip from '@mui/material/Chip';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { TextField, Button } from '@mui/material';
import UserContext from './UserContext';


const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/user')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    const user = users.find((user) => user.name === username && user.password === password);
    if (user) {
      setHelperText('Login Successful');
      // Set the username in the context
      setUsername(username);
      setTimeout(() => {
        navigate('/HomePage');
      }, 2000);
    } else {
      setHelperText('Incorrect username or password');
    }
  };

  return (
    <UserContext.Provider value={username}>
      <div style={{backgroundImage:`url(https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
      <body className='total' style={{ backgroundImage: `url()`, backgroundSize: 'cover' }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "93vh" }}>
          <Box className='aa'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30ch' },
              border: '2px solid black',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
            noValidate
            autoComplete="off"
          >
            <div className='icon' style={{ textAlign: 'center' }}>
              <AccountCircleIcon sx={{ fontSize: "80px", color: 'blue' }} />
              <h2>Sign In</h2>
            </div>
            <div id="a">
              <TextField
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <TextField
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isButtonDisabled}
                  onClick={handleLogin}
                  style={{ width: '20ch', height: '50px', backgroundColor: 'blue', color: 'white', borderRadius: '25px' }}>
                  <b>SIGN IN</b>
                </Button>
                <br />
                <Typography>
                  {helperText}
                </Typography>
              </div>
              <br />
              <Root>
                <Divider>
                  <Chip label="OR" className='PP' />
                </Divider>
              </Root>
              <h4>New user?</h4>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  style={{ width: '20ch', height: '50px', backgroundColor: 'blue', color: 'white', borderRadius: '25px' }}>
                  <Link to='/SignUpPage' style={{ textDecoration: 'none', color: 'white' }}>
                    <b>SIGN UP</b>
                  </Link>
                </button>
              </div>
            </div>
          </Box>
        </div>
      </body>
    </div>
    </UserContext.Provider>
  );
}

export default Loginpage;


