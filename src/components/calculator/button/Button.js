import React from 'react';
import './Button.css';

function Button({
    name, clickHandler, equals, orangee,
}) {
    const handleClick = () => {
        clickHandler({ namee });
    };
    const className = [
        equals ? 'equals' : '',
        orangee ? 'orangee' : '',
    ];

    return (
        <button className={className.join(' ').trim()} type="button" onClick={handleClick}>
            {name}
        </button>
    );
}

export default Button;
