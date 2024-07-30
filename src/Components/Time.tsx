import React from 'react';

interface TimeProps {
  name: string;
  timezoneOffset: number;
  setName: (name: string) => void;
  setTimezoneOffset: (offset: number) => void;
  addClock: () => void;
}

export const Time: React.FC<TimeProps> = ({ name, timezoneOffset, setName, setTimezoneOffset, addClock }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Смещение (час)"
        value={timezoneOffset}
        onChange={(e) => setTimezoneOffset(Number(e.target.value))}
      />
      <button onClick={addClock}>Добавить часы</button>
    </div>
  );
};