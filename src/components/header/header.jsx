import React from 'react'
import './header.css';
import { Link } from 'react-router-dom'

function header() {
  return (
    <>
      <div className="App">
        <nav className="App-header">
          <ul className="App-header-container" >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Calculations">Calculations</Link>
            </li>
            <li>
              <Link to="/Qoutes">Qoutes</Link>
            </li>
          </ul>
        </nav >
      </div >

    </>


  )
}

export default header     