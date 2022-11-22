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
              pressedSyms.filter((pressed) => pressed == props.fkey.key)
                .length != 0
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
