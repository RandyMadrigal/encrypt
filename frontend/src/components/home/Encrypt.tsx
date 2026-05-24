import { AnimatePresence, motion } from "framer-motion";

interface Props {
  encrypt: string;
}

export const Encrypt = ({ encrypt }: Props) => {
  const hasResult = encrypt !== "-";

  return (
    <AnimatePresence mode="wait">
      {hasResult ? (
        <motion.div
          key={encrypt}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-2"
          ref={el => {
            if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
              Hash Output
            </span>
            <span className="text-[10px] text-slate-600 font-mono">bcrypt · $2b$</span>
          </div>
          <textarea
            value={encrypt}
            readOnly
            rows={3}
            className="
              w-full
              px-4 py-3
              rounded-xl
              text-xs text-cyan-300
              font-mono leading-relaxed
              resize-none
              transition-all duration-200
              focus:outline-none
              cursor-text
              select-all
            "
            style={{
              background: "rgba(6,182,212,0.04)",
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
            background: "rgba(255,255,255,0.02)",
            border: "1px dashed rgba(255,255,255,0.06)",
          }}
        >
          <span className="text-xs text-slate-600">Hash will appear here</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
