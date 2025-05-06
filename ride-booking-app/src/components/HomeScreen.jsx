import React from 'react';

const HomeScreen = ({ pickup, drop, setPickup, setDrop, onBook }) => {
  return (
    <div className="screen">
      <h2>Book Your Ride</h2>
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />
      <button onClick={onBook}>Book Ride</button>
    </div>
  );
};

export default HomeScreen;
