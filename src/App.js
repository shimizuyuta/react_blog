import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Create from "./components/Create.js/Create";

function App() {
  


  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className="content">
          <Switch>
            <Router exact path='/'>
              <Home/>
            </Router>
            <Router path='/create'>
              <Create/>
            </Router>
          </Switch>
        </div>
      </div>
    </Router>

  );
}


export default App;
