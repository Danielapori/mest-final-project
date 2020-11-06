import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import Signinpage from './components/Signinpage';
import Signup from './components/Signup';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component= {Signinpage} />
      <Header />
      <Route path="/join" component= {Signup}/>
      <Route path="/contact" component= {ContactUs} />
      <Footer />
      </Switch>
    </div>
    </Router>
  );
}

export default App;