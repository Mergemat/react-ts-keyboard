import Keyboard from './components/Keyboard/Keyboard';
import { useState } from 'react';
import LanButtons from './components/LanButtons';

const App = () => {
  const [lan, setLan] = useState('RU');
  
  return (
    <div
      onFocus={(event) => event.stopPropagation()}
      className="flex h-screen flex-col items-center justify-center space-y-10 bg-slate-900"
    >
      <Keyboard lan={lan} />
      <LanButtons lan={lan} setKeyLan={(l: string) => setLan(l)} />
    </div>
  );
};

export default App;
