import React from "react";
import {ThemeContext} from "./themeContext";

function Footer() {
  const context = React.useContext(ThemeContext);
  return (
    <div className="body">
      <div className={`Footer ${context.theme}-theme`}>
        Copyright GlassWalker Studios
      </div>
    </div>
  );
}

export default Footer;
