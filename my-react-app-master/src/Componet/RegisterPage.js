import React from 'react';
import { Button, TextField, Container } from '@material-ui/core';

const Register = () => {
  return (
    <Container maxWidth="xs">
      <h1>Register</h1>
      <form>
        <TextField id="name" label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField id="password" label="Password" type="password" variant="outlined" fullWidth margin="normal" />
        <TextField id="confirm-password" label="Confirm Password" type="password" variant="outlined" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1em' }}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
