import React from 'react';

const RideInfoScreen = ({ onStart }) => {
  return (
    <div className="screen">
      <h2>Ride Info</h2>
      <p><strong>Captain:</strong> John Doe</p>
      <p><strong>Vehicle No.:</strong> UP32 AB 9876</p>
      <p><strong>Estimated Time:</strong> 7 mins</p>
      <button onClick={onStart}>Start Ride</button>
    </div>
  );
};

export default RideInfoScreen;
