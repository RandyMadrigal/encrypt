import { motion } from "framer-motion";
import { useState } from "react";
import { parseHash } from "../../utils/parseHash";
import { DevHeader } from "./DevHeader";
import { HashInfo } from "./HashInfo";
import { HashBreakdown } from "./HashBreakdown";

interface Props {
  hash: string;
}

export const DevPanel = ({ hash }: Props) => {
  const [copied, setCopied] = useState(false);

  if (!hash || hash === "-") return null;

  const parsed = parseHash(hash);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="
        mt-4 w-full
        text-xs text-gray-400
        bg-black/40
        border border-white/10
        rounded-xl p-4
        font-mono
      "
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

      <div className="mt-3 break-all text-gray-300">{hash}</div>
    </motion.div>
  );
};
