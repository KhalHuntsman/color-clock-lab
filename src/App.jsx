import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css'

function ShowDateAndTime() { // set up the display of time and date, including both 12 and 24 hr clocks with an auto updater
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // interval set to update/tick/count every 1000 miliseconds (1 second)

    return () => clearInterval(timer); // cleans up / clears the interval on unmount to avoid memory leaks or unnecessary updates to components that no longer exist
  }, []); // [] run only once on unmount

  const formattedDate = format(currentTime, 'MMMM do, yyyy');
  const formattedTime24hr = format(currentTime, 'HH:mm:ss');
  const formattedTime12hr = format(currentTime, 'hh:mm:ss a');

  return ( // displays the real-time time and date
    <div>
      <p>Today's date is:</p>
      <p id ="date">{formattedDate}</p>
      <div id ="clock-container">
      <p>The current time is:</p>
      <p id ="hr24">{formattedTime12hr}</p>
      <p>Depending on the country you reside or your occupation, you might prefer this time:</p>
      <p id ="hr24">{formattedTime24hr}</p>
      </div>
    </div>
  );
}

export default ShowDateAndTime;
