import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="toggle">
      <label>
        <input
         className='toggle-checkbox'
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </label>
    </div>
  );
};

export default ThemeToggle;
