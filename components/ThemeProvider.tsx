import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC = (Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>(Props)</ThemeContext.Provider>;
};

export const useTheme = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return { isDarkMode, toggleTheme };
};

export default ThemeProvider;
