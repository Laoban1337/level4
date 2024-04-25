import React from "react";
import ThemeContext from "./themeContext";
import Footer from "./Footer";

function Main() {
  const context = React.useContext(ThemeContext);
  return (
    <div className="main-container body">
      <div className={`main-container ${context.theme}-theme`}>
        {/* <img src="./Kt.jpg" alt="" className="hbc"/> */}
        <img src="./hbc2.jpg" alt="" className="hbc" />
        <br />
        
        
        {/* <button className={`button ${context}-theme`}>Change theme</button> */}
      </div>
    </div>
  );
}

export default Main;
