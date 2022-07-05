import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calculator from '../components/calculator/calculator';
import Homepage from '../components/Hompage/Homepage';
import QoutePage from '../components/QoutePage/QoutePage';

function Routing() {
  return (
    <Router>

      <Route path="/"><Homepage /></Route>
      <Route path="/Calculator"><Calculator /></Route>
      <Route path="/Qoutes"><QoutePage /></Route>

    </Router>

  );
}

export default Routing;
