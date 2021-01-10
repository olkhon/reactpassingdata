import React from 'react';
import './styles.css';


export default function Card ({text, trees, changeConsole, cold, toggleTheme}) {

changeConsole();
    return (
        <div>
            {text}
            {trees}
            {cold}
            <button onClick={toggleTheme}>ChangeTheme</button>
        </div>

    )
}