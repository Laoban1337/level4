import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    console.log("Button clicked ");
  };
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
