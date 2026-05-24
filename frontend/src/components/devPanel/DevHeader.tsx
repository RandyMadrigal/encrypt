import { HiOutlineCommandLine, HiOutlineClipboardDocument, HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

interface Props {
  copied: boolean;
  onCopy: () => void;
}

export const DevHeader = ({ copied, onCopy }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2" style={{ color: "var(--text-2)" }}>
        <HiOutlineCommandLine className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="font-medium" style={{ color: "var(--text-1)" }}>
          Developer Info
        </span>
      </div>

      <button
        onClick={onCopy}
        className="
          flex items-center gap-1.5
          px-2.5 py-1 rounded-md
          text-[11px] font-medium
          transition-all duration-150
          cursor-pointer
        "
        style={{
          background: copied ? "rgba(6,182,212,0.15)" : "var(--bg-subtle)",
          border: copied ? "1px solid rgba(6,182,212,0.3)" : "1px solid var(--border-sm)",
          color: copied ? "#06B6D4" : "var(--text-2)",
        }}
        aria-label="Copy hash to clipboard"
      >
        {copied ? (
          <HiOutlineClipboardDocumentCheck className="w-3 h-3" aria-hidden="true" />
        ) : (
          <HiOutlineClipboardDocument className="w-3 h-3" aria-hidden="true" />
        )}
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};
