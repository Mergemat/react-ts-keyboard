import { allFuncKeys, RUkeys, ENkeys } from '../Keyboard.constants';
import { useCallback, useEffect, useState } from 'react';
import { FuncKeyProp, SymKeyProp } from '../Keyboard.types';

export const useKeyboard = (
  lan: string
): [(SymKeyProp | FuncKeyProp)[][], string[]] => {
  const [pressedSyms, setPressedSyms] = useState<string[]>([]);
  const keys = lan == 'RU' ? RUkeys : ENkeys;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      event.stopPropagation();

      if (event.key == 'Tab') {
        event.preventDefault();
      }
      const key = !allFuncKeys.includes(event.key)
        ? event.key.toLowerCase()
        : event.key;

      setPressedSyms((prev) => {
        return prev.filter((p) => p == key).length == 0 ? [...prev, key] : prev;
      });
    },
    [pressedSyms]
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      event.stopPropagation();
      if (event.key == 'Tab') {
        event.preventDefault();
      }
      const key = !allFuncKeys.includes(event.key)
        ? event.key.toLowerCase()
        : event.key;
      setPressedSyms((prev) => {
        return prev.filter((p) => p != key);
      });
    },
    [pressedSyms]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown]);

  return [keys, pressedSyms];
};
