import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Report from './pages/Report';


function App(){
  return(
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' component={Report}/>
          <Route path='/products' component={Product}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;