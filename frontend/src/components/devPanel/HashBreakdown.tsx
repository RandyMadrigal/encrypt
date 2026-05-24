interface Props {
  version: string;
  cost: string;
  salt: string;
  hashed: string;
}

const segments = [
  { label: "Version", color: "#3B82F6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" },
  { label: "Cost", color: "#8B5CF6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
  { label: "Salt", color: "#10B981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
  { label: "Hash", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
];

export const HashBreakdown = ({ version, cost, salt, hashed }: Props) => {
  const values = [version, cost, salt, hashed];

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] text-slate-600 uppercase tracking-wider">Hash Structure</span>
      <div className="flex flex-col gap-1.5">
        {segments.map(({ label, color, bg, border }, i) => (
          <div
            key={label}
            className="flex items-start gap-2 px-2.5 py-2 rounded-lg"
            style={{ background: bg, border: `1px solid ${border}` }}
          >
            <span
              className="text-[10px] font-semibold uppercase tracking-wide flex-shrink-0 mt-px w-12"
              style={{ color }}
            >
              {label}
            </span>
            <span className="text-slate-300 break-all leading-relaxed text-[11px]">
              {values[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
