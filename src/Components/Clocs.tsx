import React from 'react';
import { IClock, Clock } from './Clock.tsx';

interface ClocksProps {
  clocks: IClock[];
  deleteClock: (id: number) => void;
}

export const Clocks: React.FC<ClocksProps> = ({ clocks, deleteClock }) => {
  return (
    <div className="clocks">
      {clocks.map((clock) => (
        <Clock key={clock.id} clock={clock} deleteClock={deleteClock} />
      ))}
    </div>
  );
};