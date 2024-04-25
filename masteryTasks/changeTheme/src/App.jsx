
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./components/themeContext";
import Button from "./components/Button";

function App() {
  return (
    <ThemeContextProvider>
      <NavBar />
      <Main />
      <Button />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
