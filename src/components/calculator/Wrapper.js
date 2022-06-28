import React from 'react';
import './Wrapper.css';

function calculator({ children }) {
  return (
    <div className="wrapper">{children}</div>
  );
}

export default calculator;
