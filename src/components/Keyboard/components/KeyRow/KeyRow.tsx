import { FuncKeyProp, SymKeyProp } from '../../Keyboard.types';

type Props = {
  row: (SymKeyProp | FuncKeyProp)[];
  pressedSyms: string[];
};

const KeyRow = ({ row, pressedSyms }: Props) => {
  return (
    <div className="flex space-x-2">
      {row.map((sym, index) => {
        const { component, props } = sym;
        const Key = component;
        return (
          <Key
            active={
              pressedSyms.includes(props.fkey.key)
            }
            key={index}
            {...sym.props}
          />
        );
      })}
    </div>
  );
};

export default KeyRow;
