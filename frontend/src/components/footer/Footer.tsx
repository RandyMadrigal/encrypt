export const Footer = () => {
  return (
    <footer
      className="
  mt-8
  text-[11px]
  text-gray-500
  flex flex-col items-center gap-2
  opacity-70 hover:opacity-100
  transition
"
    >
      <p>
        Built by -<span className="text-white font-medium">Chaaaan</span>
      </p>

      <a
        href="https://github.com/RandyMadrigal/encrypt"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-2
          hover:text-white
          transition-colors
        "
      >
        View on GitHub
      </a>
    </footer>
  );
};
