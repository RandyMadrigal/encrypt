import { HiOutlineShieldCheck } from "react-icons/hi2";

export const CardHeader = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Badge */}
      <div className="flex items-center gap-2">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            background: "rgba(6,182,212,0.1)",
            border: "1px solid rgba(6,182,212,0.2)",
            color: "#06B6D4",
          }}
        >
          <HiOutlineShieldCheck className="w-3 h-3" />
          bcrypt · salt rounds 12
        </div>
      </div>

      {/* Title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
          Password <span className="gradient-text">Encryption</span>
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
          Convert any text into a secure, irreversible bcrypt hash.
        </p>
      </div>
    </div>
  );
};
