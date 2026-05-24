import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useEncrypt } from "../../hooks/useEncrypt";
import { InfoPanel } from "./InfoPanel";
import { DevPanel } from "../devPanel/DevPanel";
import { Encrypt } from "./Encrypt";

const encoder = new TextEncoder();
const byteLength = (s: string) => encoder.encode(s).length;

const BCRYPT_BYTE_LIMIT = 72;
const MAX_CHARS = 200;

export const CardBody = () => {
  const { hash, text, setText, loading, handleSubmit } = useEncrypt();
  const [showDev, setShowDev] = useState(false);

  const bytes = byteLength(text);
  const exceedsLimit = bytes > BCRYPT_BYTE_LIMIT;

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="text"
            className="text-xs font-medium tracking-wide uppercase"
            style={{ color: "var(--text-2)" }}
          >
            Input
          </label>
          <input
            id="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to encrypt..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={MAX_CHARS}
            required
            className="input-premium w-full h-11 px-4 rounded-xl text-sm"
          />

          {text.length > 0 && (
            <div className="flex items-start justify-between gap-2 px-0.5">
              <span
                className="text-[11px] leading-tight"
                style={{ color: exceedsLimit ? "rgba(245,158,11,0.9)" : "transparent" }}
                aria-live="polite"
              >
                {exceedsLimit
                  ? `⚠ bcrypt truncates after 72 bytes (${bytes} bytes entered — only the first 72 will be hashed)`
                  : "placeholder"}
              </span>
              <span
                className="text-[11px] font-mono flex-shrink-0"
                style={{ color: "var(--text-3)" }}
              >
                {text.length}/{MAX_CHARS}
              </span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full h-11 rounded-xl
            text-sm font-semibold text-white
            flex items-center justify-center gap-2
            transition-all duration-200 cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            active:scale-[0.98]
          "
          style={{
            background: loading
              ? "rgba(59,130,246,0.5)"
              : "linear-gradient(135deg, #06B6D4, #3B82F6)",
            boxShadow: loading ? "none" : "0 0 24px rgba(6,182,212,0.25)",
          }}
        >
          {loading ? (
            <>
              <span
                className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                aria-hidden="true"
              />
              Encrypting...
            </>
          ) : (
            <>
              <HiOutlineSparkles className="w-4 h-4" aria-hidden="true" />
              Encrypt
            </>
          )}
        </button>
      </form>

      <Encrypt encrypt={hash} />

      {hash !== null && (
        <button
          onClick={() => setShowDev((prev) => !prev)}
          className="
            flex items-center justify-center gap-1.5
            text-xs transition-colors duration-150 cursor-pointer py-1
          "
          style={{ color: "var(--text-3)" }}
        >
          <span>{showDev ? "Hide" : "Show"} developer info</span>
          <span className="text-[10px]">{showDev ? "▲" : "▼"}</span>
        </button>
      )}

      {hash !== null && showDev && <DevPanel hash={hash} />}

      <InfoPanel />
    </div>
  );
};
