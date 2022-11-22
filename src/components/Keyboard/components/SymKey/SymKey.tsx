type Props = {
  fkey: { key: string };
  active: boolean;
};

export const SymKey = ({ fkey, active = false }: Props) => {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-md ${
        active ? 'bg-slate-500' : 'bg-slate-600'
      }`}
    >
      <span className="text-2xl font-semibold text-slate-100">{fkey.key}</span>
    </div>
  );
};
