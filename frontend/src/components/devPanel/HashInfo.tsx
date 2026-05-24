interface Props {
  cost?: string;
}

const costDescriptions: Record<string, string> = {
  "10": "~100ms — fast, moderate security",
  "11": "~200ms — balanced",
  "12": "~300ms — recommended for most apps",
  "13": "~600ms — high security",
  "14": "~1.2s — very high security",
};

export const HashInfo = ({ cost }: Props) => {
  const desc = cost ? costDescriptions[cost] ?? `${cost} rounds` : undefined;

  return (
    <div
      className="grid grid-cols-2 gap-2 p-3 rounded-lg text-[11px]"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-slate-600 uppercase tracking-wider text-[10px]">Algorithm</span>
        <span className="text-slate-300 font-medium">bcrypt</span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-slate-600 uppercase tracking-wider text-[10px]">Cost factor</span>
        <span className="text-slate-300 font-medium">{cost ?? "—"}</span>
      </div>
      {desc && (
        <div className="col-span-2 flex flex-col gap-0.5">
          <span className="text-slate-600 uppercase tracking-wider text-[10px]">Performance</span>
          <span className="text-slate-400">{desc}</span>
        </div>
      )}
      <div className="col-span-2 flex flex-col gap-0.5">
        <span className="text-slate-600 uppercase tracking-wider text-[10px]">Salt</span>
        <span className="text-slate-400">Embedded in hash (22 chars)</span>
      </div>
    </div>
  );
};
