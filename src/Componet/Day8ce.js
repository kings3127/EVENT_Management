
import React, { useState, useEffect } from 'react';

function Func() {
  const [message, setMessage] = useState('Hello dear one, learning React...?');

  useEffect(() => {
    console.log('useEffect hook called');

    const timer = setTimeout(() => {
      setMessage('Great.... This is time to learn about HOOKS');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default Func;