import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_PROTECTED_URL || "API_PROTECTED_URL", {
      credentials: "include", // Importante para enviar cookies
    })
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(data.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return { isAuthenticated };
}
