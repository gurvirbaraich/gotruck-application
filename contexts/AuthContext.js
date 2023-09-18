import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAutenticated: false,
});

export default function AuthProvider({ children }) {
  const [isAutenticated, setIsAutenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAutenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
