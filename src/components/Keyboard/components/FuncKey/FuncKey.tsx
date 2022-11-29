import React from 'react';
import { TFuncKey } from '../../Keyboard.types';

export type FuncKeyProps = {
  fkey: TFuncKey;
  active: boolean;
};

export const FuncKey = ({ fkey, active = false }: FuncKeyProps) => {
  return (
    <div
      style={{ width: `${fkey.width}px` }}
      className={`flex h-14 items-center justify-center rounded-md ${
        active ? 'bg-slate-500' : 'bg-slate-600'
      }`}
    >
      <span className="text-xl font-semibold text-slate-100">{fkey.key}</span>
    </div>
  );
};
