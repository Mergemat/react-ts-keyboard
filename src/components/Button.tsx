import React, { PropsWithChildren } from 'react';

type Props = { active: boolean; onClick: () => void };

const Button = ({
  active = false,
  children,
  onClick = () => {},
}: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-md p-3 ${
        active ? 'bg-slate-500' : 'bg-slate-600'
      }`}
    >
      <span className="text-xl font-bold text-white">{children}</span>
    </button>
  );
};

export default Button;
