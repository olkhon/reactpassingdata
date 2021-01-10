import React from 'react';
import './styles.css';


export default function Card ({text, trees, changeConsole, cold}) {

changeConsole();
    return (
        <div>
            {text}
            {trees}
            {cold}
        </div>
    )
}