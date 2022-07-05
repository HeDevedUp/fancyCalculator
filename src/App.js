import React from 'react';
import Header from './components/header/header';
import Homepage from './components/Hompage/Homepage';
import QoutePage from './components/QoutePage/QoutePage';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" element={<Home />}> </Route>

    </Router>
  );
}

export default App;
