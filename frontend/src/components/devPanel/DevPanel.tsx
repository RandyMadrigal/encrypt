import { motion } from "framer-motion";
import { parseHash } from "../../utils/parseHash";
import { useClipboard } from "../../hooks/useClipboard";
import { DevHeader } from "./DevHeader";
import { HashInfo } from "./HashInfo";
import { HashBreakdown } from "./HashBreakdown";

interface Props {
  hash: string;
}

export const DevPanel = ({ hash }: Props) => {
  const { copied, copy } = useClipboard();
  const parsed = parseHash(hash);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className="flex flex-col gap-4 p-4 rounded-xl font-mono text-xs"
        style={{
          background: "var(--bg-panel)",
          border: "1px solid var(--border-sm)",
        }}
      >
        <DevHeader copied={copied} onCopy={() => copy(hash)} />
        <HashInfo cost={parsed?.cost} />
        {parsed && (
          <HashBreakdown
            version={parsed.version}
            cost={parsed.cost}
            salt={parsed.salt}
            hashed={parsed.hashed}
          />
        )}
        <div
          className="px-3 py-2 rounded-lg break-all leading-relaxed"
          style={{
            background: "var(--bg-code)",
            border: "1px solid var(--border-xs)",
            color: "var(--text-2)",
          }}
        >
          {hash}
        </div>
      </div>
    </motion.div>
  );
};
