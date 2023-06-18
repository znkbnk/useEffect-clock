//Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Clock</h1>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Clock />
    </div>
  );
};

export default App;
