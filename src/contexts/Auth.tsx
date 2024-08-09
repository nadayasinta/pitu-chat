import { createContext, useContext, useEffect, useState } from "react";

import { FC, User } from "../types";

const localStorageName = "userData";

interface Context {
  user: User | undefined;
  setUser: (user: User) => void;
  removeUser: () => void;
}

const AuthContext = createContext<Context>({
  user: undefined,
  setUser: (_) => {
    return;
  },
  removeUser: () => {
    return;
  },
});
export const AuthProvider: FC = ({ children }) => {
  const [user, setUserState] = useState<User | undefined>(undefined);

  useEffect(() => {
    const data = localStorage.getItem(localStorageName);
    if (data) {
      setUserState(JSON.parse(data) as User);
    }
  }, []);

  const setUser = (user: User) => {
    localStorage.setItem(localStorageName, JSON.stringify(user));
    setUserState(user);
  };
  const removeUser = () => {
    localStorage.removeItem(localStorageName);
    setUserState(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
