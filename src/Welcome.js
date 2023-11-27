import { Paper } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(true);
  };

  return (
    !isButtonClicked && (
        <Paper style={{justifyContent:'center',alignItems:'center'}}>
      <div>
        <h1>Welcome to Our Website!</h1>
        <p>We're glad to have you here. Click the button below to get started.</p>
        <button onClick={handleClick}>
          <Link to='/HomePage'>Get Started</Link>
        </button>
      </div>

        </Paper>
    )
  );
}

export default WelcomePage;
