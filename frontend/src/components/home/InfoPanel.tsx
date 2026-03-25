import { motion } from "framer-motion";

export const InfoPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="
        mt-4 w-full
        text-sm text-gray-300
        bg-white/5 border border-white/10
        rounded-xl p-4
        backdrop-blur-md
      "
    >
      {/* Qué hace */}
      <p className="font-semibold text-white mb-2 text-center">
        🔐 What does this app do?
      </p>

      <p className="text-center mb-4">
        Converts your input into a secure, irreversible hash — ideal for storing
        passwords safely.
      </p>

      {/* Why hashing */}
      <div className="text-left">
        <p className="font-semibold text-white mb-2">💡 Why use hashing?</p>

        <ul className="space-y-2">
          <li>
            🔑 <span className="text-white">Password storage:</span> Websites
            never store your real password, only the hash.
          </li>

          <li>
            🛡️ <span className="text-white">Security:</span> Even if a database
            leaks, hashes can’t be reversed easily.
          </li>

          <li>
            🔍 <span className="text-white">Verification:</span> Systems compare
            hashes instead of raw text.
          </li>
        </ul>
      </div>

      {/* Ejemplo */}
      <div className="mt-4 text-left">
        <p className="font-semibold text-white mb-2">🧪 Example</p>

        <div className="bg-black/30 p-3 rounded-lg font-mono text-xs break-all">
          password123 → $2a$12$X9k...a8sdjKJH23
        </div>
      </div>
    </motion.div>
  );
};
