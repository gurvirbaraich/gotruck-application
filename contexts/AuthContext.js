import { createContext, useState } from "react";

export const AuthContext = createContext({
  logIn: () => {},
  logOut: () => {},
  isAutenticated: false,
});

export default function AuthProvider({ children }) {
  const [isAutenticated, setIsAutenticated] = useState(false);

  function logIn() {
    // TODO: Implement login logic.
    setIsAutenticated(true);
  }

  function logOut() {
    setIsAutenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAutenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
