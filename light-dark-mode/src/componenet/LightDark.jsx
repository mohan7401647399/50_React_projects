import React from "react";
import useLocalStorage from "./useLocalStorage";

const LightDark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleThemeToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleThemeToggle}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDark;
