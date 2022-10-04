import React, { useState, createContext } from "react";
import { Theme, ThemeContextType } from "../types/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);
export interface ReactNode extends React.PropsWithChildren {}
const ThemeProvider: React.FC<ReactNode> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>("");
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
