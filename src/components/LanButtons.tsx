import React, { useState } from 'react';
import Button from './Button';

type Props = { lan: string; setKeyLan: (l: string) => void };

const LanButtons = ({ lan, setKeyLan }: Props) => {
  return (
    <div className="flex space-x-3">
      <Button onClick={() => setKeyLan('ENG')} active={lan == 'ENG'}>
        ENG
      </Button>
      <Button onClick={() => setKeyLan('RU')} active={lan == 'RU'}>
        RU
      </Button>
    </div>
  );
};

export default LanButtons;
