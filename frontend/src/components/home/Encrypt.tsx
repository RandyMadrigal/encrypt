import { motion, AnimatePresence } from "framer-motion";

interface propEncrypt {
  encrypt: string;
}

export const Encrypt = ({ encrypt }: propEncrypt) => {
  return (
    <div
      className="w-full"
      ref={(el) => {
        if (el && encrypt !== "-") {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }}
    >
      <AnimatePresence mode="wait">
        <motion.textarea
          key={encrypt}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          value={encrypt}
          readOnly
          className="
            w-full
            min-h-[80px]
            p-3
            rounded-xl
            text-center
            text-white
            font-mono text-sm
            bg-black/30
            border border-white/10
            backdrop-blur-md
            resize-none
          "
        />
      </AnimatePresence>
    </div>
  );
};
