// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  // Simulated auth status (change to true to test protected routes)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return { isAuthenticated, login: () => setIsAuthenticated(true), logout: () => setIsAuthenticated(false) };
}
