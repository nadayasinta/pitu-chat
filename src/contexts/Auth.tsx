import { createContext, useContext, useEffect, useState } from "react";

import { FC, User } from "../types";

const localStorageName = "userData";

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

  useEffect(() => {
    const data = localStorage.getItem(localStorageName);
    if (data) {
      setUser(JSON.parse(data) as User);
    }
  }, []);

  const login = (user: User) => {
    localStorage.setItem(localStorageName, JSON.stringify(user));
    setUser(user);
  };
  const logout = () => {
    localStorage.removeItem(localStorageName);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
