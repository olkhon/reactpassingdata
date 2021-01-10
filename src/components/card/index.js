import React from 'react';
import './styles.css';
import Button from '../button'


export default function Card ({text, trees, changeConsole, cold, toggleTheme}) {

changeConsole();
    return (
        <div>
            {text}
            {trees}
            {cold}
           <Button toggleTheme={toggleTheme} />
        </div>

    )
}