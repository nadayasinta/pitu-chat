import { createContext, useContext, useState } from "react";

import { FC, User } from "../types";

interface Context {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<Context>({
  user: undefined,
  login: (_) => {
    return;
  },
  logout: () => {
    return;
  },
});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(undefined);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
