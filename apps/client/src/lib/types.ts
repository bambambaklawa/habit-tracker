export type UserContextType = {
  user: { id: number; username: string } | null;
  setUser: (value: { id: number; username: string } | null) => void;
};
