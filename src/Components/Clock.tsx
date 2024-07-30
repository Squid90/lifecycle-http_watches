import React, { useEffect, useState } from 'react';
import moment from 'moment';

export interface IClock {
  id: number;
  name: string;
  timezoneOffset: number;
}

interface ClockProps {
  clock: IClock;
  deleteClock: (id: number) => void;
}

export const Clock: React.FC<ClockProps> = ({ clock, deleteClock }) => {

    const [currentTime, setCurrentTime] = useState(getCurrentTime(clock.timezoneOffset));

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(getCurrentTime(clock.timezoneOffset));
      }, 1000);
      return () => clearInterval(intervalId);
    }, [clock.timezoneOffset]);

  //const currentTime = moment().utcOffset(clock.timezoneOffset).format('HH:mm:ss');

  return (
    <div className="clock">
      <h2>{clock.name}</h2>
      <p>{currentTime}</p>
      <button onClick={() => deleteClock(clock.id)}>Удалить</button>
    </div>
  );
};



const getCurrentTime = (offset: number) => {
    return moment().utcOffset(offset * 60).format('HH:mm:ss');
  };