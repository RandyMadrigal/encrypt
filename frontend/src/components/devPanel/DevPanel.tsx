import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { parseHash } from "../../utils/parseHash";
import { DevHeader } from "./DevHeader";
import { HashInfo } from "./HashInfo";
import { HashBreakdown } from "./HashBreakdown";

interface Props {
  hash: string;
}

export const DevPanel = ({ hash }: Props) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const parsed = parseHash(hash);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hash);
    clearTimeout(timeoutRef.current);
    setCopied(true);
    timeoutRef.current = setTimeout(() => setCopied(false), 1500);
  };

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
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <DevHeader copied={copied} onCopy={handleCopy} />
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
          className="px-3 py-2 rounded-lg break-all text-slate-400 leading-relaxed"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {hash}
        </div>
      </div>
    </motion.div>
  );
};
