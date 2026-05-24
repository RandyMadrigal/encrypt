import { HiOutlineSparkles } from "react-icons/hi2";
import { useEncrypt } from "../../hooks/useEncrypt";
import { InfoPanel } from "./InfoPanel";
import { DevPanel } from "../devPanel/DevPanel";
import { Encrypt } from "./Encrypt";

export const CardBody = () => {
  const { hash, text, setText, loading, showDev, toggleDev, handleSubmit } = useEncrypt();

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="text"
            className="text-xs font-medium text-slate-400 tracking-wide uppercase"
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
            required
            className="input-premium w-full h-11 px-4 rounded-xl text-sm text-white placeholder-slate-500"
          />
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

      {hash !== "-" && (
        <button
          onClick={toggleDev}
          className="
            flex items-center justify-center gap-1.5
            text-xs text-slate-500 hover:text-slate-300
            transition-colors duration-150 cursor-pointer py-1
          "
        >
          <span>{showDev ? "Hide" : "Show"} developer info</span>
          <span className="text-[10px]">{showDev ? "▲" : "▼"}</span>
        </button>
      )}

      {showDev && <DevPanel hash={hash} />}

      <InfoPanel />
    </div>
  );
};
