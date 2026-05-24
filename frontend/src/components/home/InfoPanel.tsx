import { motion } from "framer-motion";
import {
  HiOutlineKey,
  HiOutlineShieldCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

const items = [
  {
    icon: HiOutlineKey,
    color: "#06B6D4",
    title: "Password storage",
    desc: "Systems store only the hash — never the raw password.",
  },
  {
    icon: HiOutlineShieldCheck,
    color: "#8B5CF6",
    title: "Breach resistant",
    desc: "Even if a database leaks, bcrypt hashes are impractical to reverse.",
  },
  {
    icon: HiOutlineMagnifyingGlass,
    color: "#3B82F6",
    title: "Verification",
    desc: "Systems compare hashes at login without ever knowing your password.",
  },
];

export const InfoPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.3, ease: "easeOut" }}
      className="flex flex-col gap-4 pt-2"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="flex items-center gap-2">
        <HiOutlineInformationCircle className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          Why bcrypt?
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {items.map(({ icon: Icon, color, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <div
              className="mt-0.5 w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}18`, border: `1px solid ${color}28` }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color }} aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium text-slate-300">{title}</span>
              <span className="text-xs text-slate-500 leading-relaxed">{desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Example */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Example</span>
        <div
          className="px-3 py-2 rounded-lg font-mono text-[11px] text-slate-400 break-all leading-relaxed"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-slate-500">input: </span>
          <span className="text-slate-300">password123</span>
          <br />
          <span className="text-slate-500">hash: </span>
          <span className="text-cyan-600">$2b$12$X9k...KJH23</span>
        </div>
      </div>
    </motion.div>
  );
};
