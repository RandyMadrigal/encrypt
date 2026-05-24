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
      style={{
        background: "var(--bg-subtle)",
        border: "1px solid var(--border-xs)",
      }}
    >
      <div className="flex flex-col gap-0.5">
        <span
          className="uppercase tracking-wider text-[10px]"
          style={{ color: "var(--text-3)" }}
        >
          Algorithm
        </span>
        <span className="font-medium" style={{ color: "var(--text-1)" }}>
          bcrypt
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span
          className="uppercase tracking-wider text-[10px]"
          style={{ color: "var(--text-3)" }}
        >
          Cost factor
        </span>
        <span className="font-medium" style={{ color: "var(--text-1)" }}>
          {cost ?? "—"}
        </span>
      </div>
      {desc && (
        <div className="col-span-2 flex flex-col gap-0.5">
          <span
            className="uppercase tracking-wider text-[10px]"
            style={{ color: "var(--text-3)" }}
          >
            Performance
          </span>
          <span style={{ color: "var(--text-2)" }}>{desc}</span>
        </div>
      )}
      <div className="col-span-2 flex flex-col gap-0.5">
        <span
          className="uppercase tracking-wider text-[10px]"
          style={{ color: "var(--text-3)" }}
        >
          Salt
        </span>
        <span style={{ color: "var(--text-2)" }}>Embedded in hash (22 chars)</span>
      </div>
    </div>
  );
};
