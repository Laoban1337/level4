import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ThemeContext from "./components/themeContext";

function App() {
  const [theme,setTheme]=useState("dark")

  const changeTheme =()=>{
    setTheme(prevTheme => prevTheme ==="dark" ? "light" :"dark")
    console.log("Button clicked ")
  }
  return (
    <ThemeContext.Provider value={{theme:theme, changeTheme:changeTheme}}>
      <NavBar />
      <Main />
      <button onClick={changeTheme}>Change Theme</button>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
