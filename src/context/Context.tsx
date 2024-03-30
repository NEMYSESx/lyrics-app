import { createContext, useState } from "react";
import data from "../api/data";

interface InitialState {
  id: number;
  aName: string;
  sName: string;
  album: string;
}

const initialState: InitialState[] = [...data];

export const AppContext = createContext<InitialState[]>(initialState);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState(initialState);
  return <AppContext.Provider value={songs}>{children}</AppContext.Provider>;
};

export default AppProvider;
