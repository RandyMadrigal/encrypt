interface Props {
  copied: boolean;
  onCopy: () => void;
}

export const DevHeader = ({ copied, onCopy }: Props) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <p className="text-white">🧠 Developer Info</p>

      <button
        onClick={onCopy}
        className="text-[10px] px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 transition"
      >
        {copied ? "✔ Copied" : "Copy"}
      </button>
    </div>
  );
};
