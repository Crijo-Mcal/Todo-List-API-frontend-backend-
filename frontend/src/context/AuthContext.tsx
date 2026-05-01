import {createContext, useContext, useState} from "react";
import type {User} from "../types/login.type";

type UserInfo = {
  AccessToken: string;
  RefreshToken: string;
  user: User;
};

type AuthType = {
  User: UserInfo | null;
  setUser: (token: UserInfo | null) => void;
};

const AuthContext = createContext<AuthType | null>(null);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [User, setUser] = useState<UserInfo | null>(null);

  return (
    <AuthContext.Provider value={{User, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)!;
}
