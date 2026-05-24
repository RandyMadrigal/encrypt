import { useEffect, useRef, useState } from "react";

export const useClipboard = (resetDelay = 1500) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    clearTimeout(timeoutRef.current);
    setCopied(true);
    timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
  };

  return { copied, copy };
};
