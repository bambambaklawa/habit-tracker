import { createContext, Dispatch, SetStateAction } from 'react';

interface ContextType {
  user: number | null
  setUser: Dispatch<SetStateAction<number | null>>;
}

export const MyContext = createContext<ContextType | null>(null);