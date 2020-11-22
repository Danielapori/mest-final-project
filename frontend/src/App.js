import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './pages/Home';
import Signinpage from './pages/Signinpage';
import Signup from './pages/Signup';
import Header from './components/Header';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route exact={true} path="/signin" component= {Signinpage} />
        <Route exact={true} path="/join" component= {Signup}/>
        <Route exact={true} path="/contact" component= {ContactUs} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;