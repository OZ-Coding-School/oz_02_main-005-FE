'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  account: string;
  nickname: string;
  email: string;
  password: string; 
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser 훅은 UserProvider 내에서 사용되어야 함');
  }
  return context;
};
