import React from 'react';
import './styles.css';


export default function Card ({text, trees, changeConsole, cold, setTheme}) {

changeConsole();
    return (
        <div>
            {text}
            {trees}
            {cold}
            <button onClick={ () => setTheme('grey')}>ChangeTheme</button>
        </div>

    )
}