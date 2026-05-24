import { HiOutlineCodeBracket } from "react-icons/hi2";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-4 pb-8 text-[11px] text-slate-600">
      <span>Built by <span className="text-slate-400 font-medium">Chan</span></span>
      <span>·</span>
      <a
        href="https://github.com/RandyMadrigal/encrypt"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-slate-400 transition-colors duration-150 cursor-pointer"
      >
        <HiOutlineCodeBracket className="w-3.5 h-3.5" aria-hidden="true" />
        Source
      </a>
    </footer>
  );
};
