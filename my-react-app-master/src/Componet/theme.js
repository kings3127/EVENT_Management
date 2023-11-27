import React, { useContext, useReducer } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, toggleTheme] = useReducer(
    theme => (theme === themes.dark ? themes.light : themes.dark),
    themes.light
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Toggle Theme
    </button>
  );
}



export default ThemeProvider;

