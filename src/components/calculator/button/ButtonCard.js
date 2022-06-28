import React from 'react';
import './Button.css';

function ButtonCard({ children }) {
  return (
    <div className="buttonBox">{children}</div>
  );
}

export default ButtonCard;
