import React, { useState } from 'react';
import { TextField, Autocomplete, Button, Typography } from '@mui/material';

const fruits = [' ','Apple', 'Banana', 'Orange',]; // Your list of fruits

const App222 = () => {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [greeting, setGreeting] = useState('');

  const handleSubmit = () => {
    if (name && selectedFruit) {
      setGreeting(`Hello, ${name}! Your favorite fruit is ${selectedFruit}.`);
    }
  };

  return (
    <div>
      <TextField
        variant='standard'
        id="name"
        label="Name:"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    
      <Autocomplete
        id="autocomplete"
        options={fruits}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField {...params} label="Choose a fruit" />
        )}
        onChange={(_, value) => setSelectedFruit(value)}
        value="Apple"
      />

      <Button data-testid="button" variant="contained" color="primary" onClick={handleSubmit}>
        SUBMIT
      </Button>

      {greeting && <Typography variant="body1">{greeting}</Typography>}
    </div>
  );
};

export default App222;
