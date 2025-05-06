import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import RideInfoScreen from './components/RideInfoScreen';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [screen, setScreen] = useState('splash');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScreen('home'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookRide = () => {
    if (pickup && drop) setScreen('ride');
    else alert('Please enter both Pickup and Drop locations!');
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {screen === 'splash' && <SplashScreen />}
      {screen === 'home' && (
        <HomeScreen
          pickup={pickup}
          drop={drop}
          setPickup={setPickup}
          setDrop={setDrop}
          onBook={handleBookRide}
        />
      )}
      {screen === 'ride' && <RideInfoScreen onStart={() => alert('Ride Started!')} />}
    </div>
  );
}

export default App;
