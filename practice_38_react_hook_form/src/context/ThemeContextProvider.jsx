import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider( {children} ) {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme( old => {
      return old === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <ThemeContext.Provider value={ {
      theme,
      toggleTheme
    } }>
      {children}
    </ThemeContext.Provider>
  )
}