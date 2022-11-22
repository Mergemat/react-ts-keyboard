import KeyRow from './components/KeyRow/KeyRow';
import { useKeyboard } from './hooks/useKeyboard';

type Props = { lan: string };

const Keyboard = ({ lan }: Props) => {
  const [keys, pressedSyms] = useKeyboard(lan);

  return (
    <div
      onFocus={(event) => event.stopPropagation()}
      className="flex flex-col justify-center space-y-2"
    >
      {keys.map((row, index) => (
        <KeyRow pressedSyms={pressedSyms} key={index} row={row} />
      ))}
    </div>
  );
};

export default Keyboard;
