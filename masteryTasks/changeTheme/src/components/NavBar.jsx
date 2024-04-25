import React from "react";
import {ThemeContext} from "./themeContext";

function NavBar() {
  const context = React.useContext(ThemeContext);
  return (
    <div className={`nav- ${context.theme}-theme`}>
      <nav>
        <ul className="nav-list">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
