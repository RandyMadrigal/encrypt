import { AnimatePresence, motion } from "framer-motion";

interface Props {
  encrypt: string | null;
}

export const Encrypt = ({ encrypt }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {encrypt !== null ? (
        <motion.div
          key={encrypt}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-2"
          ref={(el) => {
            if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-medium uppercase tracking-wide"
              style={{ color: "var(--text-2)" }}
            >
              Hash Output
            </span>
            <span
              className="text-[10px] font-mono"
              style={{ color: "var(--text-3)" }}
            >
              bcrypt · $2b$
            </span>
          </div>
          <textarea
            value={encrypt}
            readOnly
            rows={3}
            className="
              w-full px-4 py-3 rounded-xl
              text-xs font-mono leading-relaxed
              resize-none focus:outline-none cursor-text select-all
              text-cyan-600 dark:text-cyan-300
            "
            style={{
              background: "rgba(6,182,212,0.05)",
              border: "1px solid rgba(6,182,212,0.15)",
              boxShadow: "0 0 24px rgba(6,182,212,0.04) inset",
            }}
          />
        </motion.div>
      ) : (
        <motion.div
          key="empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center h-16 rounded-xl"
          style={{
            background: "var(--bg-subtle)",
            border: "1px dashed var(--border-sm)",
          }}
        >
          <span className="text-xs" style={{ color: "var(--text-3)" }}>
            Hash will appear here
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
