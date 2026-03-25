import { useEffect, useState } from "react";

interface propEncrypt {
  encrypt: string;
  loading?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@!";

export const Encrypt = ({ encrypt, loading }: propEncrypt) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!loading) {
      setDisplay(encrypt);
      return;
    }

    const interval = setInterval(() => {
      let fake = "";
      for (let i = 0; i < 20; i++) {
        fake += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(fake);
    }, 50);

    return () => clearInterval(interval);
  }, [loading, encrypt]);

  return (
    <div
      className="
        w-full
        min-h-[80px]
        p-3
        rounded-xl
        text-center
        text-green-400
        font-mono text-sm
        bg-black/40
        border border-green-500/20
        backdrop-blur-md
        flex items-center justify-center
        shadow-[0_0_20px_rgba(34,197,94,0.2)]
      "
    >
      {loading ? <span className="animate-pulse">{display}</span> : encrypt}
    </div>
  );
};
