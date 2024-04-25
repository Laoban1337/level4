import React, {useContext} from 'react';
import {ThemeContext} from "./themeContext"

function Button(props) {
    
    const {theme, changeTheme} = useContext(ThemeContext)
    
    return (
        <button onClick={changeTheme} className={`${theme}-theme`}>Change Theme</button>
    );
}

export default Button;