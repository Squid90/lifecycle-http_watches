import React, { useState } from 'react';
import { Time } from './Components/Time.tsx';
import { Clocks } from './Components/Clocs.tsx';
import { IClock } from './Components/Clock.tsx';

const App: React.FC = () => {
  const [clocks, setClocks] = useState<IClock[]>([]);
  const [name, setName] = useState<string>('');
  const [timezoneOffset, setTimezoneOffset] = useState<number>(0);

  const addClock = () => {
    const newClock: IClock = {
      id: Date.now(),
      name: name,
      timezoneOffset: timezoneOffset,
    };
    setClocks([...clocks, newClock]);
    setName('');
    setTimezoneOffset(0);
  };

  const deleteClock = (id: number) => {
    setClocks(clocks.filter(clock => clock.id !== id));
  };

  return (
    <div className="App">
      <h1>Часы по временным зонам</h1>
      <Time name={name} timezoneOffset={timezoneOffset} setName={setName} setTimezoneOffset={setTimezoneOffset} addClock={addClock}/>
      <Clocks clocks={clocks} deleteClock={deleteClock} />
    </div>
  );
};

export default App;